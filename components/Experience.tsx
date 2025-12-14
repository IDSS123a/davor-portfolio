import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-theme-light dark:bg-theme-dark">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-dark dark:text-theme-light mt-2">25+ Years of Executive Leadership</h2>
          <p className="text-theme-dark/70 dark:text-theme-light/70 mt-4 max-w-2xl mx-auto">Driving growth, innovation, and operational excellence across education, finance, manufacturing, and corporate sectors.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-theme-accent via-theme-accent/50 to-transparent"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={job.id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center md:items-start group`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 top-8 w-5 h-5 bg-theme-accent rounded-full border-4 border-theme-light dark:border-theme-dark z-20 shadow-[0_0_15px_rgba(3,94,161,0.5)]"></div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-12' : 'md:pl-12 pl-12'}`}>
                    <div className="relative bg-theme-light/80 dark:bg-theme-dark/80 border border-theme-accent/15 rounded-xl p-6 md:p-8 hover:border-theme-accent/40 transition-all duration-300 hover:shadow-2xl hover:shadow-theme-accent/10 group-hover:-translate-y-1 backdrop-blur-sm">
                      
                      {/* Header */}
                      <div className="mb-6">
                        <span className="inline-block py-1 px-3 bg-theme-light dark:bg-theme-dark rounded text-theme-accent font-mono text-xs font-bold mb-3 border border-theme-accent/20">{job.period}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-theme-dark dark:text-theme-light mb-1">{job.role}</h3>
                        <h4 className="text-theme-dark/80 dark:text-theme-light/80 font-medium text-lg">{job.company}</h4>
                      </div>

                      {/* Stats Grid */}
                      {job.stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                          {job.stats.map((stat, idx) => (
                            <div key={idx} className="bg-theme-light dark:bg-theme-dark p-3 rounded-lg border border-theme-accent/15 text-center">
                              <p className="text-theme-dark dark:text-theme-light font-bold text-lg leading-none mb-1">{stat.value}</p>
                              <p className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wider">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Description Bullets */}
                      <ul className="space-y-3 mb-6">
                        {job.description.map((point, i) => (
                          <li key={i} className="flex items-start text-theme-dark/70 dark:text-theme-light/70 text-sm leading-relaxed">
                            <span className="mt-1.5 mr-3 w-1.5 h-1.5 bg-theme-accent rounded-full shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-theme-accent/15">
                        {job.skills.map(skill => (
                          <span key={skill} className="px-2.5 py-1 bg-theme-light/50 dark:bg-theme-dark/50 text-theme-dark/60 dark:text-theme-light/60 text-[10px] uppercase font-bold tracking-wide rounded border border-theme-accent/15">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;