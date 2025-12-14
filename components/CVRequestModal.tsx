import React, { useState } from 'react';
import { PROFILE } from '../constants';

interface CVRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVRequestModal: React.FC<CVRequestModalProps> = ({ isOpen, onClose }) => {
  const [requestData, setRequestData] = useState({
    name: '',
    email: '',
    reason: ''
  });

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `CV Access Request: ${requestData.name}`;
    const body = `Name: ${requestData.name}%0D%0AEmail: ${requestData.email}%0D%0A%0D%0AReason for request:%0D%0A${requestData.reason}%0D%0A%0D%0APlease review my request and reply with the CV if approved.`;
    
    // Open email client
    window.location.href = `mailto:${PROFILE.socials.email}?subject=${subject}&body=${body}`;
    
    // Close modal and alert
    onClose();
    alert("Your request has been prepared in your email client. Please click 'Send' to submit it for approval.");
    setRequestData({ name: '', email: '', reason: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-theme-dark/80 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-theme-light dark:bg-theme-dark w-full max-w-md rounded-2xl shadow-2xl border border-theme-accent/20 overflow-hidden">
        <div className="p-6 border-b border-theme-accent/15 flex justify-between items-center bg-theme-accent/5">
          <h3 className="text-xl font-bold text-theme-dark dark:text-theme-light">Request CV Access</h3>
          <button onClick={onClose} className="text-theme-dark/50 hover:text-theme-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <form onSubmit={handleRequestSubmit} className="p-6 space-y-4">
          <p className="text-sm text-theme-dark/70 dark:text-theme-light/70 mb-4">
            To protect privacy and sensitive information, direct downloads are restricted. Please identify yourself to request the document.
          </p>
          
          <div>
            <label className="block text-xs font-bold uppercase text-theme-dark/50 dark:text-theme-light/50 mb-1">Full Name *</label>
            <input 
              type="text" 
              required
              value={requestData.name}
              onChange={(e) => setRequestData({...requestData, name: e.target.value})}
              className="w-full bg-theme-light/50 dark:bg-theme-dark/50 border border-theme-accent/30 rounded-lg px-4 py-2 focus:ring-1 focus:ring-theme-accent focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-theme-dark/50 dark:text-theme-light/50 mb-1">Email *</label>
            <input 
              type="email" 
              required
              value={requestData.email}
              onChange={(e) => setRequestData({...requestData, email: e.target.value})}
              className="w-full bg-theme-light/50 dark:bg-theme-dark/50 border border-theme-accent/30 rounded-lg px-4 py-2 focus:ring-1 focus:ring-theme-accent focus:outline-none"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-theme-dark/50 dark:text-theme-light/50 mb-1">Reason for Download *</label>
            <textarea 
              required
              value={requestData.reason}
              onChange={(e) => setRequestData({...requestData, reason: e.target.value})}
              rows={3}
              className="w-full bg-theme-light/50 dark:bg-theme-dark/50 border border-theme-accent/30 rounded-lg px-4 py-2 focus:ring-1 focus:ring-theme-accent focus:outline-none resize-none"
              placeholder="e.g. Considering for a Chief AI Officer role..."
            ></textarea>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-theme-accent hover:bg-theme-accent/90 text-white font-bold py-3 rounded-lg shadow-lg shadow-theme-accent/20 transition-all active:scale-95"
            >
              Send Access Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CVRequestModal;