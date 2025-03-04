'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Red_Hat_Display } from "next/font/google";
import Link from 'next/link';
import type { CookieSettings, CookieCategories } from './types/cookies';
import { defaultCookieSettings } from './types/cookies';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>(defaultCookieSettings);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const savedSettings = localStorage.getItem('cookieSettings');
        if (!savedSettings) {
          setIsVisible(true);
        } else {
          const parsedSettings: CookieSettings = JSON.parse(savedSettings);
          setSettings(parsedSettings);
        }
      } catch (error) {
        console.error('localStorage error:', error);
        setIsVisible(true);
      }
    };

    const timer = setTimeout(checkConsent, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    try {
      const newSettings: CookieSettings = {
        consent: true,
        categories: {
          necessary: true,
          analytics: true,
          marketing: true,
          preferences: true
        },
        lastUpdated: new Date().toISOString()
      };
      
      localStorage.setItem('cookieSettings', JSON.stringify(newSettings));
      setSettings(newSettings);
      setIsVisible(false);
      applyCookieSettings(newSettings);
    } catch (error) {
      console.error('localStorage error:', error);
    }
  };

  const handleSavePreferences = () => {
    try {
      const newSettings: CookieSettings = {
        ...settings,
        consent: true,
        lastUpdated: new Date().toISOString()
      };
      
      localStorage.setItem('cookieSettings', JSON.stringify(newSettings));
      setSettings(newSettings);
      setIsVisible(false);
      applyCookieSettings(newSettings);
    } catch (error) {
      console.error('localStorage error:', error);
    }
  };

  const handleCategoryChange = (category: keyof CookieCategories) => {
    if (category === 'necessary') return; // Zorunlu çerezler değiştirilemez
    
    setSettings(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: !prev.categories[category]
      }
    }));
  };

  const applyCookieSettings = (settings: CookieSettings) => {
    // Google Analytics
    if (settings.categories.analytics) {
      // Google Analytics kodunu yükle
      console.log('Google Analytics aktif');
    }

    // Marketing cookies
    if (settings.categories.marketing) {
      // Marketing cookie'lerini yükle
      console.log('Marketing cookies aktif');
    }

    // Preference cookies
    if (settings.categories.preferences) {
      // Preference cookie'lerini yükle
      console.log('Preference cookies aktif');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
        >
          <div className="max-w-[1400px] mx-auto p-4">
            {!showDetails ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className={`${redHat.className} text-gray-700 text-sm md:text-base`}>
                  Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanmaktadır. 
                  <Link href="/cookies" className="text-[#00c16a] hover:text-[#00a85c] ml-1">
                    Çerez politikamız
                  </Link>
                  {' '}hakkında detaylı bilgi alabilirsiniz.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all"
                  >
                    Tercihleri Yönet
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-[#00c16a] hover:bg-[#00a85c] text-white px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
                  >
                    Tümünü Kabul Et
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className={`${redHat.className} text-lg font-medium text-gray-900`}>
                    Çerez Tercihleri
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">Zorunlu Çerezler</p>
                      <p className="text-sm text-gray-500">Sitenin çalışması için gerekli olan temel çerezler</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.categories.necessary}
                        disabled
                        className="h-4 w-4 rounded border-gray-300 text-[#00c16a] focus:ring-[#00c16a]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">Analitik Çerezler</p>
                      <p className="text-sm text-gray-500">Site kullanımını analiz etmemize yardımcı olan çerezler</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.categories.analytics}
                        onChange={() => handleCategoryChange('analytics')}
                        className="h-4 w-4 rounded border-gray-300 text-[#00c16a] focus:ring-[#00c16a]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">Pazarlama Çerezleri</p>
                      <p className="text-sm text-gray-500">Size özel reklamlar göstermemizi sağlayan çerezler</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.categories.marketing}
                        onChange={() => handleCategoryChange('marketing')}
                        className="h-4 w-4 rounded border-gray-300 text-[#00c16a] focus:ring-[#00c16a]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">Tercih Çerezleri</p>
                      <p className="text-sm text-gray-500">Site tercihlerinizi hatırlamamızı sağlayan çerezler</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.categories.preferences}
                        onChange={() => handleCategoryChange('preferences')}
                        className="h-4 w-4 rounded border-gray-300 text-[#00c16a] focus:ring-[#00c16a]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <button
                    onClick={handleSavePreferences}
                    className="bg-[#00c16a] hover:bg-[#00a85c] text-white px-6 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    Tercihleri Kaydet
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 