import OpenAI from 'openai';

export interface CoachingContext {
  phase: 'goal' | 'reality' | 'options' | 'way_forward';
  conversationHistory: Array<{
    role: 'user' | 'coach';
    content: string;
    phase: string;
  }>;
  userGoal?: string;
  currentReality?: string;
  identifiedOptions?: string[];
  sessionSummary?: string;
}

export class AICoachingService {
  private openai: OpenAI | null = null;
  private apiKey: string | null = null;

  constructor(apiKey?: string) {
    if (apiKey) {
      this.setApiKey(apiKey);
    }
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    this.openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // Note: In production, use a backend API
    });
  }

  isConfigured(): boolean {
    return this.openai !== null && this.apiKey !== null;
  }

  private getSystemPrompt(phase: string): string {
    const basePrompt = `You are an expert professional coach using the GROW model (Goal, Reality, Options, Way Forward). 
You are warm, supportive, and ask powerful questions that help people discover their own insights.
Keep responses concise (2-3 sentences max) and always ask a follow-up question to deepen understanding.
Use a conversational, friendly tone while maintaining professionalism.`;

    const phaseSpecificPrompts = {
      goal: `${basePrompt}
CURRENT PHASE: GOAL - Help the person clarify what they want to achieve.
Focus on: specific outcomes, importance, motivation, success criteria.
Ask questions like: "What specifically do you want to accomplish?" "Why is this important to you?" "How will you know you've succeeded?"`,

      reality: `${basePrompt}
CURRENT PHASE: REALITY - Help explore the current situation objectively.
Focus on: current state, challenges, resources, constraints, what's working.
Ask questions like: "What's the current situation?" "What's been tried before?" "What resources do you have?" "What's working well already?"`,

      options: `${basePrompt}
CURRENT PHASE: OPTIONS - Help brainstorm possible approaches and solutions.
Focus on: different approaches, creative solutions, resources, support available.
Ask questions like: "What options do you see?" "What else could you try?" "Who could help?" "What would you do if you had unlimited resources?"`,

      way_forward: `${basePrompt}
CURRENT PHASE: WAY FORWARD - Help create specific, actionable commitments.
Focus on: specific actions, timelines, accountability, obstacles, first steps.
Ask questions like: "What will you do?" "When will you start?" "What might get in the way?" "What's your very first step?"`
    };

    return phaseSpecificPrompts[phase as keyof typeof phaseSpecificPrompts] || basePrompt;
  }

  private buildConversationContext(context: CoachingContext): string {
    let contextSummary = '';
    
    if (context.userGoal) {
      contextSummary += `USER'S GOAL: ${context.userGoal}\n`;
    }
    
    if (context.currentReality) {
      contextSummary += `CURRENT REALITY: ${context.currentReality}\n`;
    }
    
    if (context.identifiedOptions && context.identifiedOptions.length > 0) {
      contextSummary += `OPTIONS DISCUSSED: ${context.identifiedOptions.join(', ')}\n`;
    }

    // Add recent conversation history (last 4 exchanges)
    const recentHistory = context.conversationHistory.slice(-4);
    if (recentHistory.length > 0) {
      contextSummary += '\nRECENT CONVERSATION:\n';
      recentHistory.forEach(msg => {
        contextSummary += `${msg.role.toUpperCase()}: ${msg.content}\n`;
      });
    }

    return contextSummary;
  }

  async generateCoachResponse(
    userInput: string, 
    context: CoachingContext
  ): Promise<{ response: string; error?: string }> {
    if (!this.isConfigured()) {
      return {
        response: this.getFallbackResponse(userInput, context.phase),
        error: 'OpenAI API not configured'
      };
    }

    try {
      const systemPrompt = this.getSystemPrompt(context.phase);
      const contextInfo = this.buildConversationContext(context);
      
      const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: `${systemPrompt}\n\nCONTEXT:\n${contextInfo}`
        },
        {
          role: 'user',
          content: userInput
        }
      ];

      const completion = await this.openai!.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 150,
        temperature: 0.7,
        presence_penalty: 0.1,
        frequency_penalty: 0.1
      });

      const response = completion.choices[0]?.message?.content?.trim();
      
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      return { response };

    } catch (error) {
      console.error('OpenAI API Error:', error);
      return {
        response: this.getFallbackResponse(userInput, context.phase),
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async generatePhaseTransitionPrompt(
    fromPhase: string, 
    toPhase: string, 
    context: CoachingContext
  ): Promise<string> {
    if (!this.isConfigured()) {
      return this.getDefaultPhasePrompt(toPhase);
    }

    try {
      const systemPrompt = `You are a professional coach transitioning from ${fromPhase} to ${toPhase} in the GROW model.
Create a smooth transition that acknowledges what was discussed and introduces the next phase.
Keep it concise (2-3 sentences) and engaging.`;

      const contextInfo = this.buildConversationContext(context);

      const completion = await this.openai!.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `${systemPrompt}\n\nCONTEXT:\n${contextInfo}`
          },
          {
            role: 'user',
            content: `Please create a transition from ${fromPhase} to ${toPhase} phase.`
          }
        ],
        max_tokens: 100,
        temperature: 0.8
      });

      return completion.choices[0]?.message?.content?.trim() || this.getDefaultPhasePrompt(toPhase);
    } catch (error) {
      console.error('Phase transition error:', error);
      return this.getDefaultPhasePrompt(toPhase);
    }
  }

  private getFallbackResponse(_userInput: string, phase: string): string {
    const fallbackResponses = {
      goal: [
        "That's an interesting goal! Can you tell me more about why this matters to you?",
        "I can hear the importance in what you're sharing. What would achieving this look like?",
        "Help me understand - what success would mean for you in this area?"
      ],
      reality: [
        "Thank you for sharing that perspective. What else is influencing this situation?",
        "I'm getting a clearer picture. What resources do you currently have available?",
        "That's helpful context. What aspects of this situation are working well for you?"
      ],
      options: [
        "Those are valuable insights. What other possibilities come to mind?",
        "Interesting approach! What other ways could you tackle this challenge?",
        "I can see you're thinking creatively. What support or resources could help you?"
      ],
      way_forward: [
        "That sounds like a solid direction. What would be your very first step?",
        "Great thinking! When do you see yourself beginning this action?",
        "I can hear your commitment. What might get in the way, and how would you handle it?"
      ]
    };

    const responses = fallbackResponses[phase as keyof typeof fallbackResponses] || fallbackResponses.goal;
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private getDefaultPhasePrompt(phase: string): string {
    const prompts = {
      goal: "Let's explore what you want to achieve. What specific goal would you like to work on?",
      reality: "Now let's look at your current situation. What's the reality you're facing right now?",
      options: "Time to explore possibilities. What different approaches could you consider?",
      way_forward: "Let's create your action plan. What specific steps will you take moving forward?"
    };

    return prompts[phase as keyof typeof prompts] || "Let's continue our coaching conversation.";
  }

  // Method to extract key insights from conversation for context building
  extractInsights(conversationHistory: Array<{role: string; content: string; phase: string}>): {
    goal?: string;
    reality?: string;
    options?: string[];
  } {
    const insights: { goal?: string; reality?: string; options?: string[] } = {};
    
    // Extract goal from goal phase conversations
    const goalMessages = conversationHistory.filter(msg => msg.phase === 'goal' && msg.role === 'user');
    if (goalMessages.length > 0) {
      insights.goal = goalMessages[goalMessages.length - 1].content;
    }
    
    // Extract reality from reality phase
    const realityMessages = conversationHistory.filter(msg => msg.phase === 'reality' && msg.role === 'user');
    if (realityMessages.length > 0) {
      insights.reality = realityMessages[realityMessages.length - 1].content;
    }
    
    // Extract options from options phase
    const optionMessages = conversationHistory.filter(msg => msg.phase === 'options' && msg.role === 'user');
    if (optionMessages.length > 0) {
      insights.options = optionMessages.map(msg => msg.content);
    }
    
    return insights;
  }
}
