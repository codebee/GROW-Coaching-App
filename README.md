# 🎯 AI Coaching App - GROW Model

A modern React TypeScript application that provides AI-powered coaching sessions using the proven GROW coaching model. Features real-time voice recognition and text-to-speech capabilities for an immersive coaching experience.

## ✨ Features

### 🤖 AI-Powered Coaching
- **ChatGPT Integration**: Connect your OpenAI API key for intelligent coaching responses
- **Context-Aware Questions**: AI analyzes conversation history for personalized coaching
- **Smart Phase Transitions**: Seamless movement between GROW phases with contextual prompts
- **Fallback System**: Works with or without AI - graceful degradation to default responses

### 🎤 Voice-Powered Interaction
- **Voice Recognition**: Capture coachee responses using browser's Speech Recognition API
- **Text-to-Speech**: AI coach speaks responses using Speech Synthesis API
- **Real-time Transcription**: See your speech converted to text in real-time

### 🌱 GROW Model Implementation
- **Goal**: Define what you want to achieve
- **Reality**: Explore your current situation
- **Options**: Discover possible approaches and solutions
- **Way Forward**: Create actionable steps and commitments

### 💡 Smart Coaching Features
- **Progressive Session Structure**: Guided through each GROW phase
- **Contextual Responses**: AI generates relevant coaching questions
- **Session Management**: Track progress through coaching phases
- **Visual Progress Indicators**: See your journey through the GROW model

### 🎨 Modern User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Beautiful UI**: Gradient backgrounds and smooth animations
- **Accessibility**: Support for users with different abilities
- **Browser Compatibility**: Works in Chrome, Edge, and other modern browsers

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- Modern web browser with Speech API support (Chrome, Edge)
- Microphone access for voice input
- **Optional**: OpenAI API key for intelligent AI coaching responses

### Installation

1. **Clone or download the project**
   ```bash
   cd CoachingApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Allow microphone access when prompted

5. **Configure AI (Optional but Recommended)**
   - Click "Enable Smart AI" in the header
   - Enter your OpenAI API key
   - Enjoy intelligent, contextual coaching responses!

## 🎯 How to Use

### Starting a Coaching Session

1. **Click the microphone button** to start voice recording
2. **Speak your response** to the coaching question
3. **Click the microphone again** to stop recording
4. **Review your transcribed text** and click "Submit Response"
5. **Listen to the AI coach's response** and guidance
6. **Progress through each GROW phase** systematically

### Navigation Controls

- **🎤 Microphone Button**: Start/stop voice recording
- **🔊 Speaker Button**: Stop text-to-speech if needed
- **➡️ Next Phase**: Move to the next GROW phase
- **🔄 Reset**: Start a new coaching session

### GROW Model Phases

#### 🎯 Goal Phase
- Define specific, measurable objectives
- Explore what you want to achieve
- Clarify the importance of your goal

#### 🔍 Reality Phase
- Assess current situation honestly
- Identify existing resources and constraints
- Understand challenges and obstacles

#### 💡 Options Phase
- Brainstorm possible approaches
- Explore creative solutions
- Consider available resources and support

#### 🚀 Way Forward Phase
- Commit to specific actions
- Set timelines and milestones
- Plan for potential obstacles

## 🛠️ Technical Details

### Technology Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **OpenAI API** for intelligent coaching responses
- **Browser Web APIs**: Speech Recognition & Speech Synthesis
- **Lucide React** for modern icons
- **CSS3** with modern features (Grid, Flexbox, Gradients)

### Browser Support
- **Chrome/Chromium**: Full support (recommended)
- **Microsoft Edge**: Full support
- **Firefox**: Limited speech recognition support
- **Safari**: Text-to-speech only (no speech recognition)

### Project Structure
```
src/
├── components/
│   └── APIConfig.tsx    # OpenAI API configuration modal
├── services/
│   └── AICoachingService.ts # AI coaching logic and OpenAI integration
├── App.tsx              # Main application component
├── App.css              # Application-specific styles
├── index.css            # Global styles and theme
├── main.tsx             # Application entry point
└── vite-env.d.ts        # Vite type definitions
```

## 🎨 Customization

### Styling
- Modify colors in `src/index.css` CSS variables
- Adjust the gradient themes in `.coaching-interface`
- Customize animations and transitions

### Coaching Responses
- Edit the response arrays in `generateCoachResponse` function
- Add more sophisticated AI responses
- Integrate with external AI services (OpenAI, etc.)

### Features
- Add session persistence with localStorage
- Implement user authentication
- Export session transcripts
- Add more coaching models beyond GROW

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌟 Future Enhancements

- **AI Integration**: Connect to ChatGPT or Claude for more intelligent responses
- **Session Storage**: Save and resume coaching sessions
- **Multi-language Support**: Support for different languages
- **Advanced Analytics**: Track coaching progress over time
- **Mobile App**: React Native version for mobile devices
- **Team Coaching**: Multi-participant coaching sessions

## 🤝 Contributing

This is a personal coaching application, but feel free to:
1. Fork the repository
2. Create feature branches
3. Submit pull requests
4. Report issues and bugs

## 📝 License

This project is for educational and personal use. Feel free to modify and adapt for your own coaching needs.

## 🎓 Learning Resources

### GROW Model
- [GROW Model Overview](https://en.wikipedia.org/wiki/GROW_model)
- [Coaching with the GROW Model](https://www.mindtools.com/pages/article/newLDR_89.htm)

### Web Speech API
- [MDN Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- [MDN Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

### React & TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Happy Coaching! 🌟**

Transform your goals into reality with AI-powered coaching sessions.
