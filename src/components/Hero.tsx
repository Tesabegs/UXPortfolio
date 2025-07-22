import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-indigo-400">Theresa</span>
              <br />
              <span className="text-white text-2xl md:text-3xl inline-block">A Product Designer based in London.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8" style={{ maxWidth: 'fit-content' }}>
              I create digital experiences that are intuitive, accessible, and beautiful. 
              Based in London, I specialize in mobile applications, e-commerce, and fintech solutions.
            </p>
            
        

            <button
              onClick={scrollToWork}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl">👩🏽‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;