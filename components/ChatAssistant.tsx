
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AI_LOGO_URL = "https://i.postimg.cc/mrZ4hsYX/davor.png";
const STORAGE_KEY = 'davor_portfolio_chat_history';

// Icons
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);
const MicIcon = ({ listening }: { listening: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={listening ? "currentColor" : "none"} stroke={listening ? "currentColor" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={listening ? "animate-pulse text-red-500" : ""}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
);
const ThumbUpIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
);
const ThumbDownIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
);
const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);

// Loading Waveform Component
const Waveform = () => (
  <div className="flex items-center space-x-1 h-4">
    <div className="w-1 h-3 bg-theme-accent rounded-full animate-[pulse_0.6s_ease-in-out_infinite]"></div>
    <div className="w-1 h-5 bg-theme-accent rounded-full animate-[pulse_0.6s_ease-in-out_0.2s_infinite]"></div>
    <div className="w-1 h-3 bg-theme-accent rounded-full animate-[pulse_0.6s_ease-in-out_0.4s_infinite]"></div>
  </div>
);

// Improved Formatted Message Component
const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const renderRichText = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-theme-dark dark:text-theme-light">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = text.split('\n');
  const renderedContent: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const listMatch = trimmed.match(/^[-*•]\s+(.*)/);

    if (listMatch) {
      currentList.push(
        <li key={`li-${index}`} className="mb-1 pl-1">
          {renderRichText(listMatch[1])}
        </li>
      );
    } else {
      if (currentList.length > 0) {
        renderedContent.push(
          <ul key={`ul-${index}`} className="mb-3 list-disc ml-5 space-y-1 text-sm marker:text-theme-accent">
            {currentList}
          </ul>
        );
        currentList = [];
      }
      renderedContent.push(
        <p key={`p-${index}`} className="mb-3 last:mb-0 leading-relaxed text-sm">
          {renderRichText(trimmed)}
        </p>
      );
    }
  });

  if (currentList.length > 0) {
    renderedContent.push(
      <ul key="ul-end" className="mb-3 list-disc ml-5 space-y-1 text-sm marker:text-theme-accent">
        {currentList}
      </ul>
    );
  }

  return <div>{renderedContent}</div>;
};

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const initialMessage: ChatMessage = { 
    id: 'init', 
    role: 'model', 
    text: `Hello! I'm Davor's AI assistant. Ask me anything about his leadership style, experience in AI, or his new workbook on AI Business Problems.` 
  };

  // State initialization with localStorage to persist chat history
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedMessages = localStorage.getItem(STORAGE_KEY);
        return savedMessages ? JSON.parse(savedMessages) : [initialMessage];
      }
      return [initialMessage];
    } catch (e) {
      return [initialMessage];
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  // Persist messages to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const generateId = () => Math.random().toString(36).substr(2, 9) + Date.now().toString(36);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsgId = generateId();
    const userMsg: ChatMessage = { id: userMsgId, role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      setMessages(prev => [...prev, { id: generateId(), role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      // Robust error handling - display user friendly message in chat
      setMessages(prev => [...prev, { 
        id: generateId(), 
        role: 'model', 
        text: "I encountered a connection error. Please check your internet or try again later.",
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice input is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(prev => prev + (prev ? ' ' : '') + transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
      
      // Specifically handle the "not-allowed" error
      if (event.error === 'not-allowed') {
        alert("Microphone access denied. Please allow microphone permissions in your browser settings to use voice input.");
      }
    };

    try {
      recognition.start();
    } catch (e) {
      console.error("Failed to start recognition", e);
      setIsListening(false);
    }
  };

  const handleClearChat = () => {
    const newHistory = [initialMessage];
    setMessages(newHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  };

  const handleFeedback = (messageId: string, type: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        const newFeedback = msg.feedback === type ? undefined : type;
        return { ...msg, feedback: newFeedback };
      }
      return msg;
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-theme-light dark:bg-theme-dark border border-theme-accent/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right">
          
          {/* Header */}
          <div className="bg-theme-light dark:bg-theme-dark p-4 border-b border-theme-accent/15 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-theme-light dark:bg-theme-dark overflow-hidden border border-theme-accent/30">
                <img src={AI_LOGO_URL} alt="Davor AI" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-theme-dark dark:text-theme-light font-bold text-sm">AI assistant</h3>
                <span className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleClearChat} 
                className="text-theme-dark/50 dark:text-theme-light/50 hover:text-theme-accent p-2 rounded-lg hover:bg-theme-accent/5 transition-colors"
                title="Clear History"
              >
                <RefreshIcon />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-theme-dark/50 dark:text-theme-light/50 hover:text-theme-dark dark:hover:text-theme-light p-2">
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-theme-light/50 dark:bg-theme-dark/50 custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-theme-light dark:bg-theme-dark overflow-hidden border border-theme-accent/20 mr-2 flex-shrink-0 self-end mb-1">
                      <img src={AI_LOGO_URL} alt="AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                    msg.isError 
                      ? 'bg-red-50 dark:bg-red-900/20 border border-red-500/50 text-red-600 dark:text-red-300 rounded-tl-none'
                      : msg.role === 'user' 
                        ? 'bg-theme-accent text-white rounded-tr-none' 
                        : 'bg-theme-light dark:bg-theme-dark text-theme-dark dark:text-theme-light rounded-tl-none border border-theme-accent/15'
                  }`}>
                    {msg.isError && <div className="mb-1 flex items-center gap-2 font-bold text-xs"><WarningIcon /> System Error</div>}
                    {msg.role === 'model' ? <FormattedMessage text={msg.text} /> : <div className="text-sm">{msg.text}</div>}
                  </div>
                </div>
                
                {/* Enhanced Feedback Buttons */}
                {msg.role === 'model' && msg.id !== 'init' && !msg.isError && (
                  <div className="flex items-center gap-2 mt-2 ml-11">
                    <span className="text-[10px] text-theme-dark/30 dark:text-theme-light/30 mr-1 font-medium">Was this helpful?</span>
                    <button 
                      onClick={() => handleFeedback(msg.id, 'up')}
                      className={`p-1.5 rounded-full hover:bg-theme-accent/10 transition-colors ${msg.feedback === 'up' ? 'text-theme-accent bg-theme-accent/10 ring-1 ring-theme-accent/30' : 'text-theme-dark/40 dark:text-theme-light/40'}`}
                      title="Yes"
                      aria-label="Thumbs up"
                    >
                      <ThumbUpIcon filled={msg.feedback === 'up'} />
                    </button>
                    <button 
                      onClick={() => handleFeedback(msg.id, 'down')}
                      className={`p-1.5 rounded-full hover:bg-theme-accent/10 transition-colors ${msg.feedback === 'down' ? 'text-theme-accent bg-theme-accent/10 ring-1 ring-theme-accent/30' : 'text-theme-dark/40 dark:text-theme-light/40'}`}
                      title="No"
                      aria-label="Thumbs down"
                    >
                      <ThumbDownIcon filled={msg.feedback === 'down'} />
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            {/* Sophisticated Loading Animation */}
            {isLoading && (
              <div className="flex justify-start w-full animate-fade-in-up">
                 <div className="w-8 h-8 rounded-full bg-theme-light dark:bg-theme-dark overflow-hidden border border-theme-accent/20 mr-2 flex-shrink-0 self-end mb-1 relative">
                    <img src={AI_LOGO_URL} alt="AI" className="w-full h-full object-cover opacity-80" />
                    {/* Ring Pulse Effect on Avatar */}
                    <div className="absolute inset-0 border-2 border-theme-accent rounded-full animate-ping opacity-50"></div>
                 </div>
                 <div className="bg-theme-light dark:bg-theme-dark border border-theme-accent/20 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-3">
                    <Waveform />
                    <span className="text-xs text-theme-dark/50 dark:text-theme-light/50 font-medium tracking-wide">Processing...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-theme-light dark:bg-theme-dark border-t border-theme-accent/15">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  disabled={isLoading || isListening}
                  className="w-full bg-theme-light/50 dark:bg-theme-dark/50 border border-theme-accent/30 rounded-lg pl-4 pr-10 py-2 text-sm text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent placeholder-theme-dark/50 dark:placeholder-theme-light/50 disabled:opacity-70"
                />
                <button 
                  onClick={handleVoiceInput}
                  disabled={isLoading}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full transition-colors ${isListening ? 'text-red-500 bg-red-100 dark:bg-red-900/30' : 'text-theme-dark/40 dark:text-theme-light/40 hover:text-theme-accent'} disabled:opacity-30`}
                  title="Use Voice Input"
                >
                  <MicIcon listening={isListening} />
                </button>
              </div>
              
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-theme-accent hover:bg-theme-accent/90 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-theme-accent hover:bg-theme-accent/90 text-white rounded-full shadow-lg shadow-theme-accent/30 transition-all hover:scale-110 active:scale-95 overflow-hidden"
      >
         {isOpen ? (
           <CloseIcon /> 
         ) : (
           <img src={AI_LOGO_URL} alt="Ask Davor" className="w-full h-full object-cover" />
         )}
         
         {!isOpen && (
           <span className="absolute right-full mr-4 bg-theme-light text-theme-dark px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-theme-accent/10">
             Ask AI Davor
           </span>
         )}
      </button>
    </div>
  );
};

export default ChatAssistant;
