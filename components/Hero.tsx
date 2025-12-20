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
    <section id="home" className="relative flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-theme-light dark:bg-theme-dark min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-theme-accent/5 dark:bg-theme-accent-light/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-theme-accent/5 dark:bg-theme-accent-light/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* COLUMN 1: TEXT CONTENT */}
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 border border-theme-accent/20 dark:border-theme-accent-light/20 rounded-full bg-theme-accent/5 dark:bg-theme-accent-light/5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent dark:bg-theme-accent-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-theme-accent dark:bg-theme-accent-light"></span>
            </span>
            <span className="text-theme-accent dark:text-theme-accent-light text-xs md:text-sm font-bold tracking-wide uppercase">
              Open to CEO/COO/Chief AI Mandates from 2026
            </span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-gray-900 dark:text-white leading-none tracking-tight">
              Davor <br/>
              <span className="text-theme-accent dark:text-theme-accent-light">
                Mulalić
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 font-semibold flex items-center gap-2 leading-tight">
              C-Level AI Leader • CEO & Managing Director
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-theme-accent/30 dark:border-theme-accent-light/30 pl-6 max-w-xl">
            Expert in AI strategy, digital transformation, and building high-performing teams. I bridge the gap between traditional leadership and AI innovation to create sustainable growth.
          </p>

          {/* Industry Tags */}
          <div className="flex flex-wrap gap-2">
            {industries.map((tag, idx) => (
               <span key={idx} className="px-3 py-1.5 bg-white dark:bg-theme-surface-dark border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm font-bold rounded-md hover:border-theme-accent dark:hover:border-theme-accent-light hover:text-theme-accent dark:hover:text-theme-accent-light transition-all cursor-default shadow-sm">
                 {tag}
               </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="#experience"
              onClick={scrollToExperience}
              className="inline-flex items-center px-8 py-4 bg-theme-accent dark:bg-theme-accent dark:hover:bg-theme-accent-light text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-theme-accent/40 transition-all duration-300 hover:-translate-y-1 group cursor-pointer text-base"
            >
              View Experience
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <button 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-theme-accent dark:border-theme-accent-light text-theme-accent dark:text-theme-accent-light font-bold rounded-xl hover:bg-theme-accent dark:hover:bg-theme-accent-light hover:text-white transition-all duration-300 text-base"
              onClick={() => setIsModalOpen(true)}
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>

          {/* Connect Section */}
           <div className="flex items-center gap-4 pt-2">
             <span className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest">Connect:</span>
             <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-theme-accent dark:hover:text-theme-accent-light transition-colors p-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700" aria-label="LinkedIn">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             <a href={`mailto:${PROFILE.socials.email}`} className="text-gray-700 dark:text-gray-300 hover:text-theme-accent dark:hover:text-theme-accent-light transition-colors p-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700" aria-label="Email">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
             </a>
           </div>
        </div>

        {/* COLUMN 2: IMAGE */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
            <div className="absolute inset-2 border border-theme-accent/30 dark:border-theme-accent-light/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -inset-2 border-2 border-theme-accent/20 dark:border-theme-accent-light/20 rounded-full"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900 shadow-2xl z-10 border-4 border-white dark:border-gray-800">
                <picture>
                  <source srcSet={`${PROFILE.images.profile}?w=400 400w, ${PROFILE.images.profile}?w=800 800w`} sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 480px" />
                  <img 
                    src={PROFILE.images.profile} 
                    alt={PROFILE.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </picture>
            </div>
          </div>
        </div>

        {/* COLUMN 3: STATS */}
        <div className="lg:col-span-3 order-3 lg:order-3 grid grid-cols-2 lg:grid-cols-1 gap-5">
            {[
              { label: "Experience", val: "25+", suffix: "Years" },
              { label: "Income Growth", val: "€16M", badge: "+33%" },
              { label: "Net Profit", val: "673%", badge: "Inc." },
              { label: "Contracts Secured", val: "€11M+", suffix: "Standard", highlight: true }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-theme-surface-dark border-l-4 border-theme-accent dark:border-theme-accent-light p-5 rounded-r-xl shadow-md hover:translate-x-1 transition-transform animate-fade-in-up" style={{ animationDelay: `${0.1 + (idx * 0.1)}s` }}>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl lg:text-4xl font-serif font-bold ${stat.highlight ? 'text-theme-accent dark:text-theme-accent-light' : 'text-gray-900 dark:text-white'}`}>{stat.val}</span>
                  {stat.suffix && <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">{stat.suffix}</span>}
                  {stat.badge && <span className="text-xs font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded">{stat.badge}</span>}
                </div>
              </div>
            ))}
        </div>

      </div>

      <CVRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;