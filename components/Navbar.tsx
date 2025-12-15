
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, CONSULTATION_URL } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler to prevent routing crashes
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-theme-light/80 dark:bg-theme-dark/80 backdrop-blur-md py-4 shadow-lg shadow-theme-accent/10 border-b border-theme-accent/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-serif font-bold tracking-tighter text-theme-dark dark:text-theme-light z-50"
        >
          DM<span className="text-theme-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-xs font-medium text-theme-dark/70 dark:text-theme-light/70 hover:text-theme-accent transition-colors uppercase tracking-widest cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <a 
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-bold rounded-full text-white bg-theme-accent hover:bg-theme-accent/90 transition-all shadow-lg shadow-theme-accent/20 transform hover:-translate-y-0.5"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-theme-dark dark:text-theme-light z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-theme-light/95 dark:bg-theme-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in-up">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-xl font-medium text-theme-dark dark:text-theme-light hover:text-theme-accent transition-colors uppercase tracking-widest cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-theme-accent hover:bg-theme-accent/90 shadow-lg shadow-theme-accent/30"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
