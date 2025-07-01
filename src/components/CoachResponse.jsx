
import { useEffect, useState } from 'react';

const CoachResponse = ({ response }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
  }, []);

  useEffect(() => {
    if (response) {
      // Split response into words for highlighting
      const wordArray = response.split(/(\s+|[.,!?;:])/).filter(part => part.trim() !== '');
      setWords(wordArray);
      setCurrentWordIndex(-1);
      
      if (isSupported) {
        speakResponse(response, wordArray);
      }
    }
  }, [response, isSupported]);

  const speakResponse = (text, wordArray) => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    // Clean text for speech (remove markdown and emojis for better pronunciation)
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
      .replace(/\*(.*?)\*/g, '$1')     // Remove italic markdown
      .replace(/#{1,6}\s/g, '')        // Remove markdown headers
      .replace(/[🎯🔍💡🚀🎉✅🌟📋📅📝⏳🔄]/g, '') // Remove common emojis
      .replace(/\n/g, ' ')             // Replace newlines with spaces
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.7; // Slightly slower for better highlighting sync
    utterance.pitch = 1;
    utterance.volume = 1;

    // Calculate approximate word timing
    const wordsPerMinute = 140; // Average speaking rate
    const wordDuration = 60000 / wordsPerMinute; // Duration per word in milliseconds
    
    let wordTimer;
    let currentIndex = 0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentWordIndex(0);
      
      // Start word highlighting timer
      wordTimer = setInterval(() => {
        currentIndex++;
        if (currentIndex < wordArray.length) {
          setCurrentWordIndex(currentIndex);
        }
      }, wordDuration);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentWordIndex(-1);
      if (wordTimer) clearInterval(wordTimer);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentWordIndex(-1);
      if (wordTimer) clearInterval(wordTimer);
    };

    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setCurrentWordIndex(-1);
  };

  const renderHighlightedText = () => {
    if (words.length === 0) return response;

    return words.map((word, index) => {
      const isCurrentWord = index === currentWordIndex;
      const isSpokenWord = index < currentWordIndex;
      
      return (
        <span
          key={index}
          className={`word ${isCurrentWord ? 'current-word' : ''} ${isSpokenWord ? 'spoken-word' : ''}`}
        >
          {word}
        </span>
      );
    });
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
              <button onClick={() => speakResponse(response, words)} className="speak-button">
                🔊 Speak Again
              </button>
            )}
          </div>
        )}
      </div>
      
      <div className={`response-content ${isSpeaking ? 'speaking' : ''}`}>
        <div className="highlighted-text">
          {renderHighlightedText()}
        </div>
      </div>
      
      {isSpeaking && (
        <div className="speaking-indicator">
          <p>🗣️ Speaking... {currentWordIndex >= 0 ? `(${Math.round((currentWordIndex / words.length) * 100)}%)` : ''}</p>
        </div>
      )}
    </div>
  );
};

export default CoachResponse;
