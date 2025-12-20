import { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AI_LOGO_URL = "https://i.postimg.cc/mrZ4hsYX/davor.png";
const STORAGE_KEY = 'davor_portfolio_chat_history';

// Icons
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
);
const MicIcon = ({ listening }: { listening: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={listening ? "currentColor" : "none"} stroke={listening ? "currentColor" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={listening ? "animate-pulse text-red-600" : ""}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
);
const ThumbUpIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
);
const ThumbDownIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
);

const Waveform = () => (
  <div className="flex items-center space-x-1 h-4">
    <div className="w-1.5 h-3 bg-theme-accent dark:bg-theme-accent-light rounded-full animate-[pulse_0.6s_ease-in-out_infinite]"></div>
    <div className="w-1.5 h-5 bg-theme-accent dark:bg-theme-accent-light rounded-full animate-[pulse_0.6s_ease-in-out_0.2s_infinite]"></div>
    <div className="w-1.5 h-3 bg-theme-accent dark:bg-theme-accent-light rounded-full animate-[pulse_0.6s_ease-in-out_0.4s_infinite]"></div>
  </div>
);

const CleanMessageRenderer: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm font-medium leading-relaxed whitespace-pre-wrap text-gray-900 dark:text-gray-100">
          {p.trim()}
        </p>
      ))}
    </div>
  );
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

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedMessages = localStorage.getItem(STORAGE_KEY);
        if (savedMessages) return JSON.parse(savedMessages);
      }
      return [initialMessage];
    } catch (e) {
      return [initialMessage];
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => { scrollToBottom(); }, [messages, isOpen, isLoading]);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); }, [messages]);

  const generateId = () => Math.random().toString(36).substr(2, 9) + Date.now().toString(36);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { id: generateId(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      setMessages(prev => [...prev, { id: generateId(), role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: generateId(), role: 'model', text: "I encountered an error. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice input not supported in this browser.");
      return;
    }
    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => setInput(prev => prev + (prev ? ' ' : '') + event.results[0][0].transcript);
    recognition.start();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[550px] max-h-[85vh] bg-white dark:bg-theme-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right">
          
          <div className="bg-gray-50 dark:bg-black/20 p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-2 border-theme-accent dark:border-theme-accent-light">
                <img src={AI_LOGO_URL} alt="Davor AI" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-bold text-sm">AI Assistant</h3>
                <span className="text-[10px] text-green-600 dark:text-green-400 font-extrabold flex items-center gap-1 uppercase tracking-tighter">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setMessages([initialMessage])} className="text-gray-500 dark:text-gray-400 hover:text-theme-accent dark:hover:text-theme-accent-light p-2 transition-colors"><RefreshIcon /></button>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 transition-colors"><CloseIcon /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-white dark:bg-theme-surface-dark">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mr-2 flex-shrink-0 self-end mb-1 border border-gray-200 dark:border-gray-700">
                      <img src={AI_LOGO_URL} alt="AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.isError ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                    : msg.role === 'user' ? 'bg-theme-accent dark:bg-theme-accent text-white rounded-tr-none' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none border border-gray-200 dark:border-gray-700'
                  }`}>
                    {msg.role === 'model' ? <CleanMessageRenderer text={msg.text} /> : <div className="text-sm font-semibold">{msg.text}</div>}
                  </div>
                </div>
                {msg.role === 'model' && msg.id !== 'init' && !msg.isError && (
                  <div className="flex items-center gap-3 mt-2 ml-10">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Helpful?</span>
                    <button onClick={() => {}} className="text-gray-400 dark:text-gray-500 hover:text-theme-accent dark:hover:text-theme-accent-light p-1 transition-colors"><ThumbUpIcon filled={false} /></button>
                    <button onClick={() => {}} className="text-gray-400 dark:text-gray-500 hover:text-red-500 p-1 transition-colors"><ThumbDownIcon filled={false} /></button>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-center gap-2 animate-fade-in-up">
                 <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mr-1 border border-gray-200 dark:border-gray-700"><img src={AI_LOGO_URL} alt="AI" className="w-full h-full opacity-50" /></div>
                 <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-3 shadow-sm">
                    <Waveform /><span className="text-xs font-extrabold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Processing</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/20">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-gray-900 dark:text-white focus:ring-2 focus:ring-theme-accent dark:focus:ring-theme-accent-light focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button onClick={handleVoiceInput} className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg ${isListening ? 'bg-red-100 dark:bg-red-900/40' : 'text-gray-400 hover:text-theme-accent dark:hover:text-theme-accent-light'}`}><MicIcon listening={isListening} /></button>
              </div>
              <button onClick={handleSend} disabled={!input.trim() || isLoading} className="bg-theme-accent dark:bg-theme-accent text-white p-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"><SendIcon /></button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-theme-accent dark:bg-theme-accent hover:shadow-2xl hover:scale-110 active:scale-95 rounded-full flex items-center justify-center text-white shadow-xl transition-all border-4 border-white dark:border-gray-900 overflow-hidden">
         {isOpen ? <CloseIcon /> : <img src={AI_LOGO_URL} alt="Ask AI" className="w-full h-full object-cover" />}
      </button>
    </div>
  );
};

export default ChatAssistant;