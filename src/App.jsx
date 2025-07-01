
import { useState } from 'react';
import VoiceInput from './components/VoiceInput';
import CoachResponse from './components/CoachResponse';
import { getGrowResponse, resetLocalSession, getGrowInfo } from './utils/growModel';

function App() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [showGrowInfo, setShowGrowInfo] = useState(false);

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
    } catch (err) {
      console.error('Error getting coach response:', err);
      
      if (err.message.includes('Rate limit exceeded')) {
        setError("🕐 Rate limit exceeded. The app will automatically retry in a moment. Please wait...");
        setRetryCount(prev => prev + 1);
      } else {
        setError(err.message || "Sorry, I couldn't process your request. Please check your internet connection and API key.");
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
    
    // Provide a welcome message for offline mode
    const welcomeMessage = `🤖 **Offline Mode Activated**

I'm now using the local GROW coaching knowledge base. While I won't have the full conversational capabilities of the AI, I can still guide you through the GROW coaching process effectively.

Please tell me what you'd like to work on today - whether it's career goals, personal development, learning new skills, or any other challenge you're facing.`;
    
    setResponse(welcomeMessage);
  };

  const handleResetSession = () => {
    resetLocalSession();
    setResponse("");
    setUserInput("");
    setError("");
    setIsOfflineMode(false);
  };

  const toggleGrowInfo = () => {
    setShowGrowInfo(!showGrowInfo);
  };

  return (
    <div className="app">
      <header>
        <h1>🎯 GROW Coaching App</h1>
        <p>Speak your coaching needs and get personalized guidance using the GROW model</p>
        
        <div className="app-controls">
          <button onClick={toggleGrowInfo} className="info-button">
            {showGrowInfo ? '📖 Hide' : '📖 Show'} GROW Model Info
          </button>
          <button onClick={handleForceOfflineMode} className="offline-button">
            🔌 Use Offline Mode
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
              <small>⚡ Rate limited to 1 request per 2 seconds to prevent API limits</small>
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
                  <li>Check if you have sufficient API credits</li>
                  <li>Consider upgrading your OpenAI plan</li>
                  <li>Or use the offline mode button above</li>
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
              : "Connected to OpenAI API with offline fallback available"
            }
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
