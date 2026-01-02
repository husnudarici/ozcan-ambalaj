import React from "react";
import type { Metadata, Viewport } from "next";
import Layout from "@/components/Layout";
import { OrganizationSchema, WebSiteSchema } from "@/components/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ozcanambalaj.com'),
  title: "Özcan Ambalaj - Profesyonel Kutu ve Ambalaj Çözümleri",
  description: "Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri.",
  keywords: "ambalaj, kutu, koli, oluklu mukavva, istanbul ambalaj, özel kutu üretimi",
  authors: [{ name: "Özcan Ambalaj" }],
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.ozcanambalaj.com',
    siteName: 'Özcan Ambalaj',
    title: 'Özcan Ambalaj - Profesyonel Kutu ve Ambalaj Çözümleri',
    description: 'Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, ösel tasarım kutular ve endüstriyel ambalaj hizmetleri.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Özcan Ambalaj - Profesyonel Kutu ve Ambalaj Çözümleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Özcan Ambalaj - Profesyonel Kutu ve Ambalaj Çözümleri',
    description: 'Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: "#137fec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
