import { getLocalCoachingResponse, getGrowModelInfo, getInitialCoachingQuestion } from './localCoaching.js';

// Rate limiting helper
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between requests

// Session state for local coaching with interactive flow
let localCoachingSession = { 
  step: 0, 
  category: null, 
  phase: 'goal', 
  questionIndex: 0, 
  isComplete: false,
  askedQuestions: {
    goal: [],
    reality: [],
    options: [],
    will: []
  },
  userAnalysis: {
    goalSummary: null,
    realitySummary: null,
    optionsSummary: null,
    actionCommitment: null,
    emotionalJourney: []
  }
};

// Retry helper function
async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Only retry on rate limit errors
      if (error.message.includes('Rate limit exceeded')) {
        const delay = baseDelay * Math.pow(2, i); // Exponential backoff
        console.log(`Rate limited. Retrying in ${delay}ms... (attempt ${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error; // Don't retry other errors
      }
    }
  }
}

export async function getGrowResponse(userInput, useLocalFallback = true, isManualOffline = false) {
  const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  console.log('Using Groq API Key:', groqApiKey);
  console.log('Using OpenAI API Key:', openaiApiKey);

  // If no API keys or manual offline mode, use local coaching immediately
  if ((!groqApiKey && !openaiApiKey && useLocalFallback) || isManualOffline) {
    console.log(isManualOffline ? 'Manual offline mode enabled' : 'No API keys found, using local coaching');
    return getLocalGrowResponse(userInput);
  }

  if (!groqApiKey && !openaiApiKey) {
    throw new Error('No API keys configured. Please check your .env file for VITE_GROQ_API_KEY or VITE_OPENAI_API_KEY.');
  }

  // Try Groq/OpenAI API first (only if not in manual offline mode)
  try {
    return await getGroqResponse(userInput);
  } catch (error) {
    console.error('API failed:', error);
    
    // Use local fallback if enabled (automatic fallback only)
    if (useLocalFallback) {
      console.log('Falling back to local coaching due to API failure');
      const localResponse = getLocalGrowResponse(userInput);
      return `🤖 **[Offline Mode]** API temporarily unavailable, using local coaching:\n\n${localResponse}`;
    }
    
    throw error;
  }
}

async function getGroqResponse(userInput) {
  const prompt = `You are a professional GROW model coach with years of experience helping people achieve their goals. The user's input is: "${userInput}"

As a skilled GROW coach, you should:

1. **GOAL Phase**: Help define clear, specific, measurable goals
   - Distinguish between END GOALS (ultimate destination) and PERFORMANCE GOALS (milestones)
   - Ensure the coachee feels ownership of their goal
   - Ask: "What do you want to achieve?" "What does success look like?"

2. **REALITY Phase**: Explore current situation objectively
   - Focus on facts, not opinions or assumptions
   - Ask: "What's happening right now?" "Who's involved?" "What have you tried?"

3. **OPTIONS Phase**: Generate multiple possibilities
   - Quantity over quality initially - brainstorm freely
   - Ask: "What could you do?" "What would someone successful do?" "What if constraints were removed?"

4. **WILL Phase**: Convert discussion into commitment
   - Focus on concrete actions with timelines
   - Ask: "What will you do?" "When?" "What support do you need?"

Respond as a warm, encouraging, professional coach. Ask ONE focused question at a time. Acknowledge their input before moving forward. Keep responses conversational and supportive.`;

  // Rate limiting: ensure minimum time between requests
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
    console.log(`Rate limiting: waiting ${waitTime}ms before making request`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  lastRequestTime = Date.now();

  console.log('Making Groq API request...');

  const makeRequest = async () => {
    // Try Groq first, then fallback to OpenAI
    const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;
    const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

    console.log('Using Groq API Key:', groqApiKey);
    console.log('Using OpenAI API Key:', openaiApiKey);

    if (groqApiKey) {
      try {
        console.log('Trying Groq API...');
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqApiKey}`,
          },
          body: JSON.stringify({
            //model: "mixtral-8x7b-32768", // Fast and capable model
            model: 'deepseek-r1-distill-llama-70b',
            messages: [
              {
                role: "system",
                content: "You are a professional GROW model coach. Be warm, encouraging, and ask one focused question at a time."
              },
              {
                role: "user", 
                content: prompt
              }
            ],
            max_tokens: 500,
            temperature: 0.7,
          }),
        });

        console.log('Groq Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Groq API Response received');
          
          if (data.choices && data.choices[0] && data.choices[0].message) {
            return `🚀 **[Groq-Powered Coach]**\n\n${data.choices[0].message.content}`;
          }
        } else {
          console.log('Groq API failed, trying OpenAI fallback...');
        }
      } catch (error) {
        console.log('Groq API error, trying OpenAI fallback:', error);
      }
    }

    // Fallback to OpenAI if Groq fails or no Groq key
    if (openaiApiKey) {
      console.log('Using OpenAI fallback...');
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a professional GROW model coach. Be warm, encouraging, and ask one focused question at a time."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      console.log('OpenAI Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your API keys in .env file.');
        } else if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        } else if (response.status === 403) {
          throw new Error('API access forbidden. Please check your API key permissions.');
        } else if (response.status === 402 || errorData.error?.type === 'insufficient_quota') {
          throw new Error('OpenAI quota exceeded - but Groq API is available and faster!');
        } else {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }
      }

      const data = await response.json();
      console.log('OpenAI API Response received');
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from API');
      }
      
      return data.choices[0].message.content;
    }

    throw new Error('No API keys available. Please configure VITE_GROQ_API_KEY or VITE_OPENAI_API_KEY in your .env file.');
  };

  return await retryWithBackoff(makeRequest);
}

function getLocalGrowResponse(userInput) {
  const coachingResult = getLocalCoachingResponse(userInput, localCoachingSession);
  
  // Update session state with new interactive structure
  localCoachingSession.step = coachingResult.nextStep;
  localCoachingSession.category = coachingResult.category;
  localCoachingSession.phase = coachingResult.phase;
  localCoachingSession.questionIndex = coachingResult.questionIndex;
  localCoachingSession.isComplete = coachingResult.isComplete;
  
  // Update asked questions tracking
  if (coachingResult.askedQuestions) {
    localCoachingSession.askedQuestions = coachingResult.askedQuestions;
  }
  
  // Store intelligent analysis data
  if (coachingResult.analysis) {
    const analysis = coachingResult.analysis;
    
    // Store summaries as we progress
    if (analysis.goalSummary) localCoachingSession.userAnalysis.goalSummary = analysis.goalSummary;
    if (analysis.realitySummary) localCoachingSession.userAnalysis.realitySummary = analysis.realitySummary;
    if (analysis.optionsSummary) localCoachingSession.userAnalysis.optionsSummary = analysis.optionsSummary;
    if (analysis.actionCommitment) localCoachingSession.userAnalysis.actionCommitment = analysis.actionCommitment;
    
    // Track emotional journey
    localCoachingSession.userAnalysis.emotionalJourney.push({
      phase: localCoachingSession.phase,
      tone: analysis.emotionalTone,
      confidence: analysis.confidenceLevel,
      input: userInput.substring(0, 50) + '...'
    });
  }
  
  return coachingResult.response;
}

// Reset local coaching session
export function resetLocalSession() {
  localCoachingSession = { 
    step: 0, 
    category: null, 
    phase: 'goal', 
    questionIndex: 0, 
    isComplete: false,
    askedQuestions: {
      goal: [],
      reality: [],
      options: [],
      will: []
    },
    userAnalysis: {
      goalSummary: null,
      realitySummary: null,
      optionsSummary: null,
      actionCommitment: null,
      emotionalJourney: []
    }
  };
}

// Get GROW model information
export function getGrowInfo() {
  return getGrowModelInfo();
}

// Get initial coaching question
export function getInitialQuestion() {
  return getInitialCoachingQuestion();
}
