'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import { useState, useEffect } from 'react';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const sections = [
  { id: "genel-hukumler", title: "Genel Hükümler" },
  { id: "hizmet-kapsami", title: "Hizmet Kapsamı" },
  { id: "hizmet-kullanimi", title: "Hizmet Kullanımı" },
  { id: "odeme-kosullari", title: "Ödeme Koşulları" },
  { id: "sorumluluklar", title: "Sorumluluklar" },
  { id: "fikri-mulkiyet", title: "Fikri Mülkiyet Hakları" },
  { id: "fesih", title: "Sözleşmenin Feshi" },
  { id: "iletisim", title: "İletişim" }
];

export default function HizmetSartlari() {
  const [activeSection, setActiveSection] = useState("genel-hukumler");

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
            Hizmet Şartları
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bu hizmet şartları, Miaso tarafından sunulan tüm hizmetlerin kullanım koşullarını belirler.
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
              {sections.map(section => (
                <section key={section.id} id={section.id} className="mb-16">
                  <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>
                    {section.title}
                  </h2>
                  {section.id === "genel-hukumler" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        İşbu hizmet şartları ("Sözleşme"), Miaso ("Şirket") ile hizmetlerimizi kullanmak isteyen gerçek veya tüzel kişiler ("Müşteri") arasındaki ilişkiyi düzenler.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Bu sözleşme, tarafların hak ve yükümlülüklerini, hizmetlerin kapsamını, kullanım şartlarını ve diğer önemli hususları içerir. Hizmetlerimizi kullanmaya başladığınız andan itibaren bu şartları kabul etmiş sayılırsınız.
                      </p>
                      <p className="text-gray-600">
                        Şirketimiz, bu sözleşmede yer alan maddeleri, hizmetleri ve ücretlendirme politikalarını önceden bildirmek kaydıyla değiştirme hakkını saklı tutar.
                      </p>
                    </>
                  )}
                  {section.id === "hizmet-kapsami" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Miaso tarafından sunulan hizmetler aşağıdakileri kapsar:
                      </p>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">1. Dijital Reklam Yönetimi</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Google Ads kampanya yönetimi ve optimizasyonu</li>
                        <li>Meta Ads (Facebook & Instagram) reklam yönetimi</li>
                        <li>Reklam metni ve görseli hazırlama</li>
                        <li>Hedef kitle analizi ve segmentasyon</li>
                        <li>Performans raporlama ve analiz</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">2. 360° Performans Pazarlama</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Dijital pazarlama stratejisi oluşturma</li>
                        <li>Çok kanallı pazarlama yönetimi</li>
                        <li>Conversion optimizasyonu</li>
                        <li>Analytics ve veri analizi</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">3. E-ticaret Çözümleri</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>E-ticaret sitesi kurulumu ve özelleştirme</li>
                        <li>Ödeme sistemi entegrasyonu</li>
                        <li>Ürün kataloğu yönetimi</li>
                        <li>SEO optimizasyonu</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">4. Web Tasarım ve Geliştirme</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Özel web sitesi tasarımı ve geliştirme</li>
                        <li>Web uygulaması geliştirme</li>
                        <li>Responsive tasarım</li>
                        <li>UI/UX tasarımı</li>
                        <li>Bakım ve destek hizmetleri</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">5. Mobil Uygulama Geliştirme</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>iOS ve Android uygulama geliştirme</li>
                        <li>Cross-platform uygulama geliştirme</li>
                        <li>UI/UX tasarımı</li>
                        <li>Uygulama bakımı ve güncellemeleri</li>
                        <li>App Store ve Play Store yönetimi</li>
                      </ul>
                    </>
                  )}
                  {section.id === "hizmet-kullanimi" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Müşteri, hizmetlerin kullanımı sırasında:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Tüm bilgilerin doğru ve güncel olmasını sağlamakla,</li>
                        <li>Hesap güvenliğini korumakla,</li>
                        <li>Yasalara ve etik kurallara uygun davranmakla,</li>
                        <li>Şirket'in itibarına zarar verecek davranışlardan kaçınmakla,</li>
                        <li>Hizmetleri amacı dışında kullanmamakla yükümlüdür.</li>
                      </ul>
                    </>
                  )}
                  {section.id === "odeme-kosullari" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Hizmet bedelleri ve ödeme koşulları aşağıdaki şekilde düzenlenir:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Hizmet bedelleri, seçilen paket ve hizmet türüne göre belirlenir</li>
                        <li>Ödemeler, hizmet başlangıcında peşin olarak alınır</li>
                        <li>Reklam harcamaları ayrıca faturalandırılır</li>
                        <li>Ödeme gecikmeleri durumunda hizmet sunumu durdurulabilir</li>
                        <li>Fiyatlandırma politikası piyasa koşullarına göre güncellenebilir</li>
                      </ul>
                    </>
                  )}
                  {section.id === "sorumluluklar" && (
                    <>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">Şirket'in Sorumlulukları</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Hizmetlerin kesintisiz ve güvenli şekilde sunulması</li>
                        <li>Müşteri verilerinin korunması</li>
                        <li>Teknik destek sağlanması</li>
                        <li>Düzenli raporlama yapılması</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">Müşteri'nin Sorumlulukları</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Gerekli içerik ve materyallerin sağlanması</li>
                        <li>Zamanında geri bildirim verilmesi</li>
                        <li>Ödeme yükümlülüklerinin yerine getirilmesi</li>
                        <li>Yasal düzenlemelere uygunluğun sağlanması</li>
                      </ul>
                    </>
                  )}
                  {section.id === "fikri-mulkiyet" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Müşterilerimize ait tüm bilgiler gizli tutulur ve üçüncü taraflarla paylaşılmaz. Toplanan veriler sadece hizmet kalitesini artırmak ve yasal yükümlülükleri yerine getirmek amacıyla kullanılır.
                      </p>
                    </>
                  )}
                  {section.id === "fesih" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Şirketimiz, sunduğu hizmetleri önceden bildirmeksizin değiştirme, güncelleme veya sonlandırma hakkını saklı tutar.
                      </p>
                    </>
                  )}
                  {section.id === "iletisim" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Bu sözleşme ile ilgili tüm bildirimler için:
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
                    </>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 