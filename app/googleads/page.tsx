'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import ContactPopup from '../../components/ContactPopup';
import { useState, useRef, useEffect } from 'react';
import type { Metadata } from "next";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

function AccordionSection({ number, title, isOpen }: { number: string, title: string, isOpen: boolean }) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="border-t border-gray-700 py-4 md:py-6">
      <div 
        className="flex items-center justify-between cursor-pointer" 
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          <span className={`${redHat.className} text-base md:text-lg mr-3 md:mr-4 text-white font-light`}>{number}.</span>
          <h3 className={`${redHat.className} text-lg md:text-xl font-light text-white`}>{title}</h3>
        </div>
        <div className="text-white transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 text-gray-400">
          {number === "1" && (
            "Arama ağı, görüntülü reklam ağı ve YouTube reklamları için kapsamlı anahtar kelime analizi yapıyoruz."
          )}
          {number === "2" && (
            "Reklam metinlerinizi ve görsellerinizi hedef kitlenize uygun olarak optimize ediyoruz."
          )}
          {number === "3" && (
            "Kampanya performanslarını sürekli takip ediyor, bütçenizi en verimli şekilde yönetiyoruz."
          )}
          {number === "4" && (
            "Dönüşüm oranlarını artırmak için landing page optimizasyonları ve A/B testleri yapıyoruz."
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function GoogleAds() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className="relative">
        <section className="relative overflow-hidden min-h-screen bg-[#f0f0f5]" style={{
          background: 'radial-gradient(100% 100% at 50% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 70%), #f0f0f5'
        }}>
          <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900`}
              >
                Google Ads ile <br />
                <span className="text-[#00c16a]">Potansiyel Müşterilerinize Ulaşın</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 max-w-3xl mt-8 font-light`}
              >
                Arama ağı, görüntülü reklam ağı ve YouTube reklamları ile doğru hedef kitleye ulaşın. 
                Profesyonel Google Ads yönetimi ile satışlarınızı artırın.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 mt-8"
              >
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#00c16a] hover:bg-[#00a85c] text-white px-8 py-4 rounded-lg font-medium transition-all"
                >
                  Bizimle İletişime Geç
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full mt-16 relative rounded-lg overflow-hidden"
              >
                <div className="w-full max-w-[1000px] mx-auto relative p-8">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg max-h-[500px] object-contain"
                    style={{ background: 'transparent' }}
                  >
                    <source src="/videos/googleads.webm" type="video/webm" />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Profesyonel Google Ads Yönetimi
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Google'ın güçlü reklam ağında markanızı öne çıkarıyor, potansiyel müşterilerinize ulaşmanızı sağlıyoruz. Anahtar kelime analizi, reklam metni optimizasyonu ve bütçe yönetimi ile kampanyalarınızı yönetiyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Detaylı raporlama ve analitik araçlarımızla kampanyalarınızın performansını sürekli takip ediyor, veriye dayalı optimizasyonlarla dönüşüm oranlarınızı artırıyoruz.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img 
                  src="/images/googleads1.webp" 
                  alt="Google Ads Yönetimi" 
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050806] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-white text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8`}>
                  Google Ads'de uzman ekip
                </h2>
                <p className={`${redHat.className} text-white text-lg md:text-xl font-light mb-8 md:mb-12`}>
                  Profesyonel ekibimizle dijital reklamlarınızı yönetiyoruz
                </p>
                
                <div className="mt-8 md:mt-12">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-[#11fb96] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-md hover:bg-opacity-90 transition-all"
                  >
                    Bizimle İletişime Geçin
                  </button>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0">
                <AccordionSection 
                  number="1" 
                  title="Anahtar Kelime Analizi" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="2" 
                  title="Reklam Optimizasyonu" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="3" 
                  title="Bütçe Yönetimi" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="4" 
                  title="Dönüşüm Optimizasyonu" 
                  isOpen={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="h-[300px] md:h-[400px]">
                <img 
                  src="/images/googleads2.webp" 
                  alt="Google Ads Çözümleri" 
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Neden Google Ads?
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Google'ın geniş reklam ağı ile potansiyel müşterilerinize tam da aradıkları anda ulaşın. Arama ağı, görüntülü reklam ağı ve YouTube reklamları ile markanızı her platformda öne çıkarın.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Coğrafi hedefleme, demografik hedefleme ve ilgi alanı hedeflemesi ile doğru kitleye ulaşın. Detaylı raporlama araçlarıyla kampanyalarınızın performansını anlık takip edin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ 
          background: 'radial-gradient(100% 100% at 100% 100%, rgba(17, 251, 150, 0.1) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' 
        }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Arama Ağı Reklamları
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Potansiyel müşterileriniz arama yaptığında üst sıralarda yer alın.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Görüntülü Reklamlar
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Google'ın geniş reklam ağında görsel reklamlarınızı gösterin.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  YouTube Reklamları
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Video reklamlarınızla YouTube'da hedef kitlenize ulaşın.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Performans Takibi
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Detaylı raporlarla kampanya performansınızı analiz edin.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Bütçe Kontrolü
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Günlük ve kampanya bazlı bütçe yönetimi yapın.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Dönüşüm Optimizasyonu
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  A/B testleri ve optimizasyonlarla dönüşüm oranlarını artırın.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
} 