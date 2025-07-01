
import { useEffect, useState } from 'react';

const CoachResponse = ({ response }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
  }, []);

  useEffect(() => {
    if (response && isSupported) {
      speakResponse(response);
    }
  }, [response, isSupported]);

  const speakResponse = (text) => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  if (!response) return null;

  return (
    <div className="coach-response">
      <div className="response-header">
        <h3>🎯 Coach Says:</h3>
        {isSupported && (
          <div className="audio-controls">
            {isSpeaking ? (
              <button onClick={stopSpeaking} className="stop-button">
                🔇 Stop Speaking
              </button>
            ) : (
              <button onClick={() => speakResponse(response)} className="speak-button">
                🔊 Speak Again
              </button>
            )}
          </div>
        )}
      </div>
      
      <div className="response-content">
        <p>{response}</p>
      </div>
      
      {isSpeaking && (
        <div className="speaking-indicator">
          <p>🗣️ Speaking...</p>
        </div>
      )}
    </div>
  );
};

export default CoachResponse;
