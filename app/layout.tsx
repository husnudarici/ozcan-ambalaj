import React from "react";
import type { Metadata, Viewport } from "next";
import Layout from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Özcan Ambalaj - Profesyonel Kutu ve Ambalaj Çözümleri",
  description: "Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri.",
  keywords: "ambalaj, kutu, koli, oluklu mukavva, istanbul ambalaj, özel kutu üretimi",
  authors: [{ name: "Özcan Ambalaj" }],
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
