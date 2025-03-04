'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import ContactPopup from '../../components/ContactPopup';
import { useState } from 'react';

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
            "Hedef kitlenizi detaylı analiz ediyor, demografik özellikler, ilgi alanları ve davranış modellerini inceliyoruz."
          )}
          {number === "2" && (
            "Markanıza özel reklam stratejileri geliştiriyor, bütçenizi en verimli şekilde kullanmanızı sağlıyoruz."
          )}
          {number === "3" && (
            "Kampanyalarınızı sürekli takip ediyor, performans verilerine göre optimize ediyoruz."
          )}
          {number === "4" && (
            "Detaylı raporlar ve analizlerle kampanya performansınızı ölçüyor, sürekli iyileştirmeler yapıyoruz."
          )}
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 md:mb-6">
        {icon}
      </div>
      <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>{title}</h3>
      <p className={`${redHat.className} text-gray-700 text-base font-normal`}>{description}</p>
    </div>
  );
}

export default function PerformansPazarlama() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <div className="relative">
        <section className="relative overflow-hidden bg-[#f0f0f5]" style={{
          background: 'radial-gradient(100% 100% at 50% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 70%), #f0f0f5'
        }}>
          <div className="container mx-auto px-4 pt-32 pb-8">
            <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900`}
              >
                360° Performans Pazarlama
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 max-w-3xl mt-8 font-light`}
              >
                Markanızı dijital dünyada öne çıkarıyor, hedef kitlenize ulaşmanızı sağlıyoruz. 
                Google, Meta ve TikTok platformlarında uzman ekibimizle performans odaklı reklam yönetimi sunuyoruz.
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
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Dijital Reklam Yönetimi
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Markanız için en etkili dijital reklam stratejilerini oluşturuyor, bütçenizi optimize ederek maksimum performans elde etmenizi sağlıyoruz. Google Ads, Meta Ads ve TikTok Ads platformlarında uzman ekibimizle yanınızdayız.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Detaylı raporlama ve analitik araçlarımızla kampanyalarınızın performansını sürekli takip ediyor, veriye dayalı optimizasyonlarla dönüşüm oranlarınızı artırıyoruz.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img 
                  src="/images/360performancemarketing.png" 
                  alt="360 Performans Pazarlama" 
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
                  Performans odaklı dijital reklam yönetimi
                </h2>
                <p className={`${redHat.className} text-white text-lg md:text-xl font-light mb-8 md:mb-12`}>
                  Uzman ekibimizle markanızı dijital dünyada büyütüyoruz
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
                  title="Hedef Kitle Analizi" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="2" 
                  title="Reklam Stratejisi" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="3" 
                  title="Kampanya Yönetimi" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="4" 
                  title="Performans Takibi" 
                  isOpen={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ 
          background: 'radial-gradient(100% 100% at 100% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' 
        }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className={`${redHat.className} text-center text-3xl md:text-4xl font-light mb-12 md:mb-20 text-black`}>
              Hizmetlerimizin Avantajları
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="Detaylı Raporlama"
                description="Kampanyalarınızın performansını günlük, haftalık ve aylık raporlarla takip edin. Veriye dayalı kararlar alın."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
                title="Performans Optimizasyonu"
                description="Sürekli test ve optimizasyonlarla reklam performansınızı artırıyor, maliyetlerinizi düşürüyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                title="Hedef Kitle Analizi"
                description="Potansiyel müşterilerinizi analiz ediyor, en etkili reklam stratejilerini oluşturuyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                }
                title="Bütçe Yönetimi"
                description="Reklam bütçenizi verimli kullanıyor, maksimum dönüşüm için optimize ediyoruz."
              />

              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                }
                title="Kreatif Tasarım"
                description="Dikkat çekici reklam görselleri ve metinleri ile hedef kitlenizi etkileyin."
              />

              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                title="Rekabet Analizi"
                description="Rakiplerinizi analiz ediyor, pazardaki konumunuzu güçlendiriyoruz."
              />
            </div>
          </div>
        </section>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
} 