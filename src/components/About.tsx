import React, { useEffect, useState, useRef } from 'react';
import { User } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { currentLanguage } = useLanguage();
  const currentContent = content[currentLanguage];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentContent.about.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-gray-400">
                <User size={120} />
              </div>
            </div>
            <p className="text-gray-400 text-center text-sm">
              Professional photo placeholder
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              {currentContent.about.description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="mailto:contact@example.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
              >
                {currentContent.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;