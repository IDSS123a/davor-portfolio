
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AI_LOGO_URL = "https://i.postimg.cc/mrZ4hsYX/davor.png";

// Simple Icons
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);
const ThumbUpIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
);
const ThumbDownIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
);

// Improved Formatted Message Component
const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  // Helper to render bold text
  const renderRichText = (content: string) => {
    // Split by **text**
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
    if (!trimmed) return; // Skip empty lines

    // Check for list item (starts with -, *, or •)
    const listMatch = trimmed.match(/^[-*•]\s+(.*)/);

    if (listMatch) {
      // It's a list item
      currentList.push(
        <li key={`li-${index}`} className="mb-1 pl-1">
          {renderRichText(listMatch[1])}
        </li>
      );
    } else {
      // Not a list item
      // If we have an accumulated list, render it first
      if (currentList.length > 0) {
        renderedContent.push(
          <ul key={`ul-${index}`} className="mb-3 list-disc ml-5 space-y-1 text-sm marker:text-theme-accent">
            {currentList}
          </ul>
        );
        currentList = [];
      }
      
      // Render paragraph
      renderedContent.push(
        <p key={`p-${index}`} className="mb-3 last:mb-0 leading-relaxed text-sm">
          {renderRichText(trimmed)}
        </p>
      );
    }
  });

  // Flush remaining list items if any
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
  const initialMessage: ChatMessage = { 
    id: 'init', 
    role: 'model', 
    text: `Hello! I'm Davor's AI assistant. Ask me anything about his leadership style, experience in AI, or his new workbook on AI Business Problems.` 
  };
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

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
       setMessages(prev => [...prev, { id: generateId(), role: 'model', text: "I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
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
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleClearChat} 
                className="text-theme-dark/50 dark:text-theme-light/50 hover:text-theme-accent p-1 rounded-md transition-colors"
                title="Clear Chat"
              >
                <RefreshIcon />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-theme-dark/50 dark:text-theme-light/50 hover:text-theme-dark dark:hover:text-theme-light p-1">
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-theme-light/50 dark:bg-theme-dark/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-theme-light dark:bg-theme-dark overflow-hidden border border-theme-accent/20 mr-2 flex-shrink-0 self-end mb-1">
                      <img src={AI_LOGO_URL} alt="AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-theme-accent text-white rounded-tr-none' 
                      : 'bg-theme-light dark:bg-theme-dark text-theme-dark dark:text-theme-light rounded-tl-none border border-theme-accent/15'
                  }`}>
                    {msg.role === 'model' ? <FormattedMessage text={msg.text} /> : <div className="text-sm">{msg.text}</div>}
                  </div>
                </div>
                
                {/* Feedback Buttons for Model Messages */}
                {msg.role === 'model' && msg.id !== 'init' && (
                  <div className="flex items-center gap-2 mt-1 ml-11">
                    <button 
                      onClick={() => handleFeedback(msg.id, 'up')}
                      className={`p-1 rounded hover:bg-theme-light dark:hover:bg-theme-dark transition-colors ${msg.feedback === 'up' ? 'text-theme-accent' : 'text-theme-dark/50 dark:text-theme-light/50'}`}
                      title="Helpful"
                    >
                      <ThumbUpIcon filled={msg.feedback === 'up'} />
                    </button>
                    <button 
                      onClick={() => handleFeedback(msg.id, 'down')}
                      className={`p-1 rounded hover:bg-theme-light dark:hover:bg-theme-dark transition-colors ${msg.feedback === 'down' ? 'text-theme-accent' : 'text-theme-dark/50 dark:text-theme-light/50'}`}
                      title="Not Helpful"
                    >
                      <ThumbDownIcon filled={msg.feedback === 'down'} />
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            {/* Improved "Thinking" Indicator */}
            {isLoading && (
              <div className="flex justify-start w-full animate-fade-in-up">
                 <div className="w-8 h-8 rounded-full bg-theme-light dark:bg-theme-dark overflow-hidden border border-theme-accent/20 mr-2 flex-shrink-0 self-end mb-1 opacity-70">
                    <img src={AI_LOGO_URL} alt="AI" className="w-full h-full object-cover grayscale" />
                 </div>
                 <div className="bg-theme-light dark:bg-theme-dark border border-theme-accent/20 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-3">
                    <div className="flex space-x-1 h-3 items-center">
                      <div className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-xs text-theme-dark/60 dark:text-theme-light/60 font-medium">Davor is thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-theme-light dark:bg-theme-dark border-t border-theme-accent/15">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Davor..."
                className="flex-1 bg-theme-light/50 dark:bg-theme-dark/50 border border-theme-accent/30 rounded-lg px-4 py-2 text-sm text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent placeholder-theme-dark/50 dark:placeholder-theme-light/50"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-theme-accent hover:bg-theme-accent/90 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
           <span className="absolute right-full mr-4 bg-theme-light text-theme-dark px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
             Ask AI Davor
           </span>
         )}
      </button>
    </div>
  );
};

export default ChatAssistant;
