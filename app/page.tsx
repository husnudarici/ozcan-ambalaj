import HomeFeature from '@/features/home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ana Sayfa | Özcan Ambalaj',
  description: "Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri. 1995'ten beri güvenle.",
  keywords: "ambalaj, kutu üretimi, oluklu mukavva, koli, bursa ambalaj, toptan koli, özel kutu"
};

export default function HomePage() {
  return <HomeFeature />;
}