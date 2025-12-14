import React from 'react';
import { VOLUNTEERING } from '../constants';

const Volunteering: React.FC = () => {
  return (
    <section id="volunteering" className="py-24 bg-theme-light/50 dark:bg-theme-dark/50 relative">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="mb-12">
           <div className="flex items-center gap-4 mb-4">
             <div className="h-px bg-theme-accent w-12"></div>
             <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">Giving Back</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-theme-dark dark:text-theme-light">Volunteering & Leadership</h2>
           <p className="text-theme-dark/70 dark:text-theme-light/70 mt-4 max-w-2xl">
             Beyond the boardroom, I believe that empathy, meaningful relationships, and giving back to the community are essential for lasting professional and personal success.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {VOLUNTEERING.map((item) => {
            const isActive = item.period.toLowerCase().includes('present');
            return (
              <div key={item.id} className="bg-theme-light dark:bg-theme-dark border border-theme-accent/15 p-8 rounded-2xl hover:bg-theme-light/80 dark:hover:bg-theme-dark/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-theme-accent/5 group">
                <div className="w-12 h-12 bg-theme-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-accent group-hover:text-white transition-colors text-theme-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                </div>
                {isActive && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-theme-accent"></span>
                    <span className="text-theme-accent text-xs font-bold uppercase tracking-wider">Active</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-theme-dark dark:text-theme-light mb-2">{item.role}</h3>
                <p className="text-theme-accent text-sm font-medium mb-4">{item.organization} • {item.period}</p>
                <p className="text-theme-dark/70 dark:text-theme-light/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interests & Certifications */}
        <div className="bg-theme-light/80 dark:bg-theme-dark/80 border border-theme-accent/15 rounded-2xl p-8">
           <h3 className="text-xl font-bold text-theme-dark dark:text-theme-light mb-6 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
             Interests & Certifications
           </h3>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-theme-light dark:bg-theme-dark rounded-xl border border-theme-accent/15 hover:border-theme-accent/40 transition-colors">
                 <div className="mt-1 text-theme-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path></svg>
                 </div>
                 <div>
                    <h4 className="text-theme-dark dark:text-theme-light font-bold text-sm">Licensed Diving Instructor</h4>
                    <p className="text-theme-dark/70 dark:text-theme-light/70 text-sm">CMAS 1* and SSI Dive Master Instructor</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-theme-light dark:bg-theme-dark rounded-xl border border-theme-accent/15 hover:border-theme-accent/40 transition-colors">
                 <div className="mt-1 text-theme-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>
                 </div>
                 <div>
                    <h4 className="text-theme-dark dark:text-theme-light font-bold text-sm">Business Consulting</h4>
                    <p className="text-theme-dark/70 dark:text-theme-light/70 text-sm">VISASQ / COLEMAN</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;