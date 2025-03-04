import { Red_Hat_Display } from "next/font/google";
import Hero from '@/components/Hero'
import Platform from '@/components/Platform'
import Partners from '@/components/Partners'
import ArtificialIntelligence from '@/components/ArtificialIntelligence'
import WebDevelopment from '@/components/WebDevelopment'
import MetaGoogleAds from '@/components/MetaGoogleAds'
import CustomerConnection from '@/components/CustomerConnection'
import MobileDevelopment from '@/components/MobileDevelopment'
import Script from 'next/script'

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function Home() {
  return (
    <>
      <Script id="schema-markup" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Miaso",
            "url": "https://miaso.co",
            "logo": "https://miaso.co/miasologo.png",
            "description": "360° dijital dönüşüm ve teknoloji çözümleri sunan profesyonel dijital ajans",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            },
            "sameAs": [
              "https://www.instagram.com/miaso.co/",
              "https://www.linkedin.com/company/miaso/",
              "https://x.com/miaso.co"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offers": [
                {
                  "@type": "Offer",
                  "category": "Dijital Dönüşüm",
                  "name": "360° Dijital Dönüşüm Çözümleri",
                  "description": "İşletmenizi dijital dünyaya taşıyan kapsamlı teknoloji ve danışmanlık hizmetleri"
                },
                {
                  "@type": "Offer",
                  "category": "Yazılım Geliştirme",
                  "name": "Özel Yazılım Çözümleri",
                  "description": "Web uygulamaları, mobil uygulamalar ve kurumsal yazılım çözümleri"
                },
                {
                  "@type": "Offer",
                  "category": "E-Ticaret",
                  "name": "E-Ticaret Sistemleri",
                  "description": "Online satış sistemleri kurulumu ve yönetimi"
                },
                {
                  "@type": "Offer",
                  "category": "Dijital Pazarlama",
                  "name": "Dijital Pazarlama ve Reklam",
                  "description": "Sosyal medya yönetimi, SEO ve reklam kampanyaları"
                }
              ]
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Türkiye",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              }
            },
            "knowsAbout": [
              "Dijital Dönüşüm",
              "Web Geliştirme",
              "Mobil Uygulama Geliştirme",
              "E-Ticaret Sistemleri",
              "Dijital Pazarlama",
              "SEO Optimizasyonu",
              "Sosyal Medya Yönetimi",
              "UI/UX Tasarımı"
            ]
          }
        `}
      </Script>

      <main itemScope itemType="https://schema.org/WebPage">
        <div className="relative">
          <Hero />
          <Platform />
        </div>
        <Partners />
        <ArtificialIntelligence />
        <WebDevelopment />
        <MetaGoogleAds />
        <CustomerConnection />
        <MobileDevelopment />
      </main>
    </>
  )
}
