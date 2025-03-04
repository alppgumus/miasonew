import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miaso.co'),
  title: 'Miaso | Dijital Dönüşümünüzün Mimarı',
  description: 'Miaso, dijital dönüşüm sürecinizde yanınızda. Web sitesi, mobil uygulama, e-ticaret çözümleri ve dijital pazarlama hizmetleri sunuyoruz.',
  keywords: "dijital dönüşüm, teknoloji çözümleri, web tasarım, e-ticaret çözümleri, mobil uygulama geliştirme, dijital pazarlama, sosyal medya yönetimi, kurumsal çözümler, yazılım geliştirme, dijital ajans",
  authors: [{ name: "Miaso" }],
  creator: "Miaso",
  publisher: "Miaso",
  robots: "index, follow",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon.ico',
    },
  },
  alternates: {
    canonical: "https://miaso.co",
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={redHat.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
