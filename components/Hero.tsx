
import React, { useState } from 'react';
import { PROFILE } from '../constants';
import CVRequestModal from './CVRequestModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const industries = [
    "Micro Finance", 
    "NGO", 
    "Project Management", 
    "Holding",
    "Business Consulting", 
    "Education & EdTech", 
    "Finance & Banking", 
    "Manufacturing", 
    "Sales"
  ];

  const scrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-theme-light dark:bg-theme-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-theme-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-theme-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 items-center">
        
        <div className="order-2 lg:order-1 space-y-6 lg:pl-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-3 py-1.5 border border-theme-accent/30 rounded-full bg-theme-accent/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-accent"></span>
            </span>
            <span className="text-theme-accent text-[10px] md:text-xs font-bold tracking-wide uppercase">
              Open to CEO/COO/Chief AI Mandates from 2026
            </span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-theme-dark dark:text-theme-light leading-none tracking-tight">
              Davor <br/>
              <span className="text-theme-accent">
                Mulalić
              </span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-theme-dark/70 dark:text-theme-light/70 font-medium flex items-center gap-2">
              C-Level AI Leader • CEO & Managing Director
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-theme-dark/70 dark:text-theme-light/70 max-w-md leading-relaxed border-l-2 border-theme-accent/20 pl-4">
            Proven track record of <span className="text-theme-dark dark:text-theme-light font-bold">€16M (33%)</span> operating income increase and <span className="text-theme-dark dark:text-theme-light font-bold">90%</span> revenue boost. Expert in AI strategy, digital transformation, and building high-performing teams.
          </p>

          {/* Industry Tags */}
          <div className="flex flex-wrap gap-1.5 max-w-lg">
            {industries.map((tag, idx) => (
               <span key={idx} className="px-2 py-1 bg-theme-light/80 dark:bg-theme-dark/80 border border-theme-accent/20 text-theme-dark/70 dark:text-theme-light/70 text-[10px] font-medium rounded hover:border-theme-accent/50 hover:text-theme-accent transition-colors cursor-default">
                 {tag}
               </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <a 
              href="#experience"
              onClick={scrollToExperience}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-theme-accent to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-theme-accent/40 transition-all duration-300 hover:-translate-y-1 group cursor-pointer text-sm"
            >
              View Experience
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <button 
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-theme-accent text-theme-accent font-bold rounded-lg hover:bg-theme-accent hover:text-white transition-all duration-300 text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>

          {/* Connect Section */}
           <div className="flex items-center gap-3 pt-1">
             <span className="text-theme-dark/50 dark:text-theme-light/50 font-medium text-xs uppercase tracking-widest">Connect:</span>
             <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-theme-dark/70 dark:text-theme-light/70 hover:text-theme-accent transition-colors p-1.5 bg-theme-light dark:bg-theme-dark rounded-full border border-theme-accent/20 hover:border-theme-accent/50" aria-label="LinkedIn">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             <a href={`mailto:${PROFILE.socials.email}`} className="text-theme-dark/70 dark:text-theme-light/70 hover:text-theme-accent transition-colors p-1.5 bg-theme-light dark:bg-theme-dark rounded-full border border-theme-accent/20 hover:border-theme-accent/50" aria-label="Email">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
             </a>
           </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-center relative">
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
             {/* Decorative circle behind */}
            <div className="absolute inset-4 border border-theme-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-0 border-2 border-theme-accent/10 rounded-full"></div>
            
            {/* Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-theme-dark shadow-2xl shadow-theme-accent/30">
                <img 
                  src={PROFILE.images.profile} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Floating Badge 1 - Income */}
            <div className="absolute bottom-8 -left-2 md:-left-4 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md p-3 rounded-xl border border-theme-accent/20 min-w-[140px] hidden md:block animate-fade-in-up shadow-xl z-20 scale-90">
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                 <p className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wide">Income Growth</p>
               </div>
               <p className="text-xl font-bold text-theme-dark dark:text-theme-light">€16M <span className="text-theme-accent text-xs">(+33%)</span></p>
            </div>

            {/* Floating Badge 2 - Leadership */}
            <div className="absolute top-12 -right-2 md:-right-4 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md p-3 rounded-xl border border-theme-accent/20 min-w-[120px] hidden md:block animate-fade-in-up shadow-xl z-20 scale-90" style={{ animationDelay: '0.2s' }}>
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                 <p className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wide">Experience</p>
               </div>
               <p className="text-xl font-bold text-theme-dark dark:text-theme-light">25+ Years</p>
            </div>

            {/* Floating Badge 3 - Profit */}
            <div className="absolute bottom-20 -right-6 md:-right-8 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md p-3 rounded-xl border border-theme-accent/20 min-w-[130px] hidden md:block animate-fade-in-up shadow-xl z-20 scale-90" style={{ animationDelay: '0.4s' }}>
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                 <p className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wide">Net Profit</p>
               </div>
               <p className="text-xl font-bold text-theme-dark dark:text-theme-light">673% Inc.</p>
            </div>
            
             {/* Floating Badge 4 - Contracts (Small pill) */}
             <div className="absolute top-6 -left-0 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-theme-accent/20 hidden md:flex items-center gap-2 animate-fade-in-up shadow-xl z-20 scale-90" style={{ animationDelay: '0.6s' }}>
                 <span className="font-bold text-theme-dark dark:text-theme-light text-sm">€11M+</span>
                 <span className="text-[10px] text-theme-dark/50 dark:text-theme-light/50">Contracts Secured</span>
             </div>

          </div>
        </div>

      </div>

      {/* CV Request Modal */}
      <CVRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
