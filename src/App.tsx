import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

// Placeholder for other pages
function PlaceholderPage({ title }: { title: string }) {
  const { dir } = useLanguage();
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4">
      <div className="text-center" dir={dir}>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
        <p className="text-slate-500 max-w-lg mx-auto">
          این صفحه به عنوان نمونه (Placeholder) ساخته شده است و می‌تواند در آینده توسعه یابد.<br/>
          This is a placeholder page that can be expanded in the CMS.
        </p>
      </div>
    </div>
  );
}

function AppLayout() {
  const { dir } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col font-sans" dir={dir}>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PlaceholderPage title="About Us / درباره ما" />} />
          <Route path="/services" element={<PlaceholderPage title="Services / خدمات" />} />
          <Route path="/products" element={<PlaceholderPage title="Products / محصولات" />} />
          <Route path="/industries" element={<PlaceholderPage title="Industries / صنایع" />} />
          <Route path="/portfolio" element={<PlaceholderPage title="Projects / پروژه‌ها" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us / تماس با ما" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found / صفحه مورد نظر یافت نشد" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppLayout />
      </Router>
    </LanguageProvider>
  );
}
