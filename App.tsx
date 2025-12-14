
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Testimonials from './components/Testimonials';
import ChatAssistant from './components/ChatAssistant';
import Portfolio from './components/Portfolio'; // New Import
import CVRequestModal from './components/CVRequestModal';
import { BOOKS, BOOK_SUBMISSION_URL, PROFILE } from './constants';

const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Helper for smooth scrolling from Footer
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-theme-light dark:bg-theme-dark min-h-screen relative transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />

        {/* Books Section */}
        <section id="books" className="py-24 bg-theme-light dark:bg-theme-dark border-t border-theme-accent/15">
          <div className="w-full px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
               <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">Published Works</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-dark dark:text-theme-light mt-2">Books on AI in Business</h2>
               <p className="text-theme-dark/70 dark:text-theme-light/70 mt-4">Sharing knowledge and practical insights to help professionals leverage AI technology</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {BOOKS.map((book) => (
                 <div key={book.id} className="bg-theme-light dark:bg-theme-dark border border-theme-accent/15 rounded-xl overflow-hidden group hover:border-theme-accent/40 transition-all hover:-translate-y-2 hover:shadow-xl">
                    <div className="p-6 h-full flex flex-col">
                       {book.isNew && (
                         <span className="self-start bg-theme-accent/10 text-theme-accent text-[10px] font-bold px-2 py-1 rounded mb-4 uppercase tracking-wider">New</span>
                       )}
                       <h3 className="text-xl font-bold text-theme-dark dark:text-theme-light mb-1 group-hover:text-theme-accent transition-colors">{book.title}</h3>
                       <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs uppercase font-bold tracking-wide mb-4">{book.subtitle}</p>
                       <p className="text-theme-dark/70 dark:text-theme-light/70 text-sm mb-6 flex-grow">{book.description}</p>
                       
                       <div className="flex flex-wrap gap-2 mb-6">
                         {book.tags.map(tag => (
                           <span key={tag} className="text-[10px] text-theme-dark/70 dark:text-theme-light/70 bg-theme-light dark:bg-theme-dark px-2 py-1 rounded border border-theme-accent/15">{tag}</span>
                         ))}
                       </div>
                       
                       <a href={book.id === 'b4' ? BOOK_SUBMISSION_URL : '#'} target="_blank" rel="noopener noreferrer" className="mt-auto w-full block text-center py-2 rounded border border-theme-accent/30 text-theme-dark dark:text-theme-light font-bold text-sm hover:bg-theme-accent hover:text-white transition-colors">
                         {book.id === 'b4' ? 'View Workbook' : 'Buy on Amazon'}
                       </a>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-8 text-center">
               <a href="#" className="text-theme-accent hover:underline text-sm font-medium flex items-center justify-center gap-2">
                 View All Books on Amazon
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
               </a>
            </div>
          </div>
        </section>

        {/* New Portfolio Section */}
        <Portfolio />

        <Volunteering />
        
        <Testimonials />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 bg-theme-light dark:bg-theme-dark border-t border-theme-accent/15 px-6">
           <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
              
              <div className="space-y-8">
                 <div>
                    <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">Contact</span>
                    <h2 className="text-4xl font-serif font-bold text-theme-dark dark:text-theme-light mt-2">Let's Work Together</h2>
                    <p className="text-theme-dark/70 dark:text-theme-light/70 mt-4">Interested in business consulting, AI strategy, speaking engagements, or executive advisory?</p>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-theme-light dark:bg-theme-dark rounded-full flex items-center justify-center text-theme-accent shrink-0 border border-theme-accent/30">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                       </div>
                       <div>
                          <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                          <p className="text-theme-dark dark:text-theme-light font-medium">{PROFILE.socials.phone}</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-theme-light dark:bg-theme-dark rounded-full flex items-center justify-center text-theme-accent shrink-0 border border-theme-accent/30">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                       </div>
                       <div>
                          <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                          <a href={`mailto:${PROFILE.socials.email}`} className="text-theme-dark dark:text-theme-light font-medium hover:text-theme-accent">{PROFILE.socials.email}</a>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-theme-light dark:bg-theme-dark rounded-full flex items-center justify-center text-theme-accent shrink-0 border border-theme-accent/30">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                       </div>
                       <div>
                          <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase tracking-wider mb-1">LinkedIn Profile</p>
                          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-theme-dark dark:text-theme-light font-medium hover:text-theme-accent">Connect on LinkedIn</a>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-theme-light dark:bg-theme-dark rounded-full flex items-center justify-center text-theme-accent shrink-0 border border-theme-accent/30">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                       </div>
                       <div>
                          <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFILE.socials.location)}`} target="_blank" rel="noreferrer" className="text-theme-dark dark:text-theme-light font-medium hover:text-theme-accent">{PROFILE.socials.location}</a>
                       </div>
                    </div>
                 </div>

                 <div className="bg-theme-accent/10 p-6 rounded-xl border border-theme-accent/20 mt-8">
                    <h4 className="text-theme-dark dark:text-theme-light font-bold mb-2">Open for Mandates</h4>
                    <p className="text-theme-dark/70 dark:text-theme-light/70 text-sm">Available for CEO/COO/Chief AI positions from 2026. Let's discuss how I can contribute to your organization's growth.</p>
                 </div>
              </div>

              {/* Form */}
              <div className="bg-theme-light dark:bg-theme-dark border border-theme-accent/15 p-8 rounded-2xl shadow-xl">
                 <h3 className="text-xl font-bold text-theme-dark dark:text-theme-light mb-6">Send a Message</h3>
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                       <label className="block text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase mb-2">Name *</label>
                       <input type="text" placeholder="Your name" className="w-full bg-transparent border border-theme-accent/30 rounded-lg px-4 py-3 text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors" />
                    </div>
                    <div>
                       <label className="block text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase mb-2">Email *</label>
                       <input type="email" placeholder="your@email.com" className="w-full bg-transparent border border-theme-accent/30 rounded-lg px-4 py-3 text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors" />
                    </div>
                    <div>
                       <label className="block text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase mb-2">Organization</label>
                       <input type="text" placeholder="Company or institution" className="w-full bg-transparent border border-theme-accent/30 rounded-lg px-4 py-3 text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors" />
                    </div>
                    <div>
                       <label className="block text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase mb-2">Area of Interest</label>
                       <select className="w-full bg-transparent border border-theme-accent/30 rounded-lg px-4 py-3 text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors">
                          <option>Select an option</option>
                          <option>Executive Advisory</option>
                          <option>AI Strategy Consulting</option>
                          <option>Speaking Engagement</option>
                          <option>Other</option>
                       </select>
                    </div>
                    <div>
                       <label className="block text-theme-dark/50 dark:text-theme-light/50 text-xs font-bold uppercase mb-2">Message *</label>
                       <textarea rows={4} placeholder="Tell me about your project or inquiry..." className="w-full bg-transparent border border-theme-accent/30 rounded-lg px-4 py-3 text-theme-dark dark:text-theme-light focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors"></textarea>
                    </div>
                    <button className="w-full bg-theme-accent hover:bg-theme-accent/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-theme-accent/20 transition-all hover:-translate-y-1">
                       Send Message
                    </button>
                 </form>
              </div>

           </div>
           
           <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-16 mt-16 border-t border-theme-accent/15 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                 <h2 className="text-2xl font-serif font-bold text-theme-dark dark:text-theme-light tracking-tight">DM</h2>
                 <p className="text-theme-accent text-sm font-bold">Davor Mulalić</p>
                 <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs mt-1">C-Level AI Leader</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 text-sm font-medium text-theme-dark/70 dark:text-theme-light/70 items-center">
                 <div className="flex gap-6">
                    <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="hover:text-theme-accent transition-colors">About</a>
                    <a href="#experience" onClick={(e) => smoothScroll(e, 'experience')} className="hover:text-theme-accent transition-colors">Experience</a>
                    <a href="#books" onClick={(e) => smoothScroll(e, 'books')} className="hover:text-theme-accent transition-colors">Books</a>
                    <a href="#portfolio" onClick={(e) => smoothScroll(e, 'portfolio')} className="hover:text-theme-accent transition-colors">Portfolio</a>
                    <a href="#volunteering" onClick={(e) => smoothScroll(e, 'volunteering')} className="hover:text-theme-accent transition-colors">Volunteering</a>
                    <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="hover:text-theme-accent transition-colors">Contact</a>
                 </div>
                 <span className="hidden md:inline w-px h-4 bg-theme-accent/30"></span>
                 <div className="flex gap-6">
                    <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-theme-accent transition-colors">Connect</a>
                    <button 
                      onClick={() => setIsCVModalOpen(true)}
                      className="hover:text-theme-accent transition-colors"
                    >
                      Download CV
                    </button>
                 </div>
              </div>

              <div className="text-theme-dark/50 dark:text-theme-light/50 text-xs">
                 © {new Date().getFullYear()} Davor Mulalić. All rights reserved.
              </div>
           </div>
        </section>
      </main>

      <ChatAssistant />
      <CVRequestModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
};

export default App;
