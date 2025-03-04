'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import ContactPopup from '../../components/ContactPopup';
import { useState } from 'react';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function EticaretKurulumPaketleri() {
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
                E-Ticaret Kurulum Paketleri
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 max-w-3xl mt-8 font-light`}
              >
                Profesyonel ekibimizle e-ticaret sitenizin kurulumunu A'dan Z'ye yapıyor, 
                işinizi büyütmeniz için gereken tüm araçları hazır hale getiriyoruz.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center max-w-4xl mx-auto mt-12"
              >
                <p className={`${redHat.className} text-base md:text-lg text-gray-600`}>
                  Uzman ekibimiz, Ticimax altyapısını işletmenizin ihtiyaçlarına göre özelleştiriyor ve 
                  tüm entegrasyonları profesyonel şekilde yapılandırıyor. Kurulum sürecinde ihtiyacınız olan 
                  tüm eğitimleri veriyor, sitenizi satışa hazır hale getiriyoruz.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Öne Çıkan Özellikler */}
        <section className="bg-[#f0f0f5] py-20">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl font-light mb-2 text-gray-900`}>Ultra Güvenlik</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl font-light mb-2 text-gray-900`}>İndirimli Sanal Pos Oranları</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl font-light mb-2 text-gray-900`}>Hızlı Web Sitesi</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl font-light mb-2 text-gray-900`}>Reklam Optimizasyonu</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl font-light mb-2 text-gray-900`}>Eşsiz Web Tasarımı</h3>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Paketler */}
        <section className="bg-[#f0f0f5] pb-20" style={{
          background: 'radial-gradient(100% 100% at 100% 100%, rgba(17, 251, 150, 0.1) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5'
        }}>
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Silver Paket */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#050806] rounded-2xl p-8 border border-gray-700 shadow-sm hover:shadow-lg transition-all relative"
              >
                <div className="absolute top-4 right-4 bg-[#00c16a] text-white px-3 py-1 rounded-full text-sm">
                  KÜÇÜK İŞLETMELER İÇİN EN İYİSİ!
                </div>
                <div className="mb-8">
                  <h3 className={`${redHat.className} text-2xl font-light mb-2 text-white`}>Silver</h3>
                  <p className="text-gray-400 text-sm mb-4">Küçük işletmeler için temel kurulum paketi.</p>
                  <div className="flex items-end gap-1 mb-8">
                    <div className="flex flex-col">
                      <span className="text-gray-500 line-through text-lg">23.800 ₺</span>
                      <span className={`${redHat.className} text-4xl font-light text-white`}>17.000 ₺</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tema Kurulumu - Düzenleme
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      3 Adet Logo Tasarımı
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      5 Adet Slider & Banner Tasarımı
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      75 Adet Ürün Girişi
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kategori Ağacı ve Menü Düzenlemesi
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ürün Tanımlamaları (Varyant, Filtre, Marka ve Tedarikçi)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ödeme & Sanal Pos Ayarları
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Mail Bildirim Şablonları
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hakkımızda Sayfası
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      İletişim Sayfası
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      İade & Değişim Sayfası
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kargo Sistem Ayarları
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sözleşme Ayarları & Kurulumu
                    </li>
                  </ul>
                  <div className="mt-8">
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className="w-full bg-white text-[#050806] py-4 rounded-lg font-medium hover:bg-[#11fb96] hover:text-black transition-all"
                    >
                      Sizi Arayalım
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Gold Paket */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#050806] rounded-2xl p-8 border border-gray-700 shadow-lg hover:shadow-xl transition-all relative transform -translate-y-4 scale-105"
                style={{
                  background: 'radial-gradient(100% 100% at 100% 0%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 70%), #050806'
                }}
              >
                <div className="absolute top-4 right-4 bg-[#00c16a] text-white px-3 py-1 rounded-full text-sm">
                  EN ÇOK TERCİH EDİLEN!
                </div>
                <div className="mb-8">
                  <h3 className={`${redHat.className} text-2xl font-light mb-2 text-white`}>Gold</h3>
                  <p className="text-gray-400 text-sm mb-4">Orta ölçekli işletmeler için gelişmiş kurulum paketi.</p>
                  <div className="flex items-end gap-1 mb-8">
                    <div className="flex flex-col">
                      <span className="text-gray-500 line-through text-lg">31.500 ₺</span>
                      <span className={`${redHat.className} text-4xl font-light text-white`}>22.500 ₺</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-gray-300 mb-6">
                      Silver pakete ek olarak;
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Karakteristik Logo (Hediye)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      5 Adet Logo Tasarımı
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      10 Adet Slider & Banner Tasarımı
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      150 Adet Ürün Girişi
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kargo Entegrasyonu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      E-Fatura & E-Arşiv Entegrasyonu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sıkça Sorulan Sorular Sayfası
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      SEO Başlık Düzenlemeleri
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Google & Yandex Arama Motoru Kaydı
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kampanya Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kampanya Görsel Tasarımı
                    </li>
                  </ul>
                  <div className="mt-8">
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className="w-full bg-white text-[#050806] py-4 rounded-lg font-medium hover:bg-[#11fb96] hover:text-black transition-all"
                    >
                      Sizi Arayalım
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Diamond Paket */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#050806] rounded-2xl p-8 border border-gray-700 shadow-sm hover:shadow-lg transition-all relative"
              >
                <div className="absolute top-4 right-4 bg-[#00c16a] text-white px-3 py-1 rounded-full text-sm">
                  PROFESYONELLERİN TERCİHİ!
                </div>
                <div className="mb-8">
                  <h3 className={`${redHat.className} text-2xl font-light mb-2 text-white`}>Diamond</h3>
                  <p className="text-gray-400 text-sm mb-4">Kurumsal işletmeler için premium kurulum paketi.</p>
                  <div className="flex items-end gap-1 mb-8">
                    <div className="flex flex-col">
                      <span className="text-gray-500 line-through text-lg">50.400 ₺</span>
                      <span className={`${redHat.className} text-4xl font-light text-white`}>36.000 ₺</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-gray-300 mb-6">
                      Gold pakete ek olarak;
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Özel Web Site Tasarımı (Hediye)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Karakteristik Logo (Hediye)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kurumsal Kimlik (Hediye)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      15 Adet Slider & Banner Tasarımı
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      225 Adet Ürün Girişi
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Google GA4 Analytics Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Google Merchant Center Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Google Tag Manager Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Google Search Console Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Facebook Pixel Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Facebook Dönüşüm API Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Google ile Giriş Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Facebook ile Giriş Kurulumu
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#11fb96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Apple ile Giriş Kurulumu
                    </li>
                  </ul>
                  <div className="mt-8">
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className="w-full bg-white text-[#050806] py-4 rounded-lg font-medium hover:bg-[#11fb96] hover:text-black transition-all"
                    >
                      Sizi Arayalım
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
} 