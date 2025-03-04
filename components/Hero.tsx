'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ContactPopup from './ContactPopup'
import HeroVisual from './HeroVisual'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Sayfa ilk yüklendiğinde boş dönüyor
  }

  return (
    <AuroraBackground className="h-[85vh]">
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-[90px] h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-left text-white">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span>Dijital</span>
                  <span style={{ color: '#11fb96' }}>
                    dönüşümünüzün
                  </span>
                </div>
                <span style={{ color: '#11fb96' }}>
                  mimarı
                </span>
              </h1>
              <p className="text-base lg:text-lg mb-8 text-gray-300 text-left max-w-xl leading-relaxed">
                İşletmenizin dijital potansiyelini ortaya çıkararak büyümenizi hızlandırıyoruz. Web geliştirme, dijital pazarlama, e-ticaret çözümleri ve daha fazlası.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-full transition-all"
                >
                  Bizimle İletişime Geç
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="block lg:block mt-8 lg:mt-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      <ContactPopup 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </AuroraBackground>
  )
}

export default Hero