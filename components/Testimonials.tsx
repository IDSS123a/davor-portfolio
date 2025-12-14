import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-theme-light dark:bg-theme-dark border-t border-theme-accent/15">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <span className="text-theme-accent font-bold tracking-widest uppercase text-sm">References</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-theme-dark dark:text-theme-light mt-2">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-theme-light dark:bg-theme-dark border border-theme-accent/15 p-8 rounded-xl relative hover:border-theme-accent/40 transition-colors duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-theme-accent/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 7.552 14.017 7V3H19.017C20.674 3 22.017 4.343 22.017 6V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.91297 16 7.01697 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01697C5.46497 8 5.01697 7.552 5.01697 7V3H10.017C11.674 3 13.017 4.343 13.017 6V15C13.017 18.314 10.331 21 7.01697 21H5.01697Z"></path></svg>
              </div>

              <div className="flex flex-col h-full">
                <p className="text-theme-dark/70 dark:text-theme-light/70 italic mb-8 relative z-10 leading-relaxed">
                  "{item.quote}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-theme-accent/15">
                   <h4 className="text-theme-dark dark:text-theme-light font-bold">{item.author}</h4>
                   <p className="text-theme-accent text-sm mt-1">{item.role}</p>
                   <p className="text-theme-dark/50 dark:text-theme-light/50 text-xs">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;