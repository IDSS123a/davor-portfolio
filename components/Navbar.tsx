import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, CONSULTATION_URL } from '../constants';
import ThemeToggle from './ThemeToggle';

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
          ? 'bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-lg py-4 shadow-xl border-b border-theme-accent/20 dark:border-theme-accent-light/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-serif font-bold tracking-tighter text-gray-900 dark:text-white z-50"
        >
          DM<span className="text-theme-accent dark:text-theme-accent-light">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-theme-accent dark:hover:text-theme-accent-light transition-colors uppercase tracking-widest cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <div className="pl-4 border-l border-gray-300 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <a 
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-bold rounded-full text-white bg-theme-accent dark:bg-theme-accent dark:hover:bg-theme-accent-light transition-all shadow-lg hover:shadow-theme-accent/40 transform hover:-translate-y-0.5"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden z-50">
          <ThemeToggle />
          <button 
            className="text-gray-900 dark:text-white focus:outline-none p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-theme-light dark:bg-theme-dark z-40 flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in-up">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-theme-accent dark:hover:text-theme-accent-light transition-colors uppercase tracking-widest cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-theme-accent dark:bg-theme-accent-light shadow-xl"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;