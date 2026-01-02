import AboutFeature from '@/features/about/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal | Özcan Ambalaj',
  description: "Özcan Ambalaj hakkında detaylı bilgi. Misyonumuz, vizyonumuz, kalite politikamız ve ambalaj sektöründeki 25 yıllık başarı hikayemiz.",
  keywords: "kurumsal, hakkımızda, ambalaj fabrikası, sultangazi kutu üreticisi, istanbul ambalaj üretimi, özcan ambalaj tarihçe",
  alternates: {
    canonical: 'https://www.ozcanambalaj.com/hakkimizda',
  },
  openGraph: {
    title: 'Kurumsal | Özcan Ambalaj',
    description: "Özcan Ambalaj hakkında detaylı bilgi. Misyonumuz, vizyonumuz, kalite politikamız ve ambalaj sektöründeki 25 yıllık başarı hikayemiz.",
    url: 'https://www.ozcanambalaj.com/hakkimizda',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kurumsal | Özcan Ambalaj',
    description: "Özcan Ambalaj hakkında detaylı bilgi. Misyonumuz, vizyonumuz, kalite politikamız ve ambalaj sektöründeki 25 yıllık başarı hikayemiz.",
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return <AboutFeature />;
}