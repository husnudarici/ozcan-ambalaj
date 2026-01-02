import HomeFeature from '@/features/home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ana Sayfa | Özcan Ambalaj',
  description: "Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri. 1995'ten beri güvenle.",
  keywords: "ambalaj, kutu üretimi, oluklu mukavva, koli, sultangazi ambalaj, istanbul ambalaj, toptan koli, özel kutu",
  alternates: {
    canonical: 'https://www.ozcanambalaj.com',
  },
  openGraph: {
    title: 'Ana Sayfa | Özcan Ambalaj',
    description: "Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri. 1995'ten beri güvenle.",
    url: 'https://www.ozcanambalaj.com',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ana Sayfa | Özcan Ambalaj',
    description: "Özcan Ambalaj - Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri. 1995'ten beri güvenle.",
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  return <HomeFeature />;
}