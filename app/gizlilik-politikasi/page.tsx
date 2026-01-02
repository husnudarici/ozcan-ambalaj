import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Özcan Ambalaj",
  description:
    "Özcan Ambalaj gizlilik politikası ve kişisel veri kullanımı hakkında bilgilendirme.",
  alternates: {
    canonical: 'https://www.ozcanambalaj.com/gizlilik-politikasi',
  },
  openGraph: {
    title: 'Gizlilik Politikası | Özcan Ambalaj',
    description: 'Özcan Ambalaj gizlilik politikası ve kişisel veri kullanımı hakkında bilgilendirme.',
    url: 'https://www.ozcanambalaj.com/gizlilik-politikasi',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Gizlilik Politikası | Özcan Ambalaj',
    description: 'Özcan Ambalaj gizlilik politikası ve kişisel veri kullanımı hakkında bilgilendirme.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-secondary py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Gizlilik Politikası</h1>
        <p className="text-gray-400">
          Kişisel verilerin korunması ve kullanımına dair özet bilgilendirme.
        </p>
      </div>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-6">
          <p>
            Özcan Ambalaj, iletişim formu ve teklif süreçlerinde paylaştığınız
            bilgileri yalnızca taleplerinizi yanıtlamak amacıyla kullanır.
          </p>
          <p>
            Toplanan veriler, yasal yükümlülükler ve hizmetin yürütülmesi için
            gerekli durumlar dışında üçüncü taraflarla paylaşılmaz.
          </p>
          <p>
            Verilerin güncellenmesi veya silinmesi talepleriniz için bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </Section>
    </>
  );
}
