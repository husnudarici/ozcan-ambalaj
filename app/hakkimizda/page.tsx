import AboutFeature from '@/features/about/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal | Özcan Ambalaj',
  description: "Özcan Ambalaj hakkında detaylı bilgi. Misyonumuz, vizyonumuz, kalite politikamız ve ambalaj sektöründeki 25 yıllık başarı hikayemiz.",
  keywords: "kurumsal, hakkımızda, ambalaj fabrikası, bursa kutu üreticisi, özcan ambalaj tarihçe"
};

export default function AboutPage() {
  return <AboutFeature />;
}