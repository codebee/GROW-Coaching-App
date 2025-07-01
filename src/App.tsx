import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Settings, Square } from 'lucide-react';
import { AICoachingService, CoachingContext } from './services/AICoachingService';
import APIConfig from './components/APIConfig';
import './App.css';

interface ConversationMessage {
  role: 'user' | 'coach';
  content: string;
  phase: string;
  timestamp: Date;
}

const GROW_PHASES = [
  { id: 'goal', name: 'Goal', description: 'What do you want to achieve?' },
  { id: 'reality', name: 'Reality', description: 'What is the current situation?' },
  { id: 'options', name: 'Options', description: 'What could you do?' },
  { id: 'way_forward', name: 'Way Forward', description: 'What will you do?' }
] as const;

function App() {
  // Core state
  const [currentPhase, setCurrentPhase] = useState<'goal' | 'reality' | 'options' | 'way_forward'>('goal');
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Voice recognition state
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speechSupported, setSpeechSupported] = useState(false);
  
  // Text-to-speech state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  
  // AI service state
  const [aiService, setAiService] = useState<AICoachingService | null>(null);
  const [showApiConfig, setShowApiConfig] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  // Refs
  const recognitionRef = useRef<any>(null);
  const speechTimeoutRef = useRef<number | null>(null);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setSpeechSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          setTranscript(prev => prev + finalTranscript);
          
          // Clear existing timeout
          if (speechTimeoutRef.current) {
            clearTimeout(speechTimeoutRef.current);
          }
          
          // Set a new timeout to auto-submit after 2 seconds of silence
          speechTimeoutRef.current = setTimeout(() => {
            if (finalTranscript.trim()) {
              handleAutoSubmit(prev => prev + finalTranscript);
            }
          }, 2000);
        } else {
          setTranscript(prev => prev + interimTranscript);
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current = recognition;
    }
    
    // Load saved API key
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      const service = new AICoachingService(savedApiKey);
      setAiService(service);
    }
    
    return () => {
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }
    };
  }, []);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  // Auto-submit function
  const handleAutoSubmit = (getTranscript: (prev: string) => string) => {
    const currentTranscript = typeof getTranscript === 'function' ? getTranscript('') : transcript;
    if (currentTranscript.trim() && !isProcessing) {
      handleSubmit(currentTranscript.trim());
      setTranscript('');
      stopListening();
    }
  };

  const startListening = () => {
    if (recognitionRef.current && speechSupported) {
      setTranscript('');
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
    }
  };

  const speak = (text: string) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const buildCoachingContext = (): CoachingContext => {
    const conversationHistory = conversation.map(msg => ({
      role: msg.role,
      content: msg.content,
      phase: msg.phase
    }));

    const goalMessages = conversation.filter(msg => msg.phase === 'goal' && msg.role === 'user');
    const realityMessages = conversation.filter(msg => msg.phase === 'reality' && msg.role === 'user');
    const optionsMessages = conversation.filter(msg => msg.phase === 'options' && msg.role === 'user');

    return {
      phase: currentPhase,
      conversationHistory,
      userGoal: goalMessages.length > 0 ? goalMessages[0].content : undefined,
      currentReality: realityMessages.length > 0 ? realityMessages[0].content : undefined,
      identifiedOptions: optionsMessages.map(msg => msg.content)
    };
  };

  const generateFallbackResponse = (_input: string, phase: string): string => {
    const responses = {
      goal: [
        "That's an interesting goal! What makes this particularly important to you right now?",
        "I can hear the motivation in your goal. How will you know when you've achieved it?",
        "That sounds meaningful. What would success look like for you?"
      ],
      reality: [
        "Thanks for sharing that context. What aspects of your current situation are working well?",
        "I appreciate you being honest about where things stand. What resources do you already have available?",
        "That gives me a good picture. What have you tried before in similar situations?"
      ],
      options: [
        "Those are some interesting possibilities. What other approaches might you consider?",
        "I can see you're thinking creatively. What would you do if you had unlimited resources?",
        "Good thinking! What support or help might be available to you?"
      ],
      way_forward: [
        "That sounds like a solid plan. What would be your very first step?",
        "I can see you're ready to take action. When will you start on this?",
        "Great commitment! What might potentially get in your way, and how will you handle it?"
      ]
    };

    const phaseResponses = responses[phase as keyof typeof responses] || responses.goal;
    return phaseResponses[Math.floor(Math.random() * phaseResponses.length)];
  };

  const handleSubmit = async (inputText?: string) => {
    const messageText = inputText || transcript.trim();
    if (!messageText || isProcessing) return;

    setIsProcessing(true);
    
    // Add user message
    const userMessage: ConversationMessage = {
      role: 'user',
      content: messageText,
      phase: currentPhase,
      timestamp: new Date()
    };
    
    setConversation(prev => [...prev, userMessage]);
    setTranscript('');

    try {
      let coachResponse: string;
      
      if (aiService?.isConfigured()) {
        const context = buildCoachingContext();
        const result = await aiService.generateCoachResponse(messageText, context);
        
        if (result.error) {
          coachResponse = generateFallbackResponse(messageText, currentPhase);
        } else {
          coachResponse = result.response;
        }
      } else {
        coachResponse = generateFallbackResponse(messageText, currentPhase);
      }

      // Add coach response
      const coachMessage: ConversationMessage = {
        role: 'coach',
        content: coachResponse,
        phase: currentPhase,
        timestamp: new Date()
      };
      
      setConversation(prev => [...prev, coachMessage]);
      
      // Speak the response
      if (speechEnabled) {
        speak(coachResponse);
      }
      
    } catch (error) {
      console.error('Error generating response:', error);
      const fallbackResponse = "I'm having trouble processing that right now. Could you tell me more about what you're thinking?";
      
      const coachMessage: ConversationMessage = {
        role: 'coach',
        content: fallbackResponse,
        phase: currentPhase,
        timestamp: new Date()
      };
      
      setConversation(prev => [...prev, coachMessage]);
      
      if (speechEnabled) {
        speak(fallbackResponse);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePhaseChange = (newPhase: 'goal' | 'reality' | 'options' | 'way_forward') => {
    setCurrentPhase(newPhase);
    
    const phaseGreetings = {
      goal: "Great! Let's start by exploring your goal. What would you like to achieve?",
      reality: "Now let's look at your current reality. What's the situation you're facing right now?",
      options: "Time to explore your options. What different approaches could you consider?",
      way_forward: "Let's create your action plan. What specific steps will you take?"
    };
    
    const message = phaseGreetings[newPhase];
    const coachMessage: ConversationMessage = {
      role: 'coach',
      content: message,
      phase: newPhase,
      timestamp: new Date()
    };
    
    setConversation(prev => [...prev, coachMessage]);
    
    if (speechEnabled) {
      speak(message);
    }
  };

  const handleApiKeySet = (newApiKey: string) => {
    setApiKey(newApiKey);
    if (newApiKey) {
      const service = new AICoachingService(newApiKey);
      setAiService(service);
    } else {
      setAiService(null);
    }
  };

  const resetSession = () => {
    setConversation([]);
    setCurrentPhase('goal');
    setTranscript('');
    stopListening();
    stopSpeaking();
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Coaching Assistant</h1>
        <div className="header-controls">
          <div className="ai-status">
            <div className={`ai-indicator ${aiService?.isConfigured() ? 'connected' : 'disconnected'}`}>
              AI {aiService?.isConfigured() ? 'Connected' : 'Offline'}
            </div>
          </div>
          <button
            className="config-button"
            onClick={() => setShowApiConfig(true)}
            title="Configure AI Settings"
          >
            <Settings size={20} />
          </button>
        </div>
      </header>

      <div className="grow-phases">
        {GROW_PHASES.map((phase) => (
          <button
            key={phase.id}
            className={`phase-button ${currentPhase === phase.id ? 'active' : ''}`}
            onClick={() => handlePhaseChange(phase.id as any)}
          >
            <div className="phase-name">{phase.name}</div>
            <div className="phase-description">{phase.description}</div>
          </button>
        ))}
      </div>

      <div className="conversation-container">
        <div className="conversation">
          {conversation.length === 0 && (
            <div className="welcome-message">
              <h2>Welcome to your coaching session!</h2>
              <p>I'm here to guide you through the GROW model. Let's start by exploring your goal.</p>
              <p><strong>What would you like to achieve?</strong></p>
            </div>
          )}
          
          {conversation.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">
                {message.content}
              </div>
              <div className="message-meta">
                {message.phase} • {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
          
          {isProcessing && (
            <div className="message coach">
              <div className="message-content processing">
                <div className="thinking-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                Processing your response...
              </div>
            </div>
          )}
          
          <div ref={conversationEndRef} />
        </div>
      </div>

      <div className="input-section">
        <div className="voice-controls">
          {speechSupported ? (
            <button
              className={`voice-button ${isListening ? 'listening' : ''}`}
              onClick={isListening ? stopListening : startListening}
              disabled={isProcessing}
            >
              {isListening ? <MicOff size={24} /> : <Mic size={24} />}
              {isListening ? 'Stop Listening' : 'Start Voice Input'}
            </button>
          ) : (
            <div className="voice-unsupported">
              Voice input not supported in this browser
            </div>
          )}
          
          <button
            className={`speech-toggle ${speechEnabled ? 'enabled' : 'disabled'}`}
            onClick={() => setSpeechEnabled(!speechEnabled)}
            title={speechEnabled ? 'Disable text-to-speech' : 'Enable text-to-speech'}
          >
            {speechEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          
          {isSpeaking && (
            <button
              className="stop-speech-button"
              onClick={stopSpeaking}
              title="Stop speaking"
            >
              <Square size={16} />
            </button>
          )}
        </div>

        {transcript && (
          <div className="transcript-preview">
            <strong>Voice Input:</strong> {transcript}
            {isListening && <span className="listening-indicator">...</span>}
          </div>
        )}

        <div className="manual-input">
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Type your response or use voice input above..."
            disabled={isListening || isProcessing}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button
            onClick={() => handleSubmit()}
            disabled={!transcript.trim() || isProcessing || isListening}
            className="submit-button"
          >
            Submit
          </button>
        </div>

        <div className="session-controls">
          <button onClick={resetSession} className="reset-button">
            New Session
          </button>
        </div>
      </div>

      {showApiConfig && (
        <APIConfig
          onApiKeySet={handleApiKeySet}
          onClose={() => setShowApiConfig(false)}
          currentApiKey={apiKey}
        />
      )}
    </div>
  );
}

export default App;
