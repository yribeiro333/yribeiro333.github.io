import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  return (
    <footer id="contact" className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            {currentLanguage === 'en' ? 'Let\'s Connect' : 'Vamos nos Conectar'}
          </h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>
                {currentLanguage === 'en' ? 'Made with' : 'Feito com'}
              </span>
              <Heart size={16} className="text-red-500" />
              <span>
                {currentLanguage === 'en' ? 'by' : 'por'} {currentContent.hero.name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;