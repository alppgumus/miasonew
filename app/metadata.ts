import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miaso | Dijital Dönüşümünüzün Mimarı',
  description: 'Miaso, dijital dönüşüm sürecinizde yanınızda. Web sitesi, mobil uygulama, e-ticaret çözümleri ve dijital pazarlama hizmetleri sunuyoruz.',
  keywords: "dijital dönüşüm, teknoloji çözümleri, web tasarım, e-ticaret çözümleri, mobil uygulama geliştirme, dijital pazarlama, sosyal medya yönetimi, kurumsal çözümler, yazılım geliştirme, dijital ajans",
  openGraph: {
    type: "website",
    url: "https://miaso.co",
    title: "Miaso | Dijital Dönüşüm ve Teknoloji Çözümleri",
    description: "360° dijital dönüşüm çözümleriyle işletmenizi geleceğe taşıyoruz. Profesyonel teknoloji ve yazılım çözümleri için Miaso yanınızda.",
    siteName: "Miaso",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Miaso - Dijital Dönüşüm ve Teknoloji Çözümleri"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miaso.co",
    creator: "@miaso.co",
    title: "Miaso | Dijital Dönüşüm ve Teknoloji Çözümleri",
    description: "360° dijital dönüşüm çözümleriyle işletmenizi geleceğe taşıyoruz. Profesyonel teknoloji ve yazılım çözümleri için Miaso yanınızda.",
    images: ["/og-image.jpg"],
  },
}; 