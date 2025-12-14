import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-theme-light dark:bg-theme-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-theme-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-theme-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 lg:order-1 space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 border border-theme-accent/30 rounded-full bg-theme-accent/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-accent"></span>
            </span>
            <span className="text-theme-accent text-xs md:text-sm font-bold tracking-wide uppercase">
              Open to CEO/COO/Chief AI Mandates from 2026
            </span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-theme-dark dark:text-theme-light leading-none tracking-tight">
              Davor <br/>
              <span className="text-theme-accent">
                Mulalić
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-theme-dark/70 dark:text-theme-light/70 font-medium flex items-center gap-3">
              <span className="h-px w-8 bg-theme-accent inline-block"></span>
              C-Level AI Leader • CEO & Managing Director
            </h2>
          </div>
          
          <p className="text-lg text-theme-dark/70 dark:text-theme-light/70 max-w-lg leading-relaxed border-l-2 border-theme-accent/20 pl-6">
            Proven track record of <span className="text-theme-dark dark:text-theme-light font-bold">€16M (33%)</span> operating income increase and <span className="text-theme-dark dark:text-theme-light font-bold">90%</span> revenue boost. Expert in AI strategy, digital transformation, and building high-performing teams that deliver exceptional results.
          </p>

          {/* Industry Tags */}
          <div className="flex flex-wrap gap-2 max-w-2xl">
            {industries.map((tag, idx) => (
               <span key={idx} className="px-3 py-1 bg-theme-light/80 dark:bg-theme-dark/80 border border-theme-accent/20 text-theme-dark/70 dark:text-theme-light/70 text-xs font-medium rounded-md hover:border-theme-accent/50 hover:text-theme-accent transition-colors cursor-default">
                 {tag}
               </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="#experience"
              onClick={scrollToExperience}
              className="inline-flex items-center px-8 py-4 bg-theme-accent text-white font-bold rounded-sm hover:bg-theme-accent/90 transition-all shadow-lg shadow-theme-accent/20 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              View Experience
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <button 
              className="inline-flex items-center px-8 py-4 bg-transparent border border-theme-accent/30 text-theme-dark/70 dark:text-theme-light/70 font-bold rounded-sm hover:border-theme-accent hover:text-theme-accent transition-all hover:bg-theme-accent/5"
              onClick={() => window.open(PROFILE.socials.linkedin, '_blank')}
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>

          {/* Connect Section */}
           <div className="flex items-center gap-4 pt-2">
             <span className="text-theme-dark/50 dark:text-theme-light/50 font-medium text-sm uppercase tracking-widest">Connect:</span>
             <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-theme-dark/70 dark:text-theme-light/70 hover:text-theme-accent transition-colors p-2 bg-theme-light dark:bg-theme-dark rounded-full border border-theme-accent/20 hover:border-theme-accent/50" aria-label="LinkedIn">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             <a href={`mailto:${PROFILE.socials.email}`} className="text-theme-dark/70 dark:text-theme-light/70 hover:text-theme-accent transition-colors p-2 bg-theme-light dark:bg-theme-dark rounded-full border border-theme-accent/20 hover:border-theme-accent/50" aria-label="Email">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
             </a>
           </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
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
            <div className="absolute bottom-12 -left-4 md:-left-8 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md p-4 rounded-xl border border-theme-accent/20 min-w-[180px] hidden md:block animate-fade-in-up shadow-xl z-20">
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                 <p className="text-xs text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wide">Income Growth</p>
               </div>
               <p className="text-2xl font-bold text-theme-dark dark:text-theme-light">€16M <span className="text-theme-accent text-sm">(+33%)</span></p>
            </div>

            {/* Floating Badge 2 - Leadership */}
            <div className="absolute top-12 -right-4 md:-right-6 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md p-4 rounded-xl border border-theme-accent/20 min-w-[150px] hidden md:block animate-fade-in-up shadow-xl z-20" style={{ animationDelay: '0.2s' }}>
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                 <p className="text-xs text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wide">Experience</p>
               </div>
               <p className="text-2xl font-bold text-theme-dark dark:text-theme-light">25+ Years</p>
            </div>

            {/* Floating Badge 3 - Profit */}
            <div className="absolute bottom-24 -right-8 md:-right-12 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md p-4 rounded-xl border border-theme-accent/20 min-w-[160px] hidden md:block animate-fade-in-up shadow-xl z-20" style={{ animationDelay: '0.4s' }}>
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                 <p className="text-xs text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wide">Net Profit</p>
               </div>
               <p className="text-2xl font-bold text-theme-dark dark:text-theme-light">673% Inc.</p>
            </div>
            
             {/* Floating Badge 4 - Contracts (Small pill) */}
             <div className="absolute top-8 -left-2 bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md px-4 py-2 rounded-full border border-theme-accent/20 hidden md:flex items-center gap-2 animate-fade-in-up shadow-xl z-20" style={{ animationDelay: '0.6s' }}>
                 <span className="font-bold text-theme-dark dark:text-theme-light">€11M+</span>
                 <span className="text-xs text-theme-dark/50 dark:text-theme-light/50">Contracts Secured</span>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;