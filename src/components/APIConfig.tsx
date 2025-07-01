import React, { useState } from 'react';
import { Key, Eye, EyeOff, Save, X } from 'lucide-react';

interface APIConfigProps {
  onApiKeySet: (apiKey: string) => void;
  onClose: () => void;
  currentApiKey?: string;
}

const APIConfig: React.FC<APIConfigProps> = ({ onApiKeySet, onClose, currentApiKey }) => {
  const [apiKey, setApiKey] = useState(currentApiKey || '');
  const [showKey, setShowKey] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const handleSave = async () => {
    if (!apiKey.trim()) {
      alert('Please enter your OpenAI API key');
      return;
    }

    if (!apiKey.startsWith('sk-')) {
      alert('OpenAI API keys start with "sk-". Please check your key.');
      return;
    }

    setIsValidating(true);
    
    try {
      // Save to localStorage for persistence
      localStorage.setItem('openai_api_key', apiKey);
      onApiKeySet(apiKey);
      onClose();
    } catch (error) {
      console.error('Error saving API key:', error);
      alert('Error saving API key. Please try again.');
    } finally {
      setIsValidating(false);
    }
  };

  const handleClear = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
    onApiKeySet('');
  };

  return (
    <div className="api-config-overlay">
      <div className="api-config-modal">
        <div className="api-config-header">
          <div className="api-config-title">
            <Key size={24} />
            <h2>Configure OpenAI API</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="api-config-content">
          <p className="api-config-description">
            To enable intelligent AI coaching responses, please enter your OpenAI API key.
            Your key is stored locally and never sent to our servers.
          </p>

          <div className="api-key-input-group">
            <label htmlFor="apiKey">OpenAI API Key:</label>
            <div className="api-key-input-wrapper">
              <input
                id="apiKey"
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="api-key-input"
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="api-config-info">
            <h3>How to get your OpenAI API Key:</h3>
            <ol>
              <li>Go to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">OpenAI API Keys</a></li>
              <li>Sign in to your OpenAI account</li>
              <li>Click "Create new secret key"</li>
              <li>Copy the key and paste it above</li>
            </ol>
            <p className="api-config-note">
              <strong>Note:</strong> Your API key is stored locally in your browser and is never shared.
              You'll be charged by OpenAI based on usage (typically $0.002 per conversation).
            </p>
          </div>

          <div className="api-config-actions">
            <button
              onClick={handleClear}
              className="clear-button"
              disabled={!currentApiKey}
            >
              Clear Key
            </button>
            <button
              onClick={handleSave}
              className="save-button"
              disabled={isValidating || !apiKey.trim()}
            >
              {isValidating ? (
                <>
                  <div className="spinner"></div>
                  Validating...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save & Enable AI
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIConfig;
