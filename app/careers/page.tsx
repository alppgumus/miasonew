'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const readmeText = (
  <div className="flex items-center whitespace-nowrap">
    <span className="text-gray-800 mx-2">👀</span>
    <span className="text-gray-800 font-mono font-bold mx-2">README.MD</span>
    <span className="w-16"></span>
  </div>
);

const styleTag = `
  .marquee {
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }

  .marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
    padding: 1rem;
  }

  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export default function Careers() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollWidth = containerRef.current.scrollWidth / 2;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (prev >= scrollWidth) {
          return 0;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <style>{styleTag}</style>
      </Head>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-[1200px] border border-black rounded-lg overflow-hidden bg-white">
          {/* Animasyonlu Header */}
          <div className="overflow-hidden border-b border-black">
            <div 
              ref={containerRef}
              className="flex items-center py-4 px-4" 
              style={{ 
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'transform 0.1s linear'
              }}
            >
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex">
                  {readmeText}
                </div>
              ))}
              {[...Array(15)].map((_, i) => (
                <div key={`duplicate-${i}`} className="flex">
                  {readmeText}
                </div>
              ))}
            </div>
          </div>

          {/* Ana İçerik */}
          <div className="px-8 py-16 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl  mb-8 text-gray-900`}>
                # Bunu herkes yapamaz
              </h1>

              <div className="space-y-6 text-gray-600">
                <p className={`${redHat.className} text-lg`}>
                  Miaso, dünya standartlarında yazılımcıların ve tasarımcıların bir araya geldiği bir ekiptir. Statüyü reddediyor, 
                  deneyimliyor, gözlemliyor ve yüksek hızda ilerleme kaydediyoruz — girişimciliği muhteşem bir şeye dönüştürmek için.
                </p>

                <p className={`${redHat.className} text-lg`}>
                  Hızlı hareket etmek ve işleri bitirmek, belirsizliğe karşı dayanıklı olmayı gerektirir. Büyüme burada sadece bir 
                  fırsat değil, bir beklentidir. Eğer kuralcı bir kurumsal yapı ve ofis ortamı arıyorsanız, Miaso size göre değil. 
                  Eğer bağımsız düşünen, meydan okumayı seven ve ustalık peşinde koşan biriyseniz, sonsuz gelişimin peşinde koşmaya hoş geldiniz.
                </p>

                <p className={`${redHat.className} text-lg`}>
                  Buradaki herkes yaptığı işle dünyanın en iyisi olmak istiyor. Bize katılan bazı kişiler zaten dünya çapında: 
                  teknik kurucular, yenilikçiler ve patent sahipleri. Eğer bu sizseniz, hızlı yol için atla butonuna tıklayın.
                </p>
              </div>

              <div className="mt-12 flex gap-4">
                <Link
                  href="/"
                  className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
                >
                  Hadi başlayalım
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/careers/not-everyone"
                  className="group inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
                >
                  Atla
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
} 