import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Language } from '../../i18n/translations';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/products', label: t('nav.products') },
    { to: '/industries', label: t('nav.industries') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'fa', label: 'فارسی' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'de', label: 'Deutsch' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50 group">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-lg font-bold text-xl group-hover:bg-blue-600 transition-colors">
              S
            </div>
            <span className={cn(
              "font-bold text-lg leading-tight",
              isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
            )}>
              {language === 'fa' || language === 'ar' ? (
                <>سیمیا<br/>تجارت</>
              ) : (
                <>Simia<br/>Trading</>
              )}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.to ? "text-blue-600" : (isScrolled ? "text-slate-600" : "text-slate-200 hover:text-white")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 rounded-md hover:bg-black/5",
                  isScrolled ? "text-slate-600" : "text-slate-200 hover:text-white"
                )}
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={cn(
                      "absolute top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden flex flex-col",
                      dir === 'rtl' ? 'left-0' : 'right-0'
                    )}
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={cn(
                          "px-4 py-2 text-sm text-left transition-colors hover:bg-gray-50 flex items-center justify-between",
                          language === l.code ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-700"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/contact"
              className={cn(
                "px-5 py-2.5 rounded-lg font-medium text-sm transition-all",
                isScrolled 
                  ? "bg-slate-900 text-white hover:bg-blue-600 shadow-md" 
                  : "bg-white text-slate-900 hover:bg-blue-50 shadow-lg"
              )}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 z-50",
              isScrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 pt-24 px-6 bg-white z-40 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl font-medium mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "pb-4 border-b border-gray-100",
                    location.pathname === link.to ? "text-blue-600" : "text-slate-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">{t('lang.switcher.title')}</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm border font-medium",
                      language === l.code 
                        ? "border-blue-600 bg-blue-50 text-blue-600" 
                        : "border-gray-200 text-slate-700"
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
