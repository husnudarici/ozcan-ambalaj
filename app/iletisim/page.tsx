import ContactFeature from '@/features/contact/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Özcan Ambalaj',
  description: "Özcan Ambalaj iletişim bilgileri, adres ve telefon numarası. Toptan koli ve özel kutu siparişleriniz için bize ulaşın.",
  keywords: "özcan ambalaj iletişim, koli siparişi, ambalaj fiyat teklifi, bursa ambalaj iletişim"
};

export default function ContactPage() {
  return <ContactFeature />;
}