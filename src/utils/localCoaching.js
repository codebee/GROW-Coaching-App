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

// Function to get a coaching response based on session state
export function getLocalCoachingResponse(userInput, sessionState = { step: 0, category: null }) {
    const category = sessionState.category || categorizeInput(userInput);
    const scenario = growKnowledgeBase.scenarios[category];
    const currentStep = Math.min(sessionState.step, scenario.responses.length - 1);

    let response = scenario.responses[currentStep];

    // Add some variety with follow-up questions
    const stepNames = ['goal', 'reality', 'options', 'will'];
    const currentStepName = stepNames[currentStep];
    const followUps = growKnowledgeBase.followUpQuestions[currentStepName];

    if (followUps && Math.random() > 0.5) {
        const randomFollowUp = followUps[Math.floor(Math.random() * followUps.length)];
        response += `\n\n${randomFollowUp}`;
    }

    // Add encouragement occasionally
    if (Math.random() > 0.7) {
        const encouragement = growKnowledgeBase.encouragement[
            Math.floor(Math.random() * growKnowledgeBase.encouragement.length)
        ];
        response = `${encouragement}\n\n${response}`;
    }

    return {
        response,
        nextStep: Math.min(currentStep + 1, scenario.responses.length - 1),
        category
    };
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
