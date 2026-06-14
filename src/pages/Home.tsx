import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe2, ShieldCheck, TrendingUp, Package, Building2, Users, CheckCircle2, Factory } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Home() {
  const { t, dir, language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        {/* Abstract standard background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-200 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t('hero.badge')}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                {t('hero.cta.primary')}
                <ArrowRight className={cn("w-5 h-5", dir === 'rtl' ? "rotate-180" : "")} />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                {t('hero.cta.secondary')}
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section / Logo Bar */}
      <section className="bg-slate-900 border-t border-slate-800 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800 rtl:divide-x-reverse text-center">
            <div className="px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">25+</p>
              <p className="text-sm font-medium text-slate-400">{t('stats.experience')}</p>
            </div>
            <div className="px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">50+</p>
              <p className="text-sm font-medium text-slate-400">کشورهای مقصد / Countries</p>
            </div>
            <div className="px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-sm font-medium text-slate-400">{t('stats.globalClients')}</p>
            </div>
            <div className="px-4">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">10k+</p>
              <p className="text-sm font-medium text-slate-400">{t('stats.successfulProjects')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop" 
                  alt="Corporate Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={cn(
                "absolute -bottom-6 bg-slate-950 text-white p-6 md:p-8 rounded-xl shadow-xl max-w-xs",
                dir === 'rtl' ? "-left-6" : "-right-6"
              )}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-lg leading-tight uppercase tracking-wide">Global<br/>Reach</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Connecting markets across the Middle East, Europe, and Asia.
                </p>
              </div>
            </div>

            <div className="lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8">
              <h2 className="text-blue-600 font-semibold tracking-wide mb-3 uppercase text-sm">{t('about.title')}</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t('about.heading')}
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              
              <ul className="space-y-4 mb-10">
                {[t('about.features.1'), t('about.features.2'), t('about.features.3')].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1 font-semibold text-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
                style={{ direction: dir }}
              >
                {language === 'fa' || language === 'ar' ? 'بیشتر بخوانید' : 'Read more about us'}
                <ArrowRight className={cn("w-4 h-4", dir === 'rtl' ? "rotate-180" : "")} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide mb-3 uppercase text-sm">{t('services.title')}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t('services.heading')}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe2, title: t('services.1.title'), desc: t('services.1.desc') },
              { icon: Factory, title: t('services.2.title'), desc: t('services.2.desc') },
              { icon: TrendingUp, title: t('services.3.title'), desc: t('services.3.desc') },
              { icon: Package, title: t('services.4.title'), desc: t('services.4.desc') }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.heading')}
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('cta.desc')}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-950 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-xl"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
