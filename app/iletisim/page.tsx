import ContactFeature from '@/features/contact/Contact';
import { LocalBusinessSchema } from '@/components/SchemaMarkup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Özcan Ambalaj',
  description: "Özcan Ambalaj iletişim bilgileri, adres ve telefon numarası. Toptan koli ve özel kutu siparişleriniz için bize ulaşın.",
  keywords: "özcan ambalaj iletişim, koli siparişi, ambalaj fiyat teklifi, sultangazi ambalaj iletişim, istanbul ambalaj",
  alternates: {
    canonical: 'https://www.ozcanambalaj.com/iletisim',
  },
  openGraph: {
    title: 'İletişim | Özcan Ambalaj',
    description: "Özcan Ambalaj iletişim bilgileri, adres ve telefon numarası. Toptan koli ve özel kutu siparişleriniz için bize ulaşın.",
    url: 'https://www.ozcanambalaj.com/iletisim',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Özcan Ambalaj',
    description: "Özcan Ambalaj iletişim bilgileri, adres ve telefon numarası. Toptan koli ve özel kutu siparişleriniz için bize ulaşın.",
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <ContactFeature />
    </>
  );
}