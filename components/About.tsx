import React, { useRef, useEffect, useState } from 'react';
import { PROFILE, BOOK_SUBMISSION_URL } from '../constants';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const competencies = [
    "Leadership & Future-Ready Management",
    "AI Strategy & Digital Transformation",
    "Workforce Development & Team Building",
    "Business Strategy & Sales Development",
    "Project Management",
    "School Management",
    "Financial Management",
    "Production Management",
    "Complex Problem Solving",
    "Negotiation & Deal Closing",
    "Client Acquisition",
    "New Market Penetration",
    "Business Acumen",
    "Strong Decision Maker",
    "Creative & Innovative Design",
    "Service-Focused Leadership"
  ];

  return (
    <section id="about" className="py-24 bg-theme-light dark:bg-theme-dark border-t border-gray-200 dark:border-gray-800" ref={sectionRef}>
      <div className="w-full px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-theme-accent dark:text-theme-accent-light font-bold tracking-widest uppercase text-sm">About Me</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mt-2 mb-4">Executive Leader & AI Strategist</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium max-w-4xl leading-relaxed">Driving sustainable growth through strategic vision and innovative leadership</p>
          <div className={`h-1 bg-theme-accent dark:bg-theme-accent-light mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bio & Workbook */}
          <div className="space-y-8">
            <div className={`text-lg text-gray-800 dark:text-gray-200 space-y-6 leading-relaxed transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p>Executive Leader and expert in AI Strategy and Digital Transformation with over 25 years of experience driving growth, innovation, and operational excellence. In my roles as CEO and Managing Director, I have a proven track record of delivering strong financial results, including a €16M (33%) increase in operating income and a 90% boost in revenue.</p>
              <p>Leveraging my deep understanding of business needs and emerging technologies, I bridge traditional leadership with AI-powered solutions, creating strategic roadmaps, implementing no-code AI tools, and enabling data-driven decision-making that accelerates sustainable growth.</p>
              <p>A skilled negotiator and relationship builder, I have secured contracts exceeding €11M and cultivated long-term partnerships with key clients and suppliers. My initiatives have driven a 50% increase in employee engagement, demonstrating my ability to combine results-driven leadership with people-centered management.</p>
              <p>Beyond the boardroom, I am a devoted husband, proud father, and active philanthropist. Guided by personal values, I believe that empathy, meaningful relationships, and giving back to the community are essential for lasting professional and personal success. Today, I focus on helping organizations navigate the era of AI transformation—turning strategic vision into tangible business outcomes while fostering human-centered, future-ready leadership.</p>
            </div>

            {/* Workbook Card */}
            <div className={`mt-8 p-8 bg-white dark:bg-theme-surface-dark border border-theme-accent/20 dark:border-theme-accent-light/20 rounded-2xl shadow-xl transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                 <span className="text-2xl">📘</span> Upcoming Workbook
               </h3>
               <p className="text-theme-accent dark:text-theme-accent-light font-serif text-lg font-bold mb-4">AI Solved Business Problems - A Manager’s Workbook</p>
               <p className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">I am dedicating this book to providing 50 real-world business challenges from 10 industries, each solved with a concrete, high-ROI AI prompt solution.</p>
               
               <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl mb-6 border border-gray-200 dark:border-gray-800">
                 <p className="text-xs text-theme-accent dark:text-theme-accent-light uppercase font-extrabold tracking-wider mb-2">The Offer</p>
                 <p className="text-gray-800 dark:text-gray-200 text-sm italic font-medium">"If your problem is selected, I will design a complete, <strong>Five-Pillar Prompt Solution</strong>, demonstrate its ROI potential, and feature it in the book."</p>
               </div>

               <a 
                 href={BOOK_SUBMISSION_URL}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-full px-6 py-4 bg-theme-accent dark:bg-theme-accent-light text-white font-bold rounded-lg transition-all shadow-lg hover:-translate-y-0.5"
               >
                 Submit Your Challenge
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </a>
            </div>
          </div>

          {/* Right Column: Visuals & Stats */}
          <div className="space-y-12">
             <div className="grid grid-cols-2 gap-4">
                 {[PROFILE.images.about1, PROFILE.images.about2].map((img, i) => (
                   <div key={i} className={`space-y-3 transition-all duration-1000 delay-${300 + (i*200)} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-56 md:h-64 border border-gray-200 dark:border-gray-800">
                        <img src={img} alt="Leadership profile" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-extrabold uppercase tracking-widest">{i === 0 ? 'Business Excellence' : 'Keynote Speaker'}</p>
                   </div>
                 ))}
             </div>

             <div className={`bg-white dark:bg-theme-surface-dark border border-theme-accent/30 dark:border-theme-accent-light/30 p-6 rounded-xl flex items-center gap-4 shadow-xl transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <div className="w-12 h-12 rounded-full bg-theme-accent/10 dark:bg-theme-accent-light/10 flex items-center justify-center text-theme-accent dark:text-theme-accent-light shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
               </div>
               <div>
                 <p className="text-theme-accent dark:text-theme-accent-light text-xs font-extrabold uppercase tracking-wider mb-1">Award Recognition</p>
                 <h4 className="text-gray-900 dark:text-white font-bold leading-tight">Sustainable Development Business Leaders Award 2025</h4>
               </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "25+", label: "Years Experience" },
                  { val: "€16M", label: "Operating Income" },
                  { val: "90%", label: "Revenue Boost" },
                  { val: "500+", label: "Professionals Led" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 bg-white dark:bg-theme-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 text-center shadow-sm hover:-translate-y-1 transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${800 + (idx * 150)}ms` }}
                  >
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.val}</p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-widest font-extrabold">{stat.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-gray-200 dark:border-gray-800 pt-16 transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
           
           <div className="space-y-6">
              <h4 className="text-gray-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent dark:bg-theme-accent-light rounded-full"></span> Education
              </h4>
              <ul className="space-y-6">
                <li className="relative pl-6 border-l-2 border-theme-accent/20 dark:border-theme-accent-light/20">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white dark:bg-theme-dark border-2 border-theme-accent dark:border-theme-accent-light rounded-full"></div>
                  <strong className="block text-gray-900 dark:text-white text-base mb-1">Master of International Business</strong>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Online Business School</span>
                </li>
                <li className="relative pl-6 border-l-2 border-theme-accent/20 dark:border-theme-accent-light/20">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white dark:bg-theme-dark border-2 border-theme-accent dark:border-theme-accent-light rounded-full"></div>
                  <strong className="block text-gray-900 dark:text-white text-base mb-1">Doctor of Veterinary Medicine</strong>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Veterinary Faculty</span>
                </li>
              </ul>
           </div>

           <div className="space-y-6">
              <h4 className="text-gray-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent dark:bg-theme-accent-light rounded-full"></span> Languages
              </h4>
              <ul className="space-y-3 text-sm">
                 {[
                   { l: "Bosnian/Croatian/Serbian", p: "C2" },
                   { l: "English", p: "C1" },
                   { l: "German", p: "A2" },
                   { l: "Latin", p: "B1" },
                   { l: "French", p: "A1" }
                 ].map((lang, i) => (
                   <li key={i} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{lang.l}</span>
                    <span className="text-theme-accent dark:text-theme-accent-light font-extrabold bg-theme-accent/5 dark:bg-theme-accent-light/5 px-2 py-0.5 rounded">{lang.p}</span>
                   </li>
                 ))}
              </ul>
           </div>

           <div className="space-y-6">
              <h4 className="text-gray-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent dark:bg-theme-accent-light rounded-full"></span> Expertise
              </h4>
              <ul className="space-y-3">
                 {[
                   "AI Strategy & Integration",
                   "Prompt Engineering",
                   "ERP Implementation",
                   "MS Office Expert",
                   "ISO & HACCP Standards"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start text-gray-800 dark:text-gray-200 text-sm font-medium">
                     <svg className="w-4 h-4 text-theme-accent dark:text-theme-accent-light mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                     {item}
                   </li>
                 ))}
              </ul>
           </div>

           <div className="space-y-6">
              <h4 className="text-gray-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent dark:bg-theme-accent-light rounded-full"></span> Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {competencies.map(skill => (
                  <span key={skill} className="text-xs font-bold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default About;