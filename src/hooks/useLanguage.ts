import { useState } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'EN' },
  { code: 'pt', name: 'PT' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'pt'>('en');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  return {
    currentLanguage,
    toggleLanguage,
    languages
  };
};