
import { useState, useEffect } from 'react';
import VoiceInput from './components/VoiceInput';
import CoachResponse from './components/CoachResponse';
import { getGrowResponse, resetLocalSession, getGrowInfo, getInitialQuestion } from './utils/growModel';

function App() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [showGrowInfo, setShowGrowInfo] = useState(false);

  // Load initial coaching question when app starts
  useEffect(() => {
    const initialQuestion = getInitialQuestion();
    setResponse(initialQuestion.response); // Extract just the response string
  }, []);

  const handleTranscript = async (text) => {
    setUserInput(text);
    setIsLoading(true);
    setError("");
    setRetryCount(0);

    try {
      const coachReply = await getGrowResponse(text, true, isOfflineMode); // Pass offline mode flag
      setResponse(coachReply);
      setRetryCount(0);

      // Check if response is from automatic fallback (not manual offline mode)
      if (coachReply.includes('[Offline Mode]') && !isOfflineMode) {
        setIsOfflineMode(true);
      }

      // Log if we're using Groq API (without showing it to user)
      if (!coachReply.includes('[Offline Mode]') && !isOfflineMode) {
        console.log('Response from Groq API - ultra fast coaching!');
      }
    } catch (err) {
      console.error('Error getting coach response:', err);

      if (err.message.includes('Rate limit exceeded')) {
        setError("🕐 Rate limit exceeded. The app will automatically retry in a moment. Please wait...");
        setRetryCount(prev => prev + 1);
      } else if (err.message.includes('insufficient_quota')) {
        setError("💳 OpenAI quota exceeded. Switching to Groq API for better performance and no quota limits!");
        // Force switch to offline mode temporarily, then reset to use Groq
        setTimeout(() => {
          setError("");
          window.location.reload(); // Refresh to use Groq API
        }, 3000);
      } else if (err.message.includes('No API keys')) {
        setError("🔑 No API keys configured. Please check your .env file. Using offline mode for now.");
        setIsOfflineMode(true);
      } else {
        setError(err.message || "Sorry, I couldn't process your request. Trying Groq API or offline mode...");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForceOfflineMode = async () => {
    setIsOfflineMode(true);
    resetLocalSession();
    setError("");
    setResponse("");
    setUserInput("");

    // Get the initial coaching question for interactive flow
    const initialQuestion = getInitialQuestion();
    setResponse(initialQuestion.response); // Extract just the response string
  };

  const handleResetSession = () => {
    resetLocalSession();
    setResponse("");
    setUserInput("");
    setError("");

    // If we're in offline mode, show the initial question
    if (isOfflineMode) {
      const initialQuestion = getInitialQuestion();
      setResponse(initialQuestion.response); // Extract just the response string
    } else {
      setIsOfflineMode(false);
    }
  };

  const toggleGrowInfo = () => {
    setShowGrowInfo(!showGrowInfo);
  };

  return (
    <div className="app">
      <header>
        <h1>🎯 Vibes Coaching</h1>
        <p>Speak your coaching needs and get personalized guidance using the GROW model</p>

        <div className="app-controls">
          <button onClick={toggleGrowInfo} className="info-button">
            {showGrowInfo ? '📖 Hide' : '📖 Show'} GROW Model
          </button>
          <button onClick={handleForceOfflineMode} className="offline-button">
            🔌 Use Offline Mode
          </button>
          <button onClick={() => window.location.reload()} className="groq-button" style={{ backgroundColor: '#10b981', color: 'white' }}>
            🚀 Use AI Groq Mode
          </button>
          <button onClick={handleResetSession} className="reset-button">
            🔄 Reset Session
          </button>
        </div>

        {showGrowInfo && (
          <div className="grow-info">
            <pre>{getGrowInfo()}</pre>
          </div>
        )}

        <div className="status-info">
          {isOfflineMode ? (
            <div className="offline-indicator">
              🔌 <strong>Offline Mode:</strong> Using local GROW coaching knowledge
            </div>
          ) : (
            <div className="rate-limit-info">
              <small>🚀 <strong>Groq-Powered:</strong> Ultra-fast LLM coaching with OpenAI fallback</small>
            </div>
          )}
        </div>
      </header>

      <main className="coach-container">
        <VoiceInput onTranscript={handleTranscript} />

        {userInput && (
          <div className="user-input">
            <h3>Your Input:</h3>
            <p>"{userInput}"</p>
          </div>
        )}

        {isLoading && (
          <div className="loading">
            <p>🤔 Your coach is thinking...</p>
            {retryCount > 0 && (
              <p><small>Retrying due to rate limit... (attempt {retryCount})</small></p>
            )}
          </div>
        )}

        {error && (
          <div className="error">
            <p>❌ {error}</p>
            {error.includes('Rate limit') && (
              <div className="rate-limit-tips">
                <h4>💡 Tips to avoid rate limits:</h4>
                <ul>
                  <li>Wait at least 2 seconds between requests</li>
                  <li>Groq API has much higher rate limits than OpenAI</li>
                  <li>Check if you have sufficient API credits</li>
                  <li>Or use the offline mode button above</li>
                </ul>
              </div>
            )}
            {error.includes('quota exceeded') && (
              <div className="quota-tips">
                <h4>🚀 Great News!</h4>
                <ul>
                  <li><strong>Groq API is FREE</strong> with generous limits!</li>
                  <li>Much faster than OpenAI (sub-second responses)</li>
                  <li>Perfect for real-time coaching conversations</li>
                  <li>Your Groq key is already configured - refreshing now...</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {response && !isLoading && <CoachResponse response={response} />}
      </main>

      <footer>
        <p>
          <strong>GROW Model:</strong> Goals → Reality → Options → Will/Way Forward
        </p>
        <p>
          <small>
            {isOfflineMode
              ? "Running in offline mode with local coaching knowledge"
              : "Powered by Groq's ultra-fast LLM inference with OpenAI fallback"
            }
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
