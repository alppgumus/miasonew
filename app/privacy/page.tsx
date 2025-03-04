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
  { id: "toplanan-veriler", title: "Toplanan Veriler" },
  { id: "veri-kullanimi", title: "Veri Kullanımı" },
  { id: "veri-paylasimi", title: "Veri Paylaşımı" },
  { id: "veri-guvenligi", title: "Veri Güvenliği" },
  { id: "cerezler", title: "Çerezler" },
  { id: "kullanici-haklari", title: "Kullanıcı Hakları" },
  { id: "iletisim", title: "İletişim" }
];

export default function GizlilikPolitikasi() {
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
            Gizlilik Politikası
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kişisel verilerinizin korunması ve gizliliğiniz bizim için önemlidir.
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
                  Bu gizlilik politikası, Miaso ("biz", "bizim" veya "Şirket") tarafından kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar. Bu politika, KVKK (6698 sayılı Kişisel Verilerin Korunması Kanunu), GDPR (Genel Veri Koruma Yönetmeliği) ve CCPA (California Tüketici Gizlilik Yasası) gerekliliklerine uygun olarak hazırlanmıştır.
                </p>
                <p className="text-gray-600 mb-4">
                  Bu politika, web sitemizi, mobil uygulamalarımızı ve diğer dijital platformlarımızı kullanırken toplanan verileri kapsar. Hizmetlerimizi kullanarak bu gizlilik politikasını kabul etmiş olursunuz.
                </p>
                <p className="text-gray-600 mb-4">
                  Politikamızı zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda sizi bilgilendireceğiz. Bu politikanın son güncellenme tarihi: [04.03.2025].
                </p>
              </section>

              <section id="toplanan-veriler" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Toplanan Veriler</h2>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Doğrudan Sağlanan Veriler</h3>
                <p className="text-gray-600 mb-4">
                  Hizmetlerimizi kullanırken doğrudan bize sağladığınız veriler:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Kimlik bilgileri (ad, soyad, T.C. kimlik numarası)</li>
                  <li>İletişim bilgileri (e-posta, telefon, adres)</li>
                  <li>Şirket bilgileri (şirket adı, vergi numarası, adres)</li>
                  <li>Fatura ve ödeme bilgileri</li>
                  <li>Hesap tercihleri ve ayarları</li>
                  <li>Müşteri hizmetleri ile yapılan görüşmeler</li>
                  <li>Geri bildirimler ve değerlendirmeler</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Otomatik Toplanan Veriler</h3>
                <p className="text-gray-600 mb-4">
                  Hizmetlerimizi kullanırken otomatik olarak toplanan veriler:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>IP adresi ve konum bilgileri</li>
                  <li>Cihaz bilgileri (işletim sistemi, tarayıcı türü)</li>
                  <li>Kullanım verileri (tıklama, görüntüleme, gezinme)</li>
                  <li>Performans ve hata raporları</li>
                  <li>Çerez ve benzer teknolojiler aracılığıyla toplanan veriler</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Üçüncü Taraflardan Alınan Veriler</h3>
                <p className="text-gray-600 mb-4">
                  Güvenilir üçüncü taraflardan alabileceğimiz veriler:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Reklam ve analitik ortaklarından alınan veriler</li>
                  <li>Sosyal medya platformlarından alınan veriler</li>
                  <li>Kamuya açık kaynaklardan alınan veriler</li>
                </ul>
              </section>

              <section id="veri-kullanimi" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Veri Kullanımı</h2>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Hizmet Sağlama ve İyileştirme</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Hesabınızın oluşturulması ve yönetimi</li>
                  <li>Hizmetlerimizin sunulması ve özelleştirilmesi</li>
                  <li>Müşteri desteği sağlanması</li>
                  <li>Hizmet kalitesinin artırılması</li>
                  <li>Teknik sorunların çözülmesi</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. İletişim ve Pazarlama</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Hizmet güncellemeleri hakkında bilgilendirme</li>
                  <li>Özelleştirilmiş pazarlama iletileri gönderme</li>
                  <li>Müşteri memnuniyeti araştırmaları</li>
                  <li>Etkinlik ve kampanya duyuruları</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Analiz ve İyileştirme</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Kullanım istatistiklerinin analizi</li>
                  <li>Hizmet performansının ölçümü</li>
                  <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                  <li>Yeni özellik ve hizmetlerin geliştirilmesi</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Yasal Yükümlülükler</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Yasal gerekliliklerin yerine getirilmesi</li>
                  <li>Dolandırıcılık ve kötüye kullanımın önlenmesi</li>
                  <li>Güvenlik ihlallerinin tespiti ve önlenmesi</li>
                  <li>Yasal hakların korunması</li>
                </ul>
              </section>

              <section id="veri-paylasimi" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Veri Paylaşımı</h2>
                <p className="text-gray-600 mb-4">
                  Kişisel verilerinizi üçüncü taraflarla sadece aşağıdaki durumlarda paylaşırız:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Yasal zorunluluk durumunda</li>
                  <li>Açık rızanız olması halinde</li>
                  <li>Hizmet sağlayıcılarımızla (veri işleme sözleşmesi kapsamında)</li>
                  <li>Şirket birleşmesi veya satın alınması durumunda</li>
                </ul>
              </section>

              <section id="veri-guvenligi" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Veri Güvenliği</h2>
                <p className="text-gray-600 mb-4">
                  Verilerinizi korumak için aşağıdaki önlemleri alıyoruz:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>SSL/TLS şifreleme</li>
                  <li>Güvenlik duvarları ve antivirüs sistemleri</li>
                  <li>Düzenli güvenlik değerlendirmeleri</li>
                  <li>Çalışan gizlilik eğitimleri</li>
                  <li>Veri erişim kontrolü</li>
                </ul>
              </section>

              <section id="cerezler" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Çerezler</h2>
                
                <p className="text-gray-600 mb-4">
                  Çerezler, web sitemizin daha etkili çalışmasını sağlayan küçük metin dosyalarıdır. Aşağıdaki çerez türlerini kullanmaktayız:
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Zorunlu Çerezler</h3>
                <p className="text-gray-600 mb-4">
                  Web sitemizin temel işlevlerini yerine getirmek için gerekli olan çerezlerdir. Bu çerezler olmadan web sitemiz düzgün çalışmaz.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Analitik Çerezler</h3>
                <p className="text-gray-600 mb-4">
                  Ziyaretçilerin web sitemizi nasıl kullandığını anlamamızı sağlayan çerezlerdir. Bu bilgiler site performansını iyileştirmek için kullanılır.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. İşlevsellik Çerezleri</h3>
                <p className="text-gray-600 mb-4">
                  Dil tercihi gibi kullanıcı seçimlerini hatırlamamızı sağlayan çerezlerdir.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Pazarlama Çerezleri</h3>
                <p className="text-gray-600 mb-4">
                  Reklam ve pazarlama faaliyetlerini kişiselleştirmek için kullanılan çerezlerdir. Bu çerezleri devre dışı bırakabilirsiniz.
                </p>

                <p className="text-gray-600 mt-6">
                  Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilirsiniz. Ancak bazı çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.
                </p>
              </section>

              <section id="kullanici-haklari" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Kullanıcı Hakları</h2>
                <p className="text-gray-600 mb-4">
                  KVKK, GDPR ve CCPA kapsamında sahip olduğunuz haklar:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Verilerinize erişim hakkı</li>
                  <li>Verilerinizi düzeltme hakkı</li>
                  <li>Verilerinizin silinmesini talep etme hakkı</li>
                  <li>Veri işlemeyi kısıtlama hakkı</li>
                  <li>Veri taşınabilirliği hakkı</li>
                  <li>İtiraz etme hakkı</li>
                </ul>
              </section>

              <section id="iletisim" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>İletişim</h2>
                <p className="text-gray-600 mb-4">
                  Gizlilik politikamız hakkında sorularınız için bize ulaşabilirsiniz:
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