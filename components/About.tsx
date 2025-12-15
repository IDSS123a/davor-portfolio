
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
          observer.disconnect(); // Animate only once
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
    <section id="about" className="py-24 bg-theme-light dark:bg-theme-dark" ref={sectionRef}>
      <div className="w-full px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">About Me</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-dark dark:text-theme-light mt-2 mb-4">Executive Leader & AI Strategist</h2>
          <p className="text-xl text-theme-dark/70 dark:text-theme-light/70 font-light max-w-4xl">Driving sustainable growth through strategic vision and innovative leadership</p>
          <div className={`h-1 w-20 bg-theme-accent mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bio & Workbook */}
          <div className="space-y-8">
            <div className={`text-lg text-theme-dark/70 dark:text-theme-light/70 space-y-6 leading-relaxed transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p>
                Executive Leader and expert in AI Strategy and Digital Transformation with over 25 years of experience driving growth, innovation, and operational excellence. In my roles as CEO and Managing Director, I have a proven track record of delivering strong financial results, including a €16M (33%) increase in operating income and a 90% boost in revenue.
              </p>
              <p>
                Leveraging my deep understanding of business needs and emerging technologies, I bridge traditional leadership with AI-powered solutions, creating strategic roadmaps, implementing no-code AI tools, and enabling data-driven decision-making that accelerates sustainable growth.
              </p>
              <p>
                A skilled negotiator and relationship builder, I have secured contracts exceeding €11M and cultivated long-term partnerships with key clients and suppliers. My initiatives have driven a 50% increase in employee engagement, demonstrating my ability to combine results-driven leadership with people-centered management.
              </p>
              <p>
                Beyond the boardroom, I am a devoted husband, proud father, and active philanthropist. Guided by personal values, I believe that empathy, meaningful relationships, and giving back to the community are essential for lasting professional and personal success. Today, I focus on helping organizations navigate the era of AI transformation—turning strategic vision into tangible business outcomes while fostering human-centered, future-ready leadership.
              </p>
            </div>

            {/* Workbook Card */}
            <div className={`mt-8 p-8 bg-theme-accent/5 border border-theme-accent/20 rounded-2xl relative overflow-hidden group shadow-lg transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div className="absolute top-0 right-0 w-40 h-40 bg-theme-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
               <h3 className="text-xl font-bold text-theme-dark dark:text-theme-light mb-1 flex items-center gap-2">
                 <span className="text-2xl">📘</span> Upcoming Workbook
               </h3>
               <p className="text-theme-accent font-serif text-lg mb-4">
                 AI Solved Business Problems - A Manager’s Workbook
               </p>
               <p className="text-theme-dark/70 dark:text-theme-light/70 text-base mb-6 leading-relaxed">
                 I am dedicating this book to providing 50 real-world business challenges from 10 industries, each solved with a concrete, high-ROI AI prompt solution.
               </p>
               
               <div className="bg-theme-light/50 dark:bg-theme-dark/50 p-5 rounded-xl mb-6 border border-theme-accent/15 backdrop-blur-sm">
                 <p className="text-xs text-theme-accent uppercase font-bold tracking-wider mb-2">The Offer</p>
                 <p className="text-theme-dark/80 dark:text-theme-light/80 text-sm italic">
                   "If your problem is selected, I will design a complete, <strong>Five-Pillar Prompt Solution</strong>, demonstrate its ROI potential, and feature it in the book. You will be credited as a Co-Author (anonymously if preferred)."
                 </p>
               </div>

               <a 
                 href={BOOK_SUBMISSION_URL}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-full px-6 py-4 bg-theme-accent hover:bg-theme-accent/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-theme-accent/20 group-hover:-translate-y-0.5"
               >
                 Submit Your Challenge
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </a>
            </div>
          </div>

          {/* Right Column: Images, Stats, Details */}
          <div className="space-y-12">
             
             {/* Images with Parallax/Zoom - STAGGERED ENTRANCE */}
             <div className="grid grid-cols-2 gap-4">
                 {/* Image 1 */}
                 <div className={`space-y-3 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-56 md:h-64 border border-theme-accent/15">
                      <div className="absolute inset-0 bg-theme-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={PROFILE.images.about1} 
                        alt="Award Ceremony" 
                        className={`w-full h-full object-cover transition-transform duration-1000 ${isVisible ? 'scale-100' : 'scale-110'} group-hover:scale-110`} 
                      />
                    </div>
                    <p className="text-xs text-theme-dark/50 dark:text-theme-light/50 text-center font-bold uppercase tracking-widest">Business Excellence Award</p>
                 </div>

                 {/* Image 2 */}
                 <div className={`space-y-3 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-56 md:h-64 border border-theme-accent/15">
                      <div className="absolute inset-0 bg-theme-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={PROFILE.images.about2} 
                        alt="Keynote Speaker" 
                        className={`w-full h-full object-cover transition-transform duration-1000 ${isVisible ? 'scale-100' : 'scale-110'} group-hover:scale-110`} 
                      />
                    </div>
                    <p className="text-xs text-theme-dark/50 dark:text-theme-light/50 text-center font-bold uppercase tracking-widest">Keynote Speaker</p>
                 </div>
             </div>

             {/* Award Badge - FADE IN */}
             <div className={`bg-theme-light/50 dark:bg-theme-dark/50 border border-theme-accent/20 p-6 rounded-xl flex items-center gap-4 backdrop-blur-sm shadow-xl relative overflow-hidden transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <div className="absolute top-0 right-0 w-20 h-20 bg-theme-accent/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
               <div className="w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center text-theme-accent shrink-0 border border-theme-accent/20">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
               </div>
               <div>
                 <p className="text-theme-accent text-xs font-bold uppercase tracking-wider mb-1">Award Recognition</p>
                 <h4 className="text-theme-dark dark:text-theme-light font-bold leading-tight">Sustainable Development Business Leaders Award 2025</h4>
               </div>
             </div>

             {/* Stats Grid - SEQUENTIAL ANIMATION */}
             <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "25+", label: "Years Experience" },
                  { val: "€16M", label: "Operating Income" },
                  { val: "90%", label: "Revenue Boost" },
                  { val: "1000+", label: "Professionals Led" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 bg-theme-light dark:bg-theme-dark rounded-xl border border-theme-accent/15 text-center hover:border-theme-accent/40 transition-all duration-700 ease-out transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${800 + (idx * 150)}ms` }}
                  >
                    <p className="text-3xl font-bold text-theme-dark dark:text-theme-light mb-1">{stat.val}</p>
                    <p className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 uppercase tracking-wider font-bold">{stat.label}</p>
                  </div>
                ))}
             </div>

          </div>
        </div>

        {/* Details Grid (Full Width below) */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-theme-accent/15 pt-16 transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
           
           {/* Education */}
           <div className="space-y-6">
              <h4 className="text-theme-dark dark:text-theme-light font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent rounded-full"></span> Education
              </h4>
              <ul className="space-y-6">
                <li className="relative pl-6 border-l border-theme-accent/20">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-theme-light dark:bg-theme-dark border-2 border-theme-accent rounded-full"></div>
                  <strong className="block text-theme-dark dark:text-theme-light text-base mb-1">Master of International Business</strong>
                  <span className="text-theme-dark/70 dark:text-theme-light/70 text-sm">Cambridge International Business Study</span>
                </li>
                <li className="relative pl-6 border-l border-theme-accent/20">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-theme-light dark:bg-theme-dark border-2 border-theme-accent rounded-full"></div>
                  <strong className="block text-theme-dark dark:text-theme-light text-base mb-1">Doctor of Veterinary Medicine</strong>
                  <span className="text-theme-dark/70 dark:text-theme-light/70 text-sm">Veterinary Faculty</span>
                </li>
              </ul>
           </div>

           {/* Languages */}
           <div className="space-y-6">
              <h4 className="text-theme-dark dark:text-theme-light font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent rounded-full"></span> Languages
              </h4>
              <ul className="space-y-3 text-sm">
                 <li className="flex justify-between items-center border-b border-theme-accent/15 pb-2">
                    <span className="text-theme-dark/70 dark:text-theme-light/70">Bosnian/Croatian/Serbian</span>
                    <span className="text-theme-accent font-bold bg-theme-accent/10 px-2 py-0.5 rounded">C2</span>
                 </li>
                 <li className="flex justify-between items-center border-b border-theme-accent/15 pb-2">
                    <span className="text-theme-dark/70 dark:text-theme-light/70">English</span>
                    <span className="text-theme-accent font-bold bg-theme-accent/10 px-2 py-0.5 rounded">C1</span>
                 </li>
                 <li className="flex justify-between items-center border-b border-theme-accent/15 pb-2">
                    <span className="text-theme-dark/70 dark:text-theme-light/70">German</span>
                    <span className="text-theme-dark/50 dark:text-theme-light/50 font-bold bg-theme-light dark:bg-theme-dark border border-theme-accent/20 px-2 py-0.5 rounded">A2</span>
                 </li>
                 <li className="flex justify-between items-center border-b border-theme-accent/15 pb-2">
                    <span className="text-theme-dark/70 dark:text-theme-light/70">Latin</span>
                    <span className="text-theme-dark/50 dark:text-theme-light/50 font-bold bg-theme-light dark:bg-theme-dark border border-theme-accent/20 px-2 py-0.5 rounded">B1</span>
                 </li>
                 <li className="flex justify-between items-center border-b border-theme-accent/15 pb-2">
                    <span className="text-theme-dark/70 dark:text-theme-light/70">French</span>
                    <span className="text-theme-dark/50 dark:text-theme-light/50 font-bold bg-theme-light dark:bg-theme-dark border border-theme-accent/20 px-2 py-0.5 rounded">A1</span>
                 </li>
              </ul>
           </div>

           {/* Tech Expertise */}
           <div className="space-y-6">
              <h4 className="text-theme-dark dark:text-theme-light font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent rounded-full"></span> Technical Expertise
              </h4>
              <ul className="space-y-3">
                 {[
                   "AI Strategy & Business Integration",
                   "Prompt Engineering & Rapid Prototyping",
                   "ERP Systems Implementation & Optimization",
                   "MS Office Expert (Excel Course Creator)",
                   "ISO 9001:2015, HACCP, FSC, PEFC Standards"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start text-theme-dark/70 dark:text-theme-light/70 text-sm">
                     <svg className="w-4 h-4 text-theme-accent mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     {item}
                   </li>
                 ))}
              </ul>
           </div>

           {/* Competencies */}
           <div className="space-y-6">
              <h4 className="text-theme-dark dark:text-theme-light font-bold text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-theme-accent rounded-full"></span> Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {competencies.map(skill => (
                  <span key={skill} className="text-xs font-medium bg-theme-light dark:bg-theme-dark text-theme-dark/70 dark:text-theme-light/70 px-2.5 py-1.5 rounded-md border border-theme-accent/20 hover:border-theme-accent/50 hover:text-theme-accent transition-colors cursor-default">
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
