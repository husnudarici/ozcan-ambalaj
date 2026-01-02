import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Özcan Ambalaj",
  description:
    "Özcan Ambalaj web sitesi kullanım koşulları ve genel bilgilendirme.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-secondary py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Kullanım Koşulları</h1>
        <p className="text-gray-400">
          Web sitemizin kullanımına ilişkin genel koşullar.
        </p>
      </div>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-6">
          <p>
            Bu web sitesini kullanarak içeriklerin bilgilendirme amaçlı olduğunu
            kabul etmiş sayılırsınız. Özcan Ambalaj, içeriklerde değişiklik yapma
            hakkını saklı tutar.
          </p>
          <p>
            Site üzerindeki metin, görsel ve tasarımlar izinsiz çoğaltılamaz veya
            ticari amaçla kullanılamaz.
          </p>
          <p>
            Sorularınız ve güncel bilgi talepleriniz için bizimle iletişime
            geçebilirsiniz.
          </p>
        </div>
      </Section>
    </>
  );
}
