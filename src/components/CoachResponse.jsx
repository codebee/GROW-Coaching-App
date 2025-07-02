
import { useEffect, useState, useCallback } from 'react';

const CoachResponse = ({ response }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [words, setWords] = useState([]);

  // Debounced word index setter to prevent rapid updates
  const debouncedSetWordIndex = useCallback((index) => {
    setCurrentWordIndex(prevIndex => {
      if (Math.abs(index - prevIndex) > 1 || index === -1 || index === words.length) {
        return index;
      }
      return prevIndex;
    });
  }, [words.length]);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
  }, []);

  useEffect(() => {
    if (response) {
      // Better word parsing for more accurate highlighting
      const wordArray = response
        .split(/(\s+)/) // Split on whitespace but keep the spaces
        .filter(part => part.length > 0)
        .flatMap(part => {
          // Further split words with punctuation but keep punctuation attached
          if (part.trim() === '') return [part]; // Keep spaces as-is
          
          // Split on punctuation but keep it with the word
          const matches = part.match(/[^\s.,!?;:]+[.,!?;:]?/g) || [part];
          return matches;
        });
      
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
    utterance.rate = 1.2; // Even faster rate for better highlighting sync
    utterance.pitch = 1;
    utterance.volume = 1;

    // Slightly slower timing calculation for better sync
    const effectiveWordsPerMinute = 200 * utterance.rate; // Reduced from 220 to 200
    const avgWordLength = cleanText.split(' ').reduce((sum, word) => sum + word.length, 0) / cleanText.split(' ').length;
    const pauseFactor = 0.9; // Increased from 0.8 to 0.9 for slight slowdown
    const wordDuration = (60000 / effectiveWordsPerMinute) * pauseFactor;
    
    let wordTimer;
    let currentIndex = 0;
    let startTime;
    let pauseAdjustment = 0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      debouncedSetWordIndex(0);
      startTime = Date.now();
      
      // Much faster, more aggressive word highlighting
      const highlightNextWord = () => {
        if (!speechSynthesis.speaking) return;
        
        const elapsed = Date.now() - startTime;
        const expectedIndex = Math.floor(elapsed / wordDuration);
        
        // Slightly less aggressive highlighting - better sync
        const anticipationOffset = 1; // Reduced back to 1 word ahead for better balance
        const targetIndex = Math.min(expectedIndex + anticipationOffset, wordArray.length - 1);
        
        if (targetIndex > currentIndex && currentIndex < wordArray.length - 1) {
          currentIndex = targetIndex;
          debouncedSetWordIndex(currentIndex);
        }
        
        if (currentIndex < wordArray.length - 1) {
          // Balanced timing with minimal adjustments
          const currentWord = wordArray[currentIndex] || '';
          let nextDelay = wordDuration * 0.8; // Increased from 0.7 to 0.8 for slight slowdown
          
          // Small pause adjustments for natural flow
          if (currentWord.includes('.') || currentWord.includes('!') || currentWord.includes('?')) {
            nextDelay *= 1.1; // Slightly increased pause for sentence endings
          }
          
          wordTimer = setTimeout(highlightNextWord, nextDelay);
        }
      };
      
      // Start immediately with no delay
      highlightNextWord();
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      // Highlight all words as complete
      debouncedSetWordIndex(wordArray.length);
      if (wordTimer) clearTimeout(wordTimer);
      
      // Reset after a brief moment
      setTimeout(() => {
        debouncedSetWordIndex(-1);
      }, 1000);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      debouncedSetWordIndex(-1);
      if (wordTimer) clearTimeout(wordTimer);
    };

    // Handle pause/resume
    utterance.onpause = () => {
      pauseAdjustment = Date.now() - startTime;
      if (wordTimer) clearTimeout(wordTimer);
    };

    utterance.onresume = () => {
      startTime = Date.now() - pauseAdjustment;
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
      const isNextWord = index === currentWordIndex + 1;
      
      // Don't render empty or whitespace-only words
      if (!word.trim()) {
        return <span key={index} className="whitespace">{word}</span>;
      }
      
      return (
        <span
          key={index}
          className={`word ${isCurrentWord ? 'current-word' : ''} ${isSpokenWord ? 'spoken-word' : ''} ${isNextWord ? 'next-word' : ''}`}
          style={{
            transitionDelay: `${index * 50}ms` // Staggered animation
          }}
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
          <div className="speech-progress">
            <div 
              className="speech-progress-bar"
              style={{
                width: `${currentWordIndex >= 0 ? Math.round((currentWordIndex / words.length) * 100) : 0}%`
              }}
            ></div>
          </div>
          <p>🗣️ Speaking... {currentWordIndex >= 0 ? `(${Math.round((currentWordIndex / words.length) * 100)}%)` : ''}</p>
        </div>
      )}
    </div>
  );
};

export default CoachResponse;
