// Local GROW Coaching Knowledge Base
// This serves as a fallback when OpenAI API is unavailable

export const growKnowledgeBase = {
    // GROW Model Framework
    framework: {
        G: "GOAL - What do you want to achieve?",
        R: "REALITY - What is your current situation?",
        O: "OPTIONS - What could you do?",
        W: "WILL/WAY FORWARD - What will you do?"
    },

    // Enhanced Goal Setting Framework
    goalFramework: {
        endGoals: "End goals are the final objective - your ultimate destination",
        performanceGoals: "Performance goals identify the level that will give you the best chance of achieving the end goal",
        ownership: "You need to feel ownership for the goal - choice and responsibility drive self-motivation",
        agreement: "Goals must be agreed on between all parties involved"
    },

    // Enhanced Reality Framework
    realityFramework: {
        foundation: "Goals can't be established until the current situation is known and understood",
        detachment: "Potential misperceptions of both coach and coachee. As a coach you must work to detach yourself from the goal",
        following: "A coach follows the interest or chain of thought of the coachee, while monitoring how that relates to the subject as a whole",
        trust: "Following the coachee's train of thought rather than asserting his own, the coach gains the coachee's confidence and trust"
    },

    // Enhanced Options Framework
    optionsFramework: {
        purpose: "Purpose is not to find the right answer but to create and list as many alternative courses of action as possible",
        quantity: "Quantity is more important than quality at this point",
        noJudgment: "If preferences, censorship, ridicule, obstacles, or the need for completeness are expressed during collection, potentially valuable contributions will be missed and choices will be limited",
        coacheeFirst: "Coach does all he/she can to draw these options from the coachee or from the team",
        coachInput: "When does the coach add input – once the coachee has exhausted all possibilities, the coach may simply say, 'I have another couple of options'",
        reviewing: "Reviewing the options can lead to additional options"
    },

    // Enhanced Will/Way Forward Framework
    willFramework: {
        purpose: "Purpose is to convert a discussion into a decision",
        decisive: "What are you going to do? Not, 'What are you thinking of doing?' or 'Which of these do you prefer?'",
        commitment: "Focus on concrete commitment to action rather than preferences or possibilities"
    },

    // Sample Will/Way Forward Questions (enhanced)
    willQuestions: [
        "What are you going to do?",
        "When are you going to do it?",
        "Will this action meet your goal?",
        "What obstacles might you meet along the way?",
        "Who needs to know?",
        "What support do you need?",
        "How and when are you going to get that support?",
        "What other considerations do you have?"
    ],

    // Sample Options Questions (enhanced)
    optionsQuestions: [
        "What options do you have for steps to resolve this issue?",
        "What else might you do?",
        "What would someone who handles this kind of issue really well do?",
        "What if you had more time for this issue, what might you try?",
        "What if you had less time? What might that force you to try?",
        "Imagine that you had more energy and confidence, what could you try then?",
        "What if somebody said: 'Money no object'? What might you try then?",
        "If you had total power, what might you try then?",
        "What if you could start again?",
        "If the constraints you identified earlier were removed - what could you do then?",
        "What should you do?",
        "Would you like another suggestion?",
        "What are the costs and benefits of each of these ideas?"
    ],

    // Sample Reality Questions (enhanced)
    realityQuestions: [
        "What is happening right now? Focus only on facts, what is really happening at the moment. (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)",
        "Who is directly and indirectly involved?",
        "If things are not going well with this issue, who else gets drawn in?",
        "If things are not going well, what happens to you?",
        "What about others involved, what happens to them?",
        "What have you done about this so far? With what results?",
        "How often have you tried?",
        "What is missing in this situation?",
        "What is holding you back from finding a way forward?"
    ],

    // Sample Goal Questions (enhanced)
    goalQuestions: [
        "What is the aim of this discussion?",
        "What do you want to achieve long term? (This is your END GOAL)",
        "What does success look like to you?",
        "How much personal control or influence do you have over your goal?",
        "What would be a milestone on the way? (These are your PERFORMANCE GOALS)",
        "By when do you want to achieve it?",
        "Is that positive, challenging and attainable?",
        "How will you measure it?",
        "What level of performance do you think will give you the best chance of success?",
        "How can we make sure you feel full ownership of this goal?",
        "Who else needs to agree on this goal for it to be successful?"
    ],

    // Common coaching scenarios and responses
    scenarios: {
        career: {
            keywords: ["career", "job", "work", "promotion", "professional", "workplace", "boss", "salary"],
            responses: [
                `Let's explore your career goals using the GROW model. I'd like to distinguish between your END GOAL (your ultimate career destination) and PERFORMANCE GOALS (the levels that will help you get there).

First, let's clarify: What is the aim of this discussion? What do you want to achieve long term in your career?

What does career success look like to you? Remember, you need to feel full ownership of this goal for it to motivate you effectively.`,

                `Now let's examine your current REALITY: We need to understand your current situation clearly before we can move forward effectively.

What is happening right now with your career? Focus only on the facts - what is really happening at the moment? (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)

Who is directly and indirectly involved in your career situation? If things are not going well, who else gets drawn in?`,

                `Great! Now let's explore your OPTIONS: The purpose here is not to find the right answer but to create and list as many alternative courses of action as possible. Quantity is more important than quality at this point - no judgment yet!

What options do you have for steps to advance your career? What else might you do?

What would someone who handles career advancement really well do? What if you had more time for this - what might you try? What if you had less time - what might that force you to try?

Imagine you had more energy and confidence - what could you try then?`,

                `Finally, let's create your WILL/WAY FORWARD: The purpose here is to convert our discussion into a decision. 

What are you going to do to advance your career? Not what are you thinking of doing, but what are you actually going to do?

When are you going to do it? Will this action meet your goal? What obstacles might you meet along the way? Who needs to know about your plans?`
            ]
        },

        personal: {
            keywords: ["personal", "life", "relationship", "family", "health", "habit", "confidence", "stress"],
            responses: [
                `I'm here to help you with personal development using the GROW framework. Let's start by distinguishing your END GOAL (what you ultimately want to achieve) from your PERFORMANCE GOALS (the specific levels that will help you get there).

What is the aim of our discussion today? What do you want to achieve long term in this area of your life?

What does success look like to you? It's important that you feel complete ownership of this goal.`,

                `Now, let's examine your REALITY: I need to understand your current situation clearly to help you move forward effectively.

What is happening right now in this area of your life? Focus only on the facts - what is really happening at the moment? (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)

Who is directly and indirectly involved? If things are not going well, what happens to you and others involved?`,

                `Let's brainstorm your OPTIONS: Remember, the purpose is to create as many alternatives as possible - quantity over quality right now. No judging options yet!

What options do you have for steps to resolve this personal challenge? What else might you do?

What would someone who handles this kind of issue really well do? What if you had more energy and confidence - what could you try then?

If somebody said "Money no object" - what might you try then? If you had total power, what might you try?`,

                `Time for your WILL/WAY FORWARD: We need to convert our discussion into a decision.

What are you going to do to address this personal challenge? Not what you're thinking of doing, but what you're actually going to do?

When are you going to do it? Will this action meet your goal? What support do you need? How and when are you going to get that support?`
            ]
        },

        skills: {
            keywords: ["learn", "skill", "training", "education", "course", "development", "improve", "practice"],
            responses: [
                `Excellent! Let's plan your skill development using the GROW model. First, let's distinguish between your END GOAL (the ultimate skill level you want) and PERFORMANCE GOALS (the benchmarks that will help you get there).

What is the aim of this skill development? What do you want to achieve long term?

What does mastery look like to you in this skill? Remember, you need to feel ownership of this learning goal.`,

                `Now your REALITY: Let's understand your current situation clearly before we plan your skill development.

What is happening right now with your skill development? Focus on the facts - what is really happening at the moment? (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)

What have you done about this so far? With what results? How often have you tried? What is missing in this situation?`,

                `Let's explore your OPTIONS: The goal is to create as many alternative approaches as possible for your skill development. Quantity is more important than quality at this stage - no judgment yet!

What options do you have for developing this skill? What else might you do?

What would someone who masters skills really well do? What if you had more time - what might you try? What if you had less time - what might that force you to try?

If the constraints you identified earlier were removed - what could you do then?`,

                `Your WILL/WAY FORWARD: Let's convert our discussion into a decision about your skill development.

What are you going to do to develop this skill? Not what you're considering, but what you're actually going to do?

When are you going to do it? Will this action meet your goal? What obstacles might you meet along the way? What support do you need and how will you get it?`
            ]
        },

        general: {
            keywords: ["help", "stuck", "confused", "direction", "decision", "choice", "problem"],
            responses: [
                `I'm here to help guide you through this challenge using the GROW coaching model. Let's start by clarifying your goals - both your END GOAL (what you ultimately want) and PERFORMANCE GOALS (the levels that will help you get there).

What is the aim of this discussion? What would you like to achieve or resolve long term?

What does success look like to you? It's crucial that you feel complete ownership of whatever goal we set.`,

                `Now let's understand your REALITY: Goals can't be established until we truly understand your current situation.

What is happening right now with this challenge? Focus only on the facts - what is really happening at the moment? (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)

Who is directly and indirectly involved? What have you done about this so far? With what results? What is holding you back from finding a way forward?`,

                `Let's explore your OPTIONS: Our purpose is not to find the right answer but to create and list as many alternative courses of action as possible. Quantity matters more than quality right now!

What options do you have for steps to resolve this challenge? What else might you do?

What would someone who handles this kind of issue really well do? What if you could start again? What if you had total power - what might you try then?

If somebody said "Money no object" - what might you try? What are you not considering that could be possible?`,

                `Finally, your WILL/WAY FORWARD: Time to convert our discussion into a decision.

What are you going to do to address this challenge? Not what you're thinking about or prefer, but what you're actually going to do?

When are you going to do it? Will this action meet your goal? What obstacles might you meet along the way? Who needs to know? What other considerations do you have?`
            ]
        }
    },

    // Enhanced follow-up questions for deeper coaching
    followUpQuestions: {
        goal: [
            "Is this an END GOAL (your final destination) or a PERFORMANCE GOAL (a milestone)?",
            "Can you make that goal more specific and measurable?",
            "What would success look like for you?",
            "By when would you like to achieve this?",
            "What would be different in your life once you reach this goal?",
            "How much personal control do you have over this goal?",
            "Is this goal positive, challenging and attainable?",
            "How will you measure your progress?",
            "What performance level would give you the best chance of success?",
            "Do you feel complete ownership of this goal?",
            "Who else needs to agree on this goal for it to be successful?"
        ],
        reality: [
            "What is happening right now? Focus only on facts (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)",
            "Who is directly and indirectly involved?",
            "If things are not going well with this issue, who else gets drawn in?",
            "If things are not going well, what happens to you?",
            "What about others involved, what happens to them?",
            "What have you done about this so far? With what results?",
            "How often have you tried?",
            "What is missing in this situation?",
            "What is holding you back from finding a way forward?",
            "What's working well currently?",
            "What resources do you currently have available?"
        ],
        options: [
            "What options do you have for steps to resolve this issue?",
            "What else might you do?",
            "What would someone who handles this kind of issue really well do?",
            "What if you had more time for this issue, what might you try?",
            "What if you had less time? What might that force you to try?",
            "Imagine that you had more energy and confidence, what could you try then?",
            "What if somebody said: 'Money no object'? What might you try then?",
            "If you had total power, what might you try then?",
            "What if you could start again?",
            "If the constraints you identified earlier were removed - what could you do then?",
            "What should you do?",
            "Would you like another suggestion?",
            "What are the costs and benefits of each of these ideas?",
            "What are you not considering that could be possible?"
        ],
        will: [
            "What are you going to do?",
            "When are you going to do it?",
            "Will this action meet your goal?",
            "What obstacles might you meet along the way?",
            "Who needs to know?",
            "What support do you need?",
            "How and when are you going to get that support?",
            "What other considerations do you have?",
            "On a scale of 1-10, how committed are you to this action?",
            "What might get in the way of taking this action?",
            "How will you remind yourself to do this?",
            "What will be your first milestone?"
        ]
    },

    // Motivational and supportive responses
    encouragement: [
        "That's a great insight! You're really thinking this through.",
        "I can hear your commitment in what you're saying.",
        "That sounds like a challenging but achievable goal.",
        "You've identified some really valuable options there.",
        "That's a concrete action step - well done!",
        "You're taking ownership of your situation, which is powerful.",
        "I like how you're distinguishing between your end goal and performance milestones.",
        "That shows great self-awareness about what you can control."
    ]
};

// Function to categorize user input and provide appropriate response
export function categorizeInput(userInput) {
    const input = userInput.toLowerCase();

    for (const [category, data] of Object.entries(growKnowledgeBase.scenarios)) {
        if (data.keywords.some(keyword => input.includes(keyword))) {
            return category;
        }
    }

    return 'general';
}

// Function to get a coaching response based on session state - Intelligent Interactive approach
export function getLocalCoachingResponse(userInput, sessionState = { step: 0, category: null, phase: 'goal', questionIndex: 0, askedQuestions: {} }) {
    const category = sessionState.category || categorizeInput(userInput);
    const phases = ['goal', 'reality', 'options', 'will'];
    const currentPhase = sessionState.phase || 'goal';
    
    // Initialize asked questions tracking if not present
    const askedQuestions = sessionState.askedQuestions || {
        goal: [],
        reality: [],
        options: [],
        will: []
    };
    
    // Analyze user input intelligently to determine next coaching move
    const inputAnalysis = analyzeUserInput(userInput, currentPhase, sessionState);
    
    // If user is providing input (not the first interaction), acknowledge it
    let response = "";
    if (sessionState.step > 0 && userInput.trim()) {
        response = getIntelligentAcknowledgment(userInput, inputAnalysis, currentPhase) + "\n\n";
    }

    // Get the next question based on intelligent analysis, avoiding repetition
    const nextQuestion = getIntelligentNextQuestion(inputAnalysis, currentPhase, category, userInput, askedQuestions);
    
    // Debug logging
    console.log(`🤖 Coaching Session Debug:`);
    console.log(`   Phase: ${currentPhase}`);
    console.log(`   Step: ${sessionState.step}`);
    console.log(`   Asked Questions in ${currentPhase}:`, askedQuestions[currentPhase]);
    console.log(`   Selected Question:`, nextQuestion.question);
    console.log(`   Should Transition:`, nextQuestion.shouldTransition);
    
    response += nextQuestion.question;
    
    // Track the question that was asked
    if (nextQuestion.askedQuestion) {
        askedQuestions[currentPhase].push(nextQuestion.askedQuestion);
    }

    // Determine next state based on intelligent analysis or forced transition
    let nextPhase = nextQuestion.forceNextPhase || inputAnalysis.suggestedNextPhase || currentPhase;
    let nextQuestionIndex = inputAnalysis.resetQuestionIndex ? 0 : (sessionState.questionIndex || 0) + 1;
    let nextStep = sessionState.step + 1;

    // Handle forced phase transitions (when all questions are exhausted)
    if (nextQuestion.forceNextPhase) {
        inputAnalysis.shouldTransition = true;
        nextQuestionIndex = 0; // Reset question index for new phase
        console.log(`🤖 Forced transition to ${nextQuestion.forceNextPhase} - all questions in ${currentPhase} exhausted`);
    }

    // Auto-transition if all questions in current phase have been asked and user is ready
    const phaseQuestions = growKnowledgeBase.followUpQuestions[currentPhase] || [];
    const questionsAskedInPhase = askedQuestions[currentPhase] || [];
    const allQuestionsAsked = questionsAskedInPhase.length >= Math.min(phaseQuestions.length, 3); // Max 3 questions per phase for smoother flow
    
    if (allQuestionsAsked && !inputAnalysis.shouldTransition && currentPhase !== 'will') {
        const phases = ['goal', 'reality', 'options', 'will'];
        const currentPhaseIndex = phases.indexOf(currentPhase);
        if (currentPhaseIndex < phases.length - 1) {
            nextPhase = phases[currentPhaseIndex + 1];
            inputAnalysis.shouldTransition = true;
            console.log(`🤖 Auto-transitioning from ${currentPhase} to ${nextPhase} - all questions explored`);
        }
    }

    // Handle phase transitions (both forced and natural)
    if (inputAnalysis.shouldTransition && nextPhase !== currentPhase) {
        // Don't add extra transition message if the question already contains transition info
        if (!nextQuestion.forceNextPhase) {
            response += `\n\n🎯 I can see you're ready to explore **${nextPhase.toUpperCase()}**. Let's dive deeper!`;
        }
    }

    // Add completion message if session is complete
    const isSessionComplete = (nextPhase === 'will' && inputAnalysis.hasActionCommitment) || nextQuestion.isCompletionPrompt;
    
    // Special handling for completion prompt responses
    if (sessionState.step > 0 && userInput.trim() && nextQuestion.isCompletionPrompt) {
        response += `\n\n🎉 **Outstanding!** You've completed your GROW coaching session!

**🎯 YOUR COMPLETE ACTION PLAN:**

**GOAL ACHIEVED:** 
${inputAnalysis.goalSummary || localCoachingSession.userAnalysis?.goalSummary || 'Personal development and growth'}

**REALITY UNDERSTOOD:** 
${inputAnalysis.realitySummary || localCoachingSession.userAnalysis?.realitySummary || 'Current situation assessed'}

**OPTIONS EXPLORED:** 
${inputAnalysis.optionsSummary || localCoachingSession.userAnalysis?.optionsSummary || 'Multiple possibilities considered'}

**WILL/ACTION PLAN:** 
${userInput}

**🚀 SUCCESS INDICATORS:**
- You have a clear goal
- You understand your starting point  
- You've considered multiple approaches
- You have specific next steps
- You've committed to action

**📅 RECOMMENDED FOLLOW-UP:**
- Schedule your first action within 24 hours
- Set a review date for 1 week from now
- Consider booking another coaching session in 30 days

**Remember:** The journey of a thousand miles begins with a single step. You've got this! 🌟

---
*Session Complete - Click "Reset Session" to start a new coaching conversation*`;
        
        return {
            response,
            nextStep: sessionState.step + 1,
            category,
            phase: 'complete',
            questionIndex: 0,
            isComplete: true,
            analysis: inputAnalysis,
            askedQuestions: askedQuestions
        };
    }
    
    // Regular completion message for natural action commitments
    if (isSessionComplete && !nextQuestion.isCompletionPrompt) {
        response += `\n\n🎉 **Excellent!** You've created a solid action plan!

**Your coaching journey summary:**
- ✅ **Goal**: ${inputAnalysis.goalSummary || 'You clarified what you want to achieve'}
- ✅ **Reality**: ${inputAnalysis.realitySummary || 'You explored your current situation'}
- ✅ **Options**: ${inputAnalysis.optionsSummary || 'You generated multiple possibilities'}
- ✅ **Will**: ${inputAnalysis.actionCommitment || 'You committed to specific actions'}

🚀 **Next Steps:** ${inputAnalysis.nextSteps || 'Take action on your commitments!'}

Feel free to start a new coaching session anytime by clicking "Reset Session".`;
    }

    return {
        response,
        nextStep,
        category,
        phase: nextPhase,
        questionIndex: nextQuestionIndex,
        isComplete: isSessionComplete,
        analysis: inputAnalysis,
        askedQuestions: askedQuestions // Pass back the updated asked questions
    };
}

// Function to acknowledge user input with appropriate encouragement
function getAcknowledgment(userInput, phase) {
    const acknowledgments = {
        goal: [
            "Great! I can see you have a clear vision of what you want to achieve.",
            "That's a wonderful goal to work towards.",
            "I appreciate you sharing that with me - it shows real clarity about your direction.",
            "That's an excellent goal - I can hear your commitment to it."
        ],
        reality: [
            "Thank you for being so honest about your current situation.",
            "That's very insightful - understanding where you are now is crucial.",
            "I appreciate your openness about the reality of your situation.",
            "That gives me a clear picture of what you're dealing with right now."
        ],
        options: [
            "That's a creative option - well done for thinking outside the box!",
            "Excellent! You're generating some really valuable possibilities.",
            "I like that approach - it shows you're thinking creatively about solutions.",
            "That's a solid option to consider."
        ],
        will: [
            "That sounds like a concrete action plan - I can hear your commitment!",
            "Excellent! You're moving from thinking to doing.",
            "That's a decisive step forward - well done!",
            "I can see you're ready to take action on this."
        ]
    };

    const phaseAcknowledgments = acknowledgments[phase] || acknowledgments.goal;
    return phaseAcknowledgments[Math.floor(Math.random() * phaseAcknowledgments.length)];
}

// Function to get the next appropriate question
function getNextQuestion(phase, questionIndex, category) {
    const questions = growKnowledgeBase.followUpQuestions[phase];
    
    if (!questions || questionIndex >= questions.length) {
        return { question: "What else would you like to explore about this?", shouldTransition: true };
    }

    // Add some context based on the phase
    const phaseIntros = {
        goal: questionIndex === 0 ? "🎯 Let's start by clarifying your GOAL:\n\n" : "",
        reality: questionIndex === 0 ? "🔍 Now let's explore your current REALITY:\n\n" : "",
        options: questionIndex === 0 ? "💡 Time to brainstorm your OPTIONS:\n\n" : "",
        will: questionIndex === 0 ? "🎯 Finally, let's create your WILL/WAY FORWARD:\n\n" : ""
    };

    const intro = phaseIntros[phase] || "";
    const question = questions[questionIndex];
    
    return { 
        question: intro + question,
        shouldTransition: false
    };
}

// Function to determine if we should transition to the next phase
function checkPhaseTransition(phase, questionIndex, userInput) {
    // Simple logic: move to next phase after 2-3 questions or if user gives comprehensive answer
    const maxQuestionsPerPhase = {
        goal: 3,
        reality: 3,
        options: 4,
        will: 3
    };

    const userInputLength = userInput.trim().length;
    const hasComprehensiveAnswer = userInputLength > 100; // If user gives detailed response
    
    return questionIndex >= maxQuestionsPerPhase[phase] || hasComprehensiveAnswer;
}

// Function to provide GROW model education
export function getGrowModelInfo() {
    return `
🎯 **The GROW Coaching Model**

**G - GOAL**: What do you want to achieve?

🎯 **Goal Setting Framework:**
• **End Goals**: The final objective - your ultimate destination
• **Performance Goals**: The level that will give you the best chance of achieving the end goal
• **Ownership**: You must feel ownership for the goal - choice and responsibility drive self-motivation
• **Agreement**: Goals must be agreed on between all parties involved

**Sample Goal Questions:**
• What is the aim of this discussion?
• What do you want to achieve long term? (END GOAL)
• What does success look like?
• How much personal control or influence do you have over your goal?
• What would be a milestone on the way? (PERFORMANCE GOAL)
• By when do you want to achieve it?
• Is that positive, challenging and attainable?
• How will you measure it?

**R - REALITY**: What is your current situation?

🔍 **Reality Framework:**
• **Foundation**: Goals can't be established until the current situation is known and understood
• **Detachment**: Be aware of potential misperceptions - the coach must detach from the goal
• **Following**: Follow the coachee's train of thought rather than asserting your own
• **Trust**: This approach gains confidence and builds trust

**Sample Reality Questions:**
• What is happening right now? Focus only on facts (WHAT, WHEN, WHERE, HOW MUCH, HOW OFTEN)
• Who is directly and indirectly involved?
• If things are not going well, who else gets drawn in?
• If things are not going well, what happens to you? What about others?
• What have you done about this so far? With what results?
• How often have you tried?
• What is missing in this situation?
• What is holding you back from finding a way forward?

**O - OPTIONS**: What could you do?

💡 **Options Framework:**
• **Purpose**: Not to find the right answer but to create and list as many alternative courses of action as possible
• **Quantity over Quality**: Quantity is more important than quality at this point
• **No Judgment**: Avoid preferences, censorship, ridicule, obstacles, or need for completeness during collection
• **Coachee First**: Coach draws options from the coachee first
• **Coach Input**: Only after coachee has exhausted possibilities: "I have another couple of options"
• **Review Generates More**: Reviewing options can lead to additional options

**Sample Options Questions:**
• What options do you have for steps to resolve this issue?
• What else might you do?
• What would someone who handles this really well do?
• What if you had more time? What if you had less time?
• Imagine you had more energy and confidence - what could you try?
• What if somebody said "Money no object"?
• If you had total power, what might you try?
• What if you could start again?
• If constraints were removed - what could you do?
• What are the costs and benefits of each idea?

**W - WILL/WAY FORWARD**: What will you do?

🎯 **Will/Way Forward Framework:**
• **Purpose**: Convert a discussion into a decision
• **Decisive Language**: "What are you going to do?" Not "What are you thinking of doing?" or "Which do you prefer?"
• **Commitment Focus**: Focus on concrete commitment to action rather than preferences or possibilities

**Sample Will/Way Forward Questions:**
• What are you going to do?
• When are you going to do it?
• Will this action meet your goal?
• What obstacles might you meet along the way?
• Who needs to know?
• What support do you need?
• How and when are you going to get that support?
• What other considerations do you have?

**Key Principles:**
✓ Distinguish between end goals and performance goals
✓ Ensure goal ownership and personal responsibility
✓ Focus on what you can control and influence
✓ Make goals specific, measurable, and time-bound
✓ Build in accountability and progress measurement

This model helps you move from where you are now to where you want to be!
  `;
}

// Function to get the initial coaching question 🎯 
export function getInitialCoachingQuestion() {
    return {
        response: `**Welcome to your GROW Coaching Session!**

I'm here to guide you through a structured coaching conversation using the GROW model:
- **Goal**: What you want to achieve
- **Reality**: Your current situation  
- **Options**: What you could do
- **Will**: What you will do

Let's start with your GOAL:

What would you like to focus on in our coaching session today? 

Here are some examples to get you thinking:
• Career development or job change
• Learning a new skill
• Improving relationships
• Health and fitness goals
• Personal confidence
• Work-life balance
• Starting a project

What do you want to achieve or work on?`,
        nextStep: 0,
        category: 'general',
        phase: 'goal',
        questionIndex: 0,
        isComplete: false
    };
}

// Function to get phase indicator and progress
export function getPhaseIndicator(currentPhase, isComplete) {
    const phases = [
        { key: 'goal', label: 'Goal', emoji: '🎯' },
        { key: 'reality', label: 'Reality', emoji: '🔍' },
        { key: 'options', label: 'Options', emoji: '💡' },
        { key: 'will', label: 'Will/Way Forward', emoji: '🚀' },
        { key: 'complete', label: 'Complete', emoji: '�' }
    ];

    const currentIndex = phases.findIndex(p => p.key === currentPhase);
    
    let indicator = '\n\n📊 **GROW Progress:**\n';
    
    phases.forEach((phase, index) => {
        let status = '';
        if (currentPhase === 'complete') {
            status = '✅'; // All completed when session is complete
        } else if (index < currentIndex) {
            status = '✅'; // Completed
        } else if (index === currentIndex) {
            status = isComplete ? '✅' : '🔄'; // Current or just completed
        } else {
            status = '⏳'; // Upcoming
        }
        
        // Don't show "Complete" phase unless we're actually complete
        if (phase.key === 'complete' && currentPhase !== 'complete') {
            return;
        }
        
        indicator += `${status} ${phase.emoji} ${phase.label}${index === currentIndex && currentPhase !== 'complete' ? ' (Current)' : ''}\n`;
    });
    
    return indicator;
}

// Intelligent analysis of user input to determine coaching direction
function analyzeUserInput(userInput, currentPhase, sessionState) {
    const input = userInput.toLowerCase();
    const analysis = {
        currentPhase,
        suggestedNextPhase: currentPhase,
        shouldTransition: false,
        resetQuestionIndex: false,
        confidenceLevel: 'medium',
        emotionalTone: 'neutral',
        goalSummary: null,
        realitySummary: null,
        optionsSummary: null,
        actionCommitment: null,
        hasActionCommitment: false,
        nextSteps: null
    };

    // Analyze emotional tone
    const positiveWords = ['excited', 'confident', 'ready', 'motivated', 'great', 'excellent', 'amazing', 'love', 'passionate'];
    const negativeWords = ['stuck', 'frustrated', 'confused', 'worried', 'scared', 'difficult', 'hard', 'impossible', 'can\'t'];
    const uncertainWords = ['maybe', 'perhaps', 'not sure', 'don\'t know', 'unclear', 'unsure', 'might', 'possibly'];

    if (positiveWords.some(word => input.includes(word))) {
        analysis.emotionalTone = 'positive';
        analysis.confidenceLevel = 'high';
    } else if (negativeWords.some(word => input.includes(word))) {
        analysis.emotionalTone = 'challenging';
        analysis.confidenceLevel = 'low';
    } else if (uncertainWords.some(word => input.includes(word))) {
        analysis.emotionalTone = 'uncertain';
        analysis.confidenceLevel = 'low';
    }

    // Phase-specific analysis
    switch (currentPhase) {
        case 'goal':
            analyzeGoalInput(input, analysis, userInput);
            break;
        case 'reality':
            analyzeRealityInput(input, analysis, userInput);
            break;
        case 'options':
            analyzeOptionsInput(input, analysis, userInput);
            break;
        case 'will':
            analyzeWillInput(input, analysis, userInput);
            break;
    }

    return analysis;
}

// Analyze goal-phase input
function analyzeGoalInput(input, analysis, originalInput) {
    const goalIndicators = ['want to', 'goal is', 'achieve', 'accomplish', 'reach', 'attain', 'succeed', 'become', 'get to', 'aim to'];
    const timeIndicators = ['by', 'within', 'in 6 months', 'next year', 'soon', 'quickly', 'eventually'];
    const specificityIndicators = ['exactly', 'specifically', 'precisely', '100%', 'clearly', 'detailed'];

    if (goalIndicators.some(indicator => input.includes(indicator))) {
        analysis.confidenceLevel = 'high';
        analysis.goalSummary = extractGoalSummary(originalInput);
        
        // Check if goal is specific and has timeline
        const hasTimeline = timeIndicators.some(indicator => input.includes(indicator));
        const isSpecific = specificityIndicators.some(indicator => input.includes(indicator)) || 
                          input.length > 50; // Longer responses tend to be more specific

        if (hasTimeline && isSpecific) {
            analysis.shouldTransition = true;
            analysis.suggestedNextPhase = 'reality';
            analysis.resetQuestionIndex = true;
        }
    }
}

// Analyze reality-phase input
function analyzeRealityInput(input, analysis, originalInput) {
    const factualIndicators = ['currently', 'right now', 'at the moment', 'today', 'this week', 'recently'];
    const challengeIndicators = ['problem', 'issue', 'challenge', 'obstacle', 'difficulty', 'barrier'];
    const resourceIndicators = ['have', 'available', 'resources', 'support', 'help', 'tools', 'skills'];

    analysis.realitySummary = extractRealitySummary(originalInput);

    if (factualIndicators.some(indicator => input.includes(indicator))) {
        analysis.confidenceLevel = 'high';
    }

    // If user has described both challenges and resources, move to options
    const hasChallenges = challengeIndicators.some(indicator => input.includes(indicator));
    const hasResources = resourceIndicators.some(indicator => input.includes(indicator));
    
    if ((hasChallenges || hasResources) && input.length > 80) {
        analysis.shouldTransition = true;
        analysis.suggestedNextPhase = 'options';
        analysis.resetQuestionIndex = true;
    }
}

// Analyze options-phase input
function analyzeOptionsInput(input, analysis, originalInput) {
    const optionIndicators = ['could', 'might', 'option', 'possibility', 'alternative', 'maybe', 'perhaps', 'try'];
    const multipleOptions = input.split(/,|;|\band\b|\bor\b/).length > 2; // Check for multiple ideas

    analysis.optionsSummary = extractOptionsSummary(originalInput);

    if (optionIndicators.some(indicator => input.includes(indicator)) || multipleOptions) {
        analysis.confidenceLevel = 'high';
    }

    // If user has generated multiple options or shows decision readiness, move to will
    const decisionIndicators = ['will', 'going to', 'plan to', 'decided', 'choose', 'pick', 'select'];
    const hasDecision = decisionIndicators.some(indicator => input.includes(indicator));
    
    if (multipleOptions || hasDecision || input.length > 100) {
        analysis.shouldTransition = true;
        analysis.suggestedNextPhase = 'will';
        analysis.resetQuestionIndex = true;
    }
}

// Analyze will-phase input
function analyzeWillInput(input, analysis, originalInput) {
    const commitmentIndicators = ['will', 'going to', 'plan to', 'commit to', 'promise', 'definitely', 'absolutely'];
    const timeCommitments = ['tomorrow', 'next week', 'monday', 'by friday', 'this weekend', 'today'];
    const actionWords = ['start', 'begin', 'do', 'make', 'create', 'build', 'write', 'call', 'meet'];

    const hasCommitment = commitmentIndicators.some(indicator => input.includes(indicator));
    const hasTimeline = timeCommitments.some(indicator => input.includes(indicator));
    const hasAction = actionWords.some(indicator => input.includes(indicator));

    if (hasCommitment && (hasTimeline || hasAction)) {
        analysis.hasActionCommitment = true;
        analysis.actionCommitment = extractActionCommitment(originalInput);
        analysis.nextSteps = generateNextSteps(originalInput);
        analysis.confidenceLevel = 'high';
    }
}

// Extract summaries from user input
function extractGoalSummary(input) {
    // Simple extraction - could be made more sophisticated
    const sentences = input.split(/[.!?]+/);
    return sentences[0]?.trim() || input.substring(0, 100) + '...';
}

function extractRealitySummary(input) {
    return input.length > 100 ? input.substring(0, 100) + '...' : input;
}

function extractOptionsSummary(input) {
    const options = input.split(/,|;|\band\b|\bor\b/);
    return options.length > 1 ? `${options.length} different approaches identified` : 'Creative options explored';
}

function extractActionCommitment(input) {
    // Look for commitment statements
    const commitmentPatterns = [
        /will (.*?)(?:[.!?]|$)/i,
        /going to (.*?)(?:[.!?]|$)/i,
        /plan to (.*?)(?:[.!?]|$)/i
    ];
    
    for (const pattern of commitmentPatterns) {
        const match = input.match(pattern);
        if (match) {
            return match[1].trim();
        }
    }
    
    return input.substring(0, 80) + '...';
}

function generateNextSteps(input) {
    // Generate contextual next steps based on input
    if (input.toLowerCase().includes('learn')) {
        return 'Create a learning schedule and find resources';
    } else if (input.toLowerCase().includes('job') || input.toLowerCase().includes('career')) {
        return 'Update resume and start networking';
    } else if (input.toLowerCase().includes('health') || input.toLowerCase().includes('fitness')) {
        return 'Set up a routine and track progress';
    }
    return 'Take the first small step today!';
}

// Intelligent acknowledgment based on analysis
function getIntelligentAcknowledgment(userInput, analysis, phase) {
    const toneResponses = {
        positive: [
            "I love your enthusiasm! That energy will serve you well.",
            "Your positive attitude really comes through - that's powerful!",
            "I can hear the excitement in your words. That's fantastic!",
            "What great energy! You sound ready to take this on."
        ],
        challenging: [
            "I appreciate your honesty about the challenges you're facing.",
            "It takes courage to acknowledge these difficulties. That's a strength.",
            "Thank you for being so open about what's not working.",
            "I hear that this is tough for you right now. Let's work through it together."
        ],
        uncertain: [
            "It's completely normal to feel uncertain at this stage.",
            "Not knowing everything is actually a good starting point.",
            "Your thoughtfulness about this shows you're taking it seriously.",
            "Let's explore this together and bring some clarity."
        ],
        neutral: [
            "Thank you for sharing that with me.",
            "I can see you've given this some thought.",
            "That's helpful information for our coaching session.",
            "I appreciate you taking the time to explain that."
        ]
    };

    const confidenceResponses = {
        high: [
            "You sound very clear about this.",
            "I can hear the conviction in your response.",
            "You've really thought this through well.",
            "That's a strong, clear answer."
        ],
        medium: [
            "That's a good foundation to build on.",
            "I can see you're working through this thoughtfully.",
            "You're on the right track with that thinking.",
            "That gives us something concrete to work with."
        ],
        low: [
            "Let's explore this further together.",
            "We can work through this step by step.",
            "Sometimes starting with what we do know helps.",
            "That's a good beginning - let's dig deeper."
        ]
    };

    // Combine tone and confidence responses
    const toneOptions = toneResponses[analysis.emotionalTone] || toneResponses.neutral;
    const confidenceOptions = confidenceResponses[analysis.confidenceLevel] || confidenceResponses.medium;
    
    const selectedTone = toneOptions[Math.floor(Math.random() * toneOptions.length)];
    const selectedConfidence = confidenceOptions[Math.floor(Math.random() * confidenceOptions.length)];
    
    // Sometimes combine both, sometimes use just one
    return Math.random() > 0.5 ? selectedTone : `${selectedTone} ${selectedConfidence}`;
}

// Intelligent next question selection
function getIntelligentNextQuestion(analysis, currentPhase, category, userInput, askedQuestions = {}) {
    const questions = growKnowledgeBase.followUpQuestions[currentPhase];
    
    if (!questions) {
        return { question: "What else would you like to explore about this?", shouldTransition: true };
    }

    // Get questions that haven't been asked yet in this phase
    const phaseAskedQuestions = askedQuestions[currentPhase] || [];
    
    // Select questions based on analysis
    let selectedQuestions = [];
    
    switch (currentPhase) {
        case 'goal':
            selectedQuestions = selectGoalQuestions(analysis, questions, userInput);
            break;
        case 'reality':
            selectedQuestions = selectRealityQuestions(analysis, questions, userInput);
            break;
        case 'options':
            selectedQuestions = selectOptionsQuestions(analysis, questions, userInput);
            break;
        case 'will':
            selectedQuestions = selectWillQuestions(analysis, questions, userInput);
            break;
    }

    if (selectedQuestions.length === 0) {
        selectedQuestions = questions; // Fallback to all questions
    }

    // Filter out questions that have already been asked
    const availableQuestions = selectedQuestions.filter(q => !phaseAskedQuestions.includes(q));
    
    // If all questions have been asked, force transition to next phase
    if (availableQuestions.length === 0) {
        const phases = ['goal', 'reality', 'options', 'will'];
        const currentPhaseIndex = phases.indexOf(currentPhase);
        
        // If we're not in the last phase, force transition
        if (currentPhaseIndex < phases.length - 1) {
            const nextPhase = phases[currentPhaseIndex + 1];
            console.log(`🤖 Force transitioning from ${currentPhase} to ${nextPhase} - all questions exhausted`);
            
            return {
                question: `Great insights! I can see you've thoroughly explored your ${currentPhase.toUpperCase()}. Let's move to the next area - **${nextPhase.toUpperCase()}**. ${getPhaseTransitionMessage(nextPhase)}`,
                shouldTransition: true,
                askedQuestion: null, // Don't track transition messages
                forceNextPhase: nextPhase
            };
        } else {
            // We're in the final phase (will) - wrap up the session with comprehensive action planning
            return {
                question: `🎉 **Congratulations!** You've done excellent work exploring all areas of the GROW model!

**Let's create your final action plan:**

🎯 **Your Goal**: You want to achieve something meaningful
🔍 **Your Reality**: You've assessed your current situation  
💡 **Your Options**: You've explored multiple possibilities
🚀 **Your Will**: Now let's commit to action!

**Final Action Planning Questions:**
1. **What's your most important next step?** (The one thing you'll do first)
2. **When exactly will you take this step?** (Be specific with date/time)
3. **What support or resources do you need?**
4. **How will you track your progress?**
5. **What will success look like in 30 days?**

Please answer these questions to complete your coaching session and create a solid action plan!`,
                shouldTransition: false,
                askedQuestion: null,
                isCompletionPrompt: true
            };
        }
    }

    const selectedQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    
    return {
        question: selectedQuestion,
        shouldTransition: analysis.shouldTransition,
        askedQuestion: selectedQuestion // Track this question as asked
    };
}

// Helper function to generate phase transition messages
function getPhaseTransitionMessage(nextPhase) {
    const messages = {
        goal: "What do you want to achieve?",
        reality: "What's your current situation? Let's explore the facts.",
        options: "What are all the possible ways you could approach this? Let's brainstorm!",
        will: "What specific actions will you take? Let's create your action plan!"
    };
    
    return messages[nextPhase] || "Let's explore this area.";
}

// Phase-specific question selection
function selectGoalQuestions(analysis, questions, userInput) {
    const input = userInput.toLowerCase();
    
    if (analysis.confidenceLevel === 'low') {
        return questions.filter(q => 
            q.includes('What would success look like') || 
            q.includes('What would be different')
        );
    } else if (!input.includes('when') && !input.includes('by')) {
        return questions.filter(q => 
            q.includes('By when') || 
            q.includes('timeline')
        );
    } else if (input.length < 30) {
        return questions.filter(q => 
            q.includes('more specific') || 
            q.includes('How will you measure')
        );
    }
    
    return questions;
}

function selectRealityQuestions(analysis, questions, userInput) {
    const input = userInput.toLowerCase();
    
    if (!input.includes('tried') && !input.includes('done')) {
        return questions.filter(q => 
            q.includes('What have you done about this so far') || 
            q.includes('How often have you tried')
        );
    } else if (!input.includes('others') && !input.includes('people')) {
        return questions.filter(q => 
            q.includes('Who is directly and indirectly involved') || 
            q.includes('who else gets drawn in')
        );
    } else if (analysis.emotionalTone === 'challenging') {
        return questions.filter(q => 
            q.includes('What is holding you back') || 
            q.includes('What is missing')
        );
    }
    
    return questions;
}

function selectOptionsQuestions(analysis, questions, userInput) {
    const input = userInput.toLowerCase();
    
    if (input.includes('no') || input.includes('can\'t') || input.includes('impossible')) {
        return questions.filter(q => 
            q.includes('What if') || 
            q.includes('constraints were removed') ||
            q.includes('total power')
        );
    } else if (analysis.confidenceLevel === 'high') {
        return questions.filter(q => 
            q.includes('costs and benefits') || 
            q.includes('What else might you do')
        );
    } else if (userInput.length < 50) {
        return questions.filter(q => 
            q.includes('What would someone who handles this') || 
            q.includes('What are you not considering')
        );
    }
    
    return questions;
}

function selectWillQuestions(analysis, questions, userInput) {
    const input = userInput.toLowerCase();
    
    if (!input.includes('when') && !input.includes('by') && !input.includes('tomorrow')) {
        return questions.filter(q => 
            q.includes('When are you going to do it') || 
            q.includes('What will be your first milestone')
        );
    } else if (!input.includes('support') && !input.includes('help')) {
        return questions.filter(q => 
            q.includes('What support do you need') || 
            q.includes('Who needs to know')
        );
    } else if (analysis.confidenceLevel === 'medium') {
        return questions.filter(q => 
            q.includes('scale of 1-10') || 
            q.includes('What might get in the way')
        );
    }
    
    return questions;
}
