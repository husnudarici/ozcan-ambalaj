import ReferencesFeature from '@/features/references/References';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referanslar | Özcan Ambalaj',
  description: "Bize güvenen iş ortaklarımız ve müşterilerimiz. Özcan Ambalaj olarak sektörün önde gelen firmalarına çözüm ortağı olmaktan gurur duyuyoruz.",
  keywords: "özcan ambalaj referanslar, müşteri yorumları, ambalaj iş ortakları",
  alternates: {
    canonical: 'https://www.ozcanambalaj.com/referanslar',
  },
  openGraph: {
    title: 'Referanslar | Özcan Ambalaj',
    description: "Bize güvenen iş ortaklarımız ve müşterilerimiz. Özcan Ambalaj olarak sektörün önde gelen firmalarına çözüm ortağı olmaktan gurur duyuyoruz.",
    url: 'https://www.ozcanambalaj.com/referanslar',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referanslar | Özcan Ambalaj',
    description: "Bize güvenen iş ortaklarımız ve müşterilerimiz. Özcan Ambalaj olarak sektörün önde gelen firmalarına çözüm ortağı olmaktan gurur duyuyoruz.",
    images: ['/og-image.jpg'],
  },
};

export default function ReferencesPage() {
  return <ReferencesFeature />;
}