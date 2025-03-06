'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import Link from 'next/link';
import { useState } from 'react';
import ContactPopup from '@/components/ContactPopup';
import Image from 'next/image';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function Contact() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <div className="bg-[#f0f0f5] min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#050806]">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#00c16a]/20 to-transparent" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[1400px] mx-auto px-4 md:px-6 pt-32 pb-16 relative"
        >
          <div className="max-w-3xl">
            <h1 className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6`}>
              Sorularınız mı var?
              <br />
              Cevaplarımız sizi bekliyor!
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light">
              Dijital dönüşüm yolculuğunuzda size yardımcı olmak için buradayız.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Hizmetler Section */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div 
              className="p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-[#e3f5eb] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#00c16a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Web & Mobil Geliştirme</h3>
              <p className="text-gray-600 mb-8 font-light">
                Modern web siteleri, mobil uygulamalar ve özel yazılım çözümleri geliştiriyoruz.
              </p>
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="mt-auto inline-flex items-center justify-center px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-black"
              >
                Detaylı Bilgi Al
              </button>
            </div>

            <div 
              className="p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-[#e3f5eb] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#00c16a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">E-Ticaret Çözümleri</h3>
              <p className="text-gray-600 mb-8 font-light">
                Özel e-ticaret platformları, entegrasyonlar ve dijital satış çözümleri sunuyoruz.
              </p>
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="mt-auto inline-flex items-center justify-center px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-black"
              >
                Detaylı Bilgi Al
              </button>
            </div>

            <div 
              className="p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-[#e3f5eb] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#00c16a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Dijital Pazarlama</h3>
              <p className="text-gray-600 mb-8 font-light">
                Meta & Google Ads yönetimi, sosyal medya stratejileri ve dijital reklam çözümleri.
              </p>
              <button 
                onClick={() => setIsContactPopupOpen(true)}
                className="mt-auto inline-flex items-center justify-center px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors text-black"
              >
                Detaylı Bilgi Al
              </button>
            </div>
          </div>
        </section>

        {/* Ekip Katılım Bölümü */}
        <section className="py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                Ekibimize Katılın
              </h2>
              <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-light mb-8`}>
                Dijital dönüşüm yolculuğunda bizimle birlikte çalışmak ister misiniz? Yetenekli ve tutkulu ekip arkadaşları arıyoruz.
              </p>
              <Link 
                href="/careers" 
                className="text-[#00c16a] hover:text-[#00a85d] transition-colors text-lg font-light"
              >
                Kariyer sayfamıza göz atın
              </Link>
            </div>
            <div className="h-[300px] md:h-[400px]">
              <img 
                src="/images/career1.webp" 
                alt="Ekip Çalışması" 
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="py-16 md:py-32 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#e3f5eb] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00c16a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
              <a href="mailto:info@miaso.co" className="text-[#00c16a] hover:underline">
                info@miaso.co
              </a>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#e3f5eb] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00c16a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
              <a href="tel:+905512351626" className="text-[#00c16a] hover:underline">
                0551 235 16 26
              </a>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-[#e3f5eb] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00c16a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-800">
                Fenerbahçe Mah. İğrip Sk. No:13<br />
                İç Kapı No:1, 34726<br />
                Kadıköy/İstanbul
              </p>
            </div>
          </div>
        </section>
      </div>

      <ContactPopup 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </div>
  )
} 