'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const WebDevelopment = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="bg-[#050806] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 mb-4"
          >
            Web Geliştirme
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Güçlü web çözümleri ile işinizi büyütün
          </motion.h2>

          {/* Video Kartı */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl bg-[#061a1c] p-8 overflow-hidden mb-12"
          >
            <video
              key={isMobile ? 'mobile' : 'desktop'}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            >
              <source 
                src={isMobile ? "videos/webdevelopmentmobile.webm" : "videos/webdevelopment.webm"} 
                type="video/webm" 
              />
            </video>
          </motion.div>

          {/* Alt Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sol Alt Kart */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <h3 className="text-2xl font-light mb-4">
                Özelleştirilmiş Çözümler
              </h3>
              <p className="text-gray-400">
                İşletmenizin ihtiyaçlarına özel web çözümleri ile dijital varlığınızı güçlendirin. Responsive tasarım, SEO uyumlu kodlama ve yüksek performans ile web sitenizi öne çıkarın.
              </p>
            </motion.div>

            {/* Sağ Alt Kart */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <h3 className="text-2xl font-light mb-4">
                Güvenli Altyapı
              </h3>
              <p className="text-gray-400">
                En son güvenlik standartları ile korunan, yüksek performanslı sunucu altyapısı ve 7/24 teknik destek ile kesintisiz hizmet sunuyoruz.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevelopment 