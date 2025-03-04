'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Red_Hat_Display } from "next/font/google";
import ContactPopup from '../../components/ContactPopup';
import Link from 'next/link';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function MobileApp() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
    
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 1)
      window.scrollTo(0, 0)
    }
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
                Mobil dünyada <br />
                <span className="text-[#00c16a]">yerinizi alın</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 mb-8 max-w-2xl font-light`}
              >
                iOS ve Android için native mobil uygulamalar geliştiriyor, 
                işletmenizi mobil dünyada öne çıkarıyoruz.
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

              {/* Video */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[1000px] mx-auto"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#f0f0f5]">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/mobileappdevelopment.mp4" type="video/mp4" />
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
                  Native Mobil Uygulama Geliştirme
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  iOS ve Android platformları için native mobil uygulamalar geliştiriyoruz. Her platforma özel yaklaşımımız ve deneyimli ekibimizle, kullanıcılarınıza en iyi deneyimi sunuyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Kullanıcı deneyimini ön planda tutarak, her platformun kendi tasarım dilini ve özelliklerini en iyi şekilde kullanıyoruz. Yüksek performanslı, güvenli ve ölçeklenebilir mobil uygulamalar ile işletmenizi mobil dünyada öne çıkarıyoruz.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px] order-2 md:order-1">
                <img 
                  src="/images/mobilgorsel1.png" 
                  alt="Native Mobil Uygulama Geliştirme" 
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="h-[300px] md:h-[400px] order-2 md:order-1">
                <img 
                  src="/images/mobilgorsel2.png" 
                  alt="Cross-Platform Mobil Uygulama" 
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Cross-Platform Çözümler
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  React Native ve Flutter gibi modern teknolojilerle, tek kod tabanından birden fazla platformda çalışan uygulamalar geliştiriyoruz. Maliyet ve zaman avantajı sağlayan cross-platform çözümlerimizle, projenizi hızla hayata geçiriyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Her platformda native performans ve görünüm sunan cross-platform uygulamalarımız, işletmenizin mobil stratejisini güçlendiriyor. Hızlı geliştirme süreci ve kolay güncellenebilirlik ile rekabet avantajı sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ background: 'radial-gradient(100% 100% at 100% 110%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Özel Mobil Çözümler
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  İşletmenizin ihtiyaçlarına özel mobil uygulamalar geliştiriyoruz. E-ticaret, içerik yönetimi, müşteri sadakat programları ve özel iş süreçleri için mobil çözümler sunuyoruz.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Güçlü backend sistemleri, API entegrasyonları ve analitik araçlarıyla desteklenen mobil uygulamalarımız, işletmenizin dijital dönüşümüne katkı sağlıyor. Kullanıcı dostu arayüzler ve özelleştirilmiş fonksiyonlarla müşterilerinize benzersiz bir deneyim sunuyoruz.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img 
                  src="/images/mobilgorsel3.png" 
                  alt="Özel Mobil Çözümler" 
                  className="w-full h-full object-contain object-center rounded-md"
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
                  Mobil projenizi adım adım hayata geçirelim
                </h2>
                <p className={`${redHat.className} text-white text-lg md:text-xl font-light mb-8 md:mb-12`}>
                  Profesyonel ekibimizle ihtiyaçlarınıza özel çözümler sunuyoruz
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
                  title="İhtiyaç analizi ve planlama" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="2" 
                  title="UI/UX tasarımı" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="3" 
                  title="Geliştirme ve test" 
                  isOpen={false}
                />
                <AccordionSection 
                  number="4" 
                  title="Mağaza yayını ve bakım" 
                  isOpen={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ background: 'radial-gradient(100% 100% at 100% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className={`${redHat.className} text-center text-3xl md:text-4xl font-light mb-12 md:mb-20 text-black`}>
              Mobil çözümlerimizin avantajları
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="Native Performans"
                description="Her platformun kendi özelliklerini kullanarak yüksek performanslı uygulamalar geliştiriyoruz. Akıcı kullanıcı deneyimi ve hızlı çalışma ile kullanıcılarınızı memnun ediyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                title="Güvenli Altyapı"
                description="En güncel güvenlik standartlarını uygulayarak kullanıcı verilerini koruyoruz. SSL şifreleme, güvenli veri depolama ve düzenli güvenlik güncellemeleri ile uygulamanızı güvende tutuyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                }
                title="Kesintisiz Güncelleme"
                description="Düzenli bakım ve güncellemelerle uygulamanızı her zaman güncel tutuyoruz. Yeni özellikler, performans iyileştirmeleri ve güvenlik güncellemeleri ile uygulamanızı sürekli geliştiriyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                }
                title="Özelleştirilebilir Tasarım"
                description="Markanızın kimliğini yansıtan, tamamen özelleştirilmiş arayüzler tasarlıyoruz. Modern tasarım trendleri ve kullanıcı deneyimi prensipleriyle uygulamanızı öne çıkarıyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="Detaylı Analitik"
                description="Kullanıcı davranışlarını ve uygulama performansını ölçen analitik araçlar entegre ediyoruz. Veriye dayalı kararlar almanızı sağlayan detaylı raporlar ve analizler sunuyoruz."
              />
              
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                }
                title="Bulut Entegrasyonu"
                description="Güçlü bulut altyapısı ile uygulamanızı destekliyoruz. Veri yedekleme, senkronizasyon ve ölçeklenebilir sunucu çözümleri ile kesintisiz hizmet sunuyoruz."
              />
            </div>
          </div>
        </section>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
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
        <div className="text-white">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 md:mt-4 pl-4 md:pl-8 overflow-hidden"
          >
            <p className={`${redHat.className} text-gray-400 text-sm md:text-base font-light`}>
              {number === "1" && "İşletmenizin hedeflerini ve ihtiyaçlarını detaylı olarak analiz ederek, mobil projenizin kapsamını belirliyoruz. Hedef kitlenizi, rekabet ortamınızı ve teknik gereksinimleri değerlendirerek, size özel bir yol haritası oluşturuyoruz."}
              {number === "2" && "Kullanıcı deneyimini ön planda tutarak, her platformun tasarım dilini ve özelliklerini en iyi şekilde kullanan arayüzler tasarlıyoruz. Wireframe ve prototip aşamalarında sizinle yakın çalışarak, beklentilerinizi tam olarak karşılayan tasarımlar geliştiriyoruz."}
              {number === "3" && "Modern teknolojiler ve en iyi geliştirme pratikleriyle uygulamanızı kodluyoruz. Kapsamlı test süreçleriyle her detayı kontrol ediyor, hataları gideriyor ve performansı optimize ediyoruz."}
              {number === "4" && "Uygulamanızı App Store ve Google Play Store'da yayına hazırlıyor ve yayınlıyoruz. Yayın sonrası düzenli bakım, güncelleme ve destek hizmetleriyle uygulamanızın sürekli gelişimini sağlıyoruz."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 