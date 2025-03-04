'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Red_Hat_Display } from "next/font/google";
import ContactPopup from '../../components/ContactPopup';
import Link from 'next/link';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function Kurumsal() {
  const [isMounted, setIsMounted] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="relative bg-[#f0f0f5] text-black overflow-hidden p-12 md:p-20 min-h-screen">
        <div className="container mx-auto px-4 mt-[20vh]">
          <div className="h-[600px]"></div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="relative">
        <section className="relative overflow-hidden min-h-screen bg-[#f0f0f5]" style={{
          background: 'radial-gradient(100% 100% at 50% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 50%), #f0f0f5'
        }}>
          <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 max-w-3xl`}
              >
                Yenilikçi ve Güvenilir <br />
                <span className="text-[#00c16a]">İş Ortağınız</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 mb-8 max-w-2xl font-light`}
              >
                Dijital dönüşüm yolculuğunuzda güvenilir çözüm ortağınız olarak yanınızdayız
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 mb-16"
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
                className="w-full mt-16"
              >
                <div className="w-full max-w-[1400px] mx-auto px-4">
                  <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
                    <img 
                      src="/images/aboutus1.webp" 
                      alt="Kurumsal görsel" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
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
                  Hakkımızda
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  2020 yılından bu yana dijital dönüşüm alanında faaliyet gösteren firmamız, müşterilerimize yenilikçi ve sürdürülebilir çözümler sunmaktadır. Deneyimli ekibimiz ve modern teknoloji altyapımızla, işletmelerin dijital dünyada başarılı olmalarına yardımcı oluyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Müşteri odaklı yaklaşımımız ve kaliteli hizmet anlayışımızla, her projeye özel çözümler üretiyoruz. İşletmelerin dijital varlıklarını güçlendirirken, kullanıcı deneyimini ve performansı ön planda tutuyoruz.
                </p>
              </div>
              <div className="h-[200px] md:h-[300px] order-2 md:order-1">
                <img 
                  src="/images/aboutus2.webp" 
                  alt="Hakkımızda" 
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="h-[200px] md:h-[300px] order-2 md:order-1">
                <img 
                  src="/images/aboutus3.webp" 
                  alt="Vizyon ve Misyon" 
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Vizyon ve Misyonumuz
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Vizyonumuz, dijital dünyada işletmelerin başarıya ulaşmasına öncülük etmek ve yenilikçi çözümlerle sektörde fark yaratmaktır. Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak, onlara değer katan çözümler sunmayı hedefliyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Misyonumuz, en son teknolojileri kullanarak müşterilerimize özel, kaliteli ve sürdürülebilir dijital çözümler sunmaktır. İşletmelerin dijital dönüşüm süreçlerinde güvenilir bir iş ortağı olarak, onların başarılarına katkıda bulunmayı amaçlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ 
          background: 'radial-gradient(100% 100% at 100% 110%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' 
        }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Değerlerimiz
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Yenilikçilik, müşteri memnuniyeti ve kalite odaklı yaklaşımımızla sektörde öncü olmayı hedefliyoruz. Etik değerlerimiz ve profesyonel iş anlayışımızla müşterilerimize en iyi hizmeti sunuyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Sürekli gelişim, şeffaflık ve güven ilkelerimizle, uzun vadeli iş birliklerine imza atıyoruz. Ekip çalışması ve yaratıcı çözümlerle, müşterilerimizin başarısı için çalışıyoruz.
                </p>
              </div>
              <div className="h-[200px] md:h-[300px]">
                <img 
                  src="/images/aboutus4.webp" 
                  alt="Değerlerimiz" 
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050806] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className={`${redHat.className} text-center text-3xl md:text-4xl font-light mb-12 md:mb-20 text-white`}>
              Neden Biz?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                title="Yenilikçi Çözümler"
                description="En son teknolojileri kullanarak, işletmenize özel yenilikçi çözümler sunuyoruz."
                isDark={true}
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                }
                title="Müşteri Odaklı"
                description="İhtiyaçlarınızı en iyi şekilde anlıyor ve size özel çözümler geliştiriyoruz."
                isDark={true}
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                title="Güvenilir Hizmet"
                description="Profesyonel ekibimiz ve güvenilir hizmet anlayışımızla yanınızdayız."
                isDark={true}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className={`${redHat.className} text-center text-3xl md:text-4xl font-light mb-12 md:mb-20 text-gray-900`}>
              Daha Fazla Bilgi
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <Link href="/contact" className="group">
                <div className="flex flex-col items-start">
                  <div className="mb-4 md:mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96] group-hover:text-[#00c16a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black group-hover:text-[#00c16a] transition-colors`}>
                    İletişime Geç
                  </h3>
                  <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                    Projeleriniz için bizimle iletişime geçin. Size özel çözümler sunalım.
                  </p>
                </div>
              </Link>

              <Link href="/careers" className="group">
                <div className="flex flex-col items-start">
                  <div className="mb-4 md:mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96] group-hover:text-[#00c16a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black group-hover:text-[#00c16a] transition-colors`}>
                    Kariyer Fırsatları
                  </h3>
                  <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                    Ekibimize katılın, geleceği birlikte şekillendirelim.
                  </p>
                </div>
              </Link>

              <Link href="/" className="group">
                <div className="flex flex-col items-start">
                  <div className="mb-4 md:mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96] group-hover:text-[#00c16a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black group-hover:text-[#00c16a] transition-colors`}>
                    Hizmetlerimiz
                  </h3>
                  <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                    Web tasarım, yazılım ve dijital çözümlerimizi keşfedin.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

function FeatureCard({ icon, title, description, isDark = false }: { icon: React.ReactNode, title: string, description: string, isDark?: boolean }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 md:mb-6">
        {icon}
      </div>
      <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
      <p className={`${redHat.className} ${isDark ? 'text-gray-400' : 'text-gray-700'} text-base font-normal`}>{description}</p>
    </div>
  );
} 