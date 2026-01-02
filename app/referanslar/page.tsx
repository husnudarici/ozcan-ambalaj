import ReferencesFeature from '@/features/references/References';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referanslar | Özcan Ambalaj',
  description: "Bize güvenen iş ortaklarımız ve müşterilerimiz. Özcan Ambalaj olarak sektörün önde gelen firmalarına çözüm ortağı olmaktan gurur duyuyoruz.",
  keywords: "özcan ambalaj referanslar, müşteri yorumları, ambalaj iş ortakları"
};

export default function ReferencesPage() {
  return <ReferencesFeature />;
}