import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['fa']) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fa'); // Default to Farsi

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' || language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: keyof typeof translations['fa']) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const dir = language === 'fa' || language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
