import React, { useEffect, useState, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content, skills } from '../data/content';

const Skills: React.FC = () => {
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

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentContent.skills.title}
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            {currentContent.skills.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-4 flex justify-center group-hover:text-blue-300 transition-colors">
                {getIcon(skill.icon)}
              </div>
              <h3 className="text-white font-semibold text-lg">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;