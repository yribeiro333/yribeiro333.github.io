import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            {currentContent.hero.name}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {currentContent.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {currentContent.nav.projects}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {currentContent.nav.skills}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {currentContent.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;