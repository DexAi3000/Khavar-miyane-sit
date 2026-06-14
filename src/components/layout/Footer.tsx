import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { cn } from '../../lib/utils';

export function Footer() {
  const { t, language, dir } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-slate-900 flex items-center justify-center rounded-lg font-bold text-xl">
                S
              </div>
              <span className="font-bold text-lg text-white leading-tight">
                {language === 'fa' || language === 'ar' ? (
                  <>سیمیا<br/>تجارت</>
                ) : (
                  <>Simia<br/>Trading</>
                )}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              {t('footer.links')}
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">{t('nav.industries')}</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">{t('nav.portfolio')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {language === 'fa' || language === 'ar' 
                    ? 'تهران، خیابان ولیعصر، برج تجارت، طبقه ۱۵، واحد ۱۴۰۲'
                    : 'Unit 1402, 15th Floor, Trade Tower, Vali Asr St, Tehran'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <span dir="ltr">+98 (21) 8888 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <span>info@simiatrading.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">
              خبرنامه / Newsletter
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {language === 'fa' || language === 'ar'
                ? 'برای دریافت آخرین اخبار صنایع و تجارت عضو خبرنامه شوید.'
                : 'Subscribe to our newsletter for the latest industry and trade news.'}
            </p>
            <form className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
              />
              <button 
                type="submit"
                className={cn(
                  "absolute flex items-center justify-center w-8 h-8 rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors",
                  dir === 'rtl' ? 'left-2' : 'right-2'
                )}
              >
                <ArrowRight className={cn("w-4 h-4", dir === 'rtl' ? "rotate-180" : "")} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
