
import { getLocalCoachingResponse, getGrowModelInfo } from './localCoaching.js';

// Rate limiting helper
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between requests

// Session state for local coaching
let localCoachingSession = { step: 0, category: null };

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
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  // If no API key or manual offline mode, use local coaching immediately
  if ((!apiKey && useLocalFallback) || isManualOffline) {
    console.log(isManualOffline ? 'Manual offline mode enabled' : 'No API key found, using local coaching');
    return getLocalGrowResponse(userInput);
  }

  if (!apiKey) {
    throw new Error('OpenAI API key is not configured. Please check your .env file.');
  }

  // Try OpenAI API first (only if not in manual offline mode)
  try {
    return await getOpenAIResponse(userInput);
  } catch (error) {
    console.error('OpenAI API failed:', error);
    
    // Use local fallback if enabled (automatic fallback only)
    if (useLocalFallback) {
      console.log('Falling back to local coaching due to API failure');
      const localResponse = getLocalGrowResponse(userInput);
      return `🤖 **[Offline Mode]** API temporarily unavailable, using local coaching:\n\n${localResponse}`;
    }
    
    throw error;
  }
}

async function getOpenAIResponse(userInput) {
  const prompt = `
You are a professional GROW model coach. The user's input is:
"${userInput}"

Follow the GROW coaching framework:
- G: Help define the GOAL.
- R: Ask about the current REALITY.
- O: Suggest OPTIONS.
- W: Guide to the WILL/action step.

Respond in a coach-like tone, step by step.
  `;

  // Rate limiting: ensure minimum time between requests
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
    console.log(`Rate limiting: waiting ${waitTime}ms before making request`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  lastRequestTime = Date.now();

  console.log('Making OpenAI API request...');

  const makeRequest = async () => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', errorData);
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your OpenAI API key.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else if (response.status === 403) {
        throw new Error('API access forbidden. Please check your API key permissions.');
      } else {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }
    }

    const data = await response.json();
    console.log('API Response received');
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from OpenAI API');
    }
    
    return data.choices[0].message.content;
  };

  return await retryWithBackoff(makeRequest);
}

function getLocalGrowResponse(userInput) {
  const coachingResult = getLocalCoachingResponse(userInput, localCoachingSession);
  
  // Update session state
  localCoachingSession.step = coachingResult.nextStep;
  localCoachingSession.category = coachingResult.category;
  
  return coachingResult.response;
}

// Reset local coaching session
export function resetLocalSession() {
  localCoachingSession = { step: 0, category: null };
}

// Get GROW model information
export function getGrowInfo() {
  return getGrowModelInfo();
}
