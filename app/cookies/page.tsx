'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import { useState, useEffect } from 'react';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const sections = [
  { id: "genel-bilgiler", title: "Genel Bilgiler" },
  { id: "cerez-turleri", title: "Çerez Türleri" },
  { id: "cerez-kullanimi", title: "Çerez Kullanımı" },
  { id: "ucuncu-taraf", title: "Üçüncü Taraf Çerezleri" },
  { id: "cerez-yonetimi", title: "Çerez Yönetimi" },
  { id: "cerez-tercihleri", title: "Çerez Tercihleri" },
  { id: "iletisim", title: "İletişim" }
];

export default function CerezPolitikasi() {
  const [activeSection, setActiveSection] = useState("genel-bilgiler");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      let currentSection = sections[0].id;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f0f0f5]">
      <div className="relative bg-[#050806] mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 pt-32 pb-16 text-center"
        >
          <h1 className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4`}>
            Çerez Politikası
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Web sitemizde kullanılan çerezler hakkında detaylı bilgi.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sol Menü */}
          <div className="md:w-1/4">
            <div className="sticky top-32">
              <nav className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-[#00c16a] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Sağ İçerik */}
          <div className="md:w-3/4">
            <div className="prose max-w-none">
              <section id="genel-bilgiler" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Genel Bilgiler</h2>
                <p className="text-gray-600 mb-4">
                  Bu Çerez Politikası, Miaso web sitesinde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi vermek amacıyla hazırlanmıştır. Bu politika, 6698 sayılı KVKK, GDPR ve CCPA gerekliliklerine uygun olarak düzenlenmiştir.
                </p>
                <p className="text-gray-600 mb-4">
                  Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, size daha iyi bir kullanıcı deneyimi sunmamıza yardımcı olur.
                </p>
                <p className="text-gray-600 mb-4">
                  Son güncelleme tarihi: [04.03.2025]
                </p>
              </section>

              <section id="cerez-turleri" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Çerez Türleri</h2>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Zorunlu Çerezler</h3>
                <p className="text-gray-600 mb-4">
                  Web sitemizin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Oturum yönetimi</li>
                  <li>Güvenlik önlemleri</li>
                  <li>Temel site işlevselliği</li>
                  <li>Alışveriş sepeti yönetimi</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Performans Çerezleri</h3>
                <p className="text-gray-600 mb-4">
                  Site performansını ve kullanımını analiz eden çerezlerdir:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Ziyaretçi istatistikleri</li>
                  <li>Sayfa yüklenme süreleri</li>
                  <li>Hata raporları</li>
                  <li>Kullanıcı davranışları</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. İşlevsellik Çerezleri</h3>
                <p className="text-gray-600 mb-4">
                  Kullanıcı tercihlerini hatırlayan çerezlerdir:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Dil tercihleri</li>
                  <li>Bölge ayarları</li>
                  <li>Özelleştirilmiş görünüm ayarları</li>
                  <li>Oturum bilgileri</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Pazarlama Çerezleri</h3>
                <p className="text-gray-600 mb-4">
                  Reklam ve pazarlama amaçlı kullanılan çerezlerdir:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Reklam performans takibi</li>
                  <li>Hedefli reklamcılık</li>
                  <li>Kullanıcı tercihleri</li>
                  <li>Sosyal medya entegrasyonları</li>
                </ul>
              </section>

              <section id="cerez-kullanimi" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Çerez Kullanımı</h2>
                <p className="text-gray-600 mb-4">
                  Çerezleri aşağıdaki amaçlarla kullanıyoruz:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Web sitemizin temel işlevlerini sağlamak</li>
                  <li>Site performansını ve kullanılabilirliğini artırmak</li>
                  <li>Kullanıcı deneyimini iyileştirmek</li>
                  <li>Güvenliği sağlamak</li>
                  <li>Yasal yükümlülükleri yerine getirmek</li>
                </ul>
              </section>

              <section id="ucuncu-taraf" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Üçüncü Taraf Çerezleri</h2>
                <p className="text-gray-600 mb-4">
                  Web sitemizde üçüncü taraf hizmet sağlayıcıların çerezleri de kullanılmaktadır:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Google Analytics (analitik)</li>
                  <li>Facebook Pixel (pazarlama)</li>
                  <li>Google Ads (reklam)</li>
                  <li>Hotjar (kullanıcı deneyimi)</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Bu üçüncü taraf çerezleri, ilgili hizmet sağlayıcıların gizlilik politikalarına tabidir.
                </p>
              </section>

              <section id="cerez-yonetimi" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Çerez Yönetimi</h2>
                <p className="text-gray-600 mb-4">
                  Çerezleri aşağıdaki yöntemlerle yönetebilirsiniz:
                </p>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Tarayıcı Ayarları</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Edge</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Çerezleri devre dışı bırakmanız durumunda bazı site özellikleri düzgün çalışmayabilir.
                </p>
              </section>

              <section id="cerez-tercihleri" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Çerez Tercihleri</h2>
                <p className="text-gray-600 mb-4">
                  GDPR, KVKK ve CCPA kapsamındaki haklarınız:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Çerez kullanımını kabul veya reddetme</li>
                  <li>Çerez tercihlerini değiştirme</li>
                  <li>Çerez bilgilerine erişim</li>
                  <li>Çerezlerin silinmesini talep etme</li>
                </ul>
              </section>

              <section id="iletisim" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>İletişim</h2>
                <p className="text-gray-600 mb-4">
                  Çerez politikamız hakkında sorularınız için bize ulaşabilirsiniz:
                </p>
                <ul className="list-none text-gray-600">
                  <li className="mb-2">
                    <strong>E-posta:</strong>{" "}
                    <a href="mailto:info@miaso.co" className="text-[#00c16a] hover:underline">
                      info@miaso.co
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>Telefon:</strong>{" "}
                    <a href="tel:+905512351626" className="text-[#00c16a] hover:underline">
                      0551 235 16 26
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 