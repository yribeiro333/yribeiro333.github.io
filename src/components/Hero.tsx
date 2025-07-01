import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-300 text-lg mb-4 font-light">
            {currentContent.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {currentContent.hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 font-semibold">
            {currentContent.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {currentContent.hero.subtitle}
          </p>
          <button
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {currentContent.hero.cta}
          </button>
        </div>
        
        <div className={`mt-20 transition-all duration-1500 delay-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={scrollToProjects}
            className="text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;