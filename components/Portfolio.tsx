import React, { useState, useMemo, useEffect } from 'react';
import { PORTFOLIO_APPS, PORTFOLIO_PROMPTS, PORTFOLIO_CASE_STUDIES } from '../data/portfolioData';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'apps' | 'prompts' | 'case-studies'>('apps');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  
  // Dynamic page size based on tab type
  const getPageSize = (tab: string) => tab === 'case-studies' ? 4 : 8;
  const [visibleCount, setVisibleCount] = useState(getPageSize('apps'));
  
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const data = activeTab === 'apps' ? PORTFOLIO_APPS : activeTab === 'prompts' ? PORTFOLIO_PROMPTS : PORTFOLIO_CASE_STUDIES;

  const industries = useMemo(() => ['All', ...Array.from(new Set(data.map(item => item.industry))).sort()], [data]);
  const technologies = useMemo(() => ['All', ...Array.from(new Set(data.flatMap(item => item.technologies))).sort()], [data]);

  // Reset pagination when filters change or tab changes
  useEffect(() => {
    setVisibleCount(getPageSize(activeTab));
  }, [activeTab, searchQuery, selectedIndustry, selectedTech]);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === 'All' || item.industry === selectedIndustry;
      const matchesTech = selectedTech === 'All' || item.technologies.includes(selectedTech);
      return matchesSearch && matchesIndustry && matchesTech;
    });
  }, [data, searchQuery, selectedIndustry, selectedTech]);

  const visibleData = filteredData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + getPageSize(activeTab));
  };

  const handleCardKeyDown = (e: React.KeyboardEvent, item: PortfolioItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProject(item);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-theme-light dark:bg-theme-dark relative">
      <div className="w-full px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center mb-12">
           <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">World-Class Portfolio</span>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-dark dark:text-theme-light mt-2">AI Solutions & Innovations</h2>
           <p className="text-theme-dark/70 dark:text-theme-light/70 mt-4 max-w-2xl mx-auto">
             Explore 60+ real-world AI implementations across 30 industries. From full-scale web applications to high-impact prompt engineering solutions and strategic case studies.
           </p>
        </div>

        {/* Controls Container */}
        <div className="mb-12 space-y-8">
          
          {/* Tabs */}
          <div className="flex justify-center">
            <div className="bg-theme-light dark:bg-theme-dark border border-theme-accent/20 p-1 rounded-xl inline-flex shadow-lg flex-wrap justify-center">
              <button 
                onClick={() => setActiveTab('apps')}
                className={`px-6 md:px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'apps' ? 'bg-theme-accent text-white shadow-md' : 'text-theme-dark/70 dark:text-theme-light/70 hover:bg-theme-accent/5'}`}
              >
                AI Web Apps ({PORTFOLIO_APPS.length})
              </button>
              <button 
                onClick={() => setActiveTab('prompts')}
                className={`px-6 md:px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'prompts' ? 'bg-theme-accent text-white shadow-md' : 'text-theme-dark/70 dark:text-theme-light/70 hover:bg-theme-accent/5'}`}
              >
                AI Prompt Solutions ({PORTFOLIO_PROMPTS.length})
              </button>
              <button 
                onClick={() => setActiveTab('case-studies')}
                className={`px-6 md:px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'case-studies' ? 'bg-theme-accent text-white shadow-md' : 'text-theme-dark/70 dark:text-theme-light/70 hover:bg-theme-accent/5'}`}
              >
                Case Studies ({PORTFOLIO_CASE_STUDIES.length})
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-theme-light/50 dark:bg-theme-dark/50 p-6 rounded-2xl border border-theme-accent/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search */}
              <div className="md:col-span-4 relative">
                 <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-theme-dark/40 dark:text-theme-light/40 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 <input 
                   type="text" 
                   placeholder="Search solutions..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-theme-light dark:bg-theme-dark border border-theme-accent/20 rounded-xl py-3 pl-12 pr-4 text-sm text-theme-dark dark:text-theme-light focus:outline-none focus:ring-2 focus:ring-theme-accent/50 transition-all shadow-sm" 
                 />
              </div>

              {/* Industry Filter */}
              <div className="md:col-span-3">
                 <select 
                   value={selectedIndustry}
                   onChange={(e) => setSelectedIndustry(e.target.value)}
                   className="w-full bg-theme-light dark:bg-theme-dark border border-theme-accent/20 rounded-xl px-4 py-3 text-sm text-theme-dark dark:text-theme-light focus:outline-none focus:ring-2 focus:ring-theme-accent/50 cursor-pointer shadow-sm appearance-none"
                 >
                   {industries.map(ind => <option key={ind} value={ind}>{ind === 'All' ? 'All Industries' : ind}</option>)}
                 </select>
              </div>

              {/* Tech Filter */}
              <div className="md:col-span-3">
                 <select 
                   value={selectedTech}
                   onChange={(e) => setSelectedTech(e.target.value)}
                   className="w-full bg-theme-light dark:bg-theme-dark border border-theme-accent/20 rounded-xl px-4 py-3 text-sm text-theme-dark dark:text-theme-light focus:outline-none focus:ring-2 focus:ring-theme-accent/50 cursor-pointer shadow-sm appearance-none"
                 >
                   {technologies.map(tech => <option key={tech} value={tech}>{tech === 'All' ? 'All Technologies' : tech}</option>)}
                 </select>
              </div>

              {/* Reset */}
              <div className="md:col-span-2 flex justify-end">
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedIndustry('All'); setSelectedTech('All'); }}
                  className="text-sm font-bold text-theme-accent hover:text-theme-accent/80 transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                  Reset Filters
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center text-xs text-theme-dark/50 dark:text-theme-light/50 font-medium">
               <span>Showing {filteredData.length} results</span>
               {filteredData.length === 0 && <span className="text-theme-accent">No projects match your criteria.</span>}
            </div>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {visibleData.map((item) => (
             <div 
               key={item.id} 
               onClick={() => setSelectedProject(item)}
               onKeyDown={(e) => handleCardKeyDown(e, item)}
               role="button"
               tabIndex={0}
               className="group bg-theme-light dark:bg-theme-dark border border-theme-accent/15 rounded-2xl overflow-hidden hover:border-theme-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-theme-accent/10 cursor-pointer flex flex-col h-full outline-none focus:ring-2 focus:ring-theme-accent"
             >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden bg-theme-dark/10">
                   <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/80 to-transparent z-10"></div>
                   <img 
                     src={item.imageUrl} 
                     alt={item.title} 
                     loading="lazy"
                     decoding="async"
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   />
                   
                   {/* Badges */}
                   <div className="absolute top-4 left-4 z-20">
                      <span className="bg-theme-light/90 dark:bg-theme-dark/90 backdrop-blur-md text-theme-accent text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                        {item.industry}
                      </span>
                   </div>
                   {item.complexity && (
                      <div className="absolute top-4 right-4 z-20">
                         <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm text-white ${
                           item.complexity === 'High' ? 'bg-red-500/80' : item.complexity === 'Medium' ? 'bg-yellow-500/80' : 'bg-green-500/80'
                         }`}>
                           {item.complexity}
                         </span>
                      </div>
                   )}
                   
                   <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-theme-accent transition-colors">{item.title}</h3>
                   </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                   <p className="text-theme-dark/70 dark:text-theme-light/70 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                     {item.description}
                   </p>
                   
                   {/* ROI Pill */}
                   <div className="bg-theme-accent/5 border border-theme-accent/10 p-3 rounded-lg mb-4 group-hover:bg-theme-accent/10 transition-colors">
                      <p className="text-[10px] text-theme-dark/50 dark:text-theme-light/50 uppercase font-bold tracking-wide mb-1">Impact / ROI</p>
                      <p className="text-theme-accent font-bold text-sm">{item.roi}</p>
                   </div>

                   {/* Tech Stack */}
                   <div className="flex flex-wrap gap-1.5 mt-auto">
                      {item.technologies.slice(0, 3).map(tag => (
                         <span key={tag} className="text-[10px] text-theme-dark/60 dark:text-theme-light/60 bg-theme-light dark:bg-theme-dark px-2 py-1 rounded border border-theme-accent/15">
                           {tag}
                         </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-[10px] text-theme-dark/40 dark:text-theme-light/40 px-1 py-1">+{item.technologies.length - 3}</span>
                      )}
                   </div>
                </div>
             </div>
           ))}
        </div>
        
        {/* Load More */}
        {visibleData.length < filteredData.length && (
          <div className="mt-16 text-center">
             <button 
               onClick={handleLoadMore}
               className="group relative px-8 py-3 bg-transparent border border-theme-accent/30 text-theme-dark dark:text-theme-light font-bold rounded-full hover:border-theme-accent hover:text-theme-accent transition-all overflow-hidden"
             >
                <span className="relative z-10 flex items-center gap-2">
                  Load More Projects ({filteredData.length - visibleData.length} remaining)
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
             </button>
          </div>
        )}

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-theme-dark/90 backdrop-blur-sm transition-opacity" 
             onClick={() => setSelectedProject(null)}
           ></div>

           {/* Modal Content */}
           <div className="relative w-full max-w-5xl bg-theme-light dark:bg-theme-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-fade-in-up">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-theme-dark/20 hover:bg-theme-dark/40 dark:bg-theme-light/20 dark:hover:bg-theme-light/40 rounded-full text-theme-dark dark:text-theme-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Left Side: Image & Key Stats */}
              <div className="w-full md:w-2/5 relative">
                 <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 md:h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-theme-dark/80"></div>
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 text-white space-y-6">
                    <div>
                      <span className="bg-theme-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{selectedProject.industry}</span>
                    </div>
                    <div>
                       <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Business Value</p>
                       <p className="text-lg font-medium leading-relaxed">{selectedProject.businessValue}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                       <div>
                          <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">ROI</p>
                          <p className="text-theme-accent font-bold text-xl">{selectedProject.roi}</p>
                       </div>
                       <div>
                          <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Timeline</p>
                          <p className="font-bold text-xl">{selectedProject.implementationTime}</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-theme-dark dark:text-theme-light mb-2">{selectedProject.title}</h2>
                 <p className="text-theme-dark/50 dark:text-theme-light/50 font-medium text-lg mb-8">{selectedProject.description}</p>

                 <div className="space-y-8">
                    <div>
                       <h3 className="flex items-center gap-2 text-theme-accent font-bold uppercase tracking-widest text-xs mb-3">
                         <span className="w-8 h-px bg-theme-accent"></span> The Challenge
                       </h3>
                       <p className="text-theme-dark/80 dark:text-theme-light/80 leading-relaxed text-lg">{selectedProject.problem}</p>
                    </div>

                    <div>
                       <h3 className="flex items-center gap-2 text-theme-accent font-bold uppercase tracking-widest text-xs mb-3">
                         <span className="w-8 h-px bg-theme-accent"></span> The AI Solution
                       </h3>
                       <p className="text-theme-dark/80 dark:text-theme-light/80 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
                    </div>

                    <div>
                       <h3 className="flex items-center gap-2 text-theme-accent font-bold uppercase tracking-widest text-xs mb-3">
                         <span className="w-8 h-px bg-theme-accent"></span> Technologies
                       </h3>
                       <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map(tech => (
                             <span key={tech} className="bg-theme-light dark:bg-theme-dark border border-theme-accent/20 text-theme-dark/70 dark:text-theme-light/70 px-3 py-1.5 rounded-lg text-sm font-medium">
                               {tech}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 pt-8 border-t border-theme-accent/10 flex justify-end">
                    <button 
                       onClick={() => setSelectedProject(null)}
                       className="px-6 py-2 bg-theme-dark dark:bg-theme-light text-white dark:text-theme-dark font-bold rounded-lg hover:opacity-90 transition-opacity"
                    >
                       Close Project
                    </button>
                 </div>
              </div>

           </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;