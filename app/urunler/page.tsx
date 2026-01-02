import ProductsFeature from "@/features/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler | Özcan Ambalaj",
  description:
    "Sultangazi İstanbul'da oluklu mukavva, koli ve kutu çözümleri. Kumanya kolisi, taşıma kolisi, baskılı koli, pizza kutusu ve özel kesim ambalajlar.",
  keywords:
    "Sultangazi ambalaj, oluklu mukavva, koli, kutu, baskılı koli, pizza kutusu, kesimli kutu, Özcan Ambalaj",
  alternates: {
    canonical: 'https://www.ozcanambalaj.com/urunler',
  },
  openGraph: {
    title: 'Ürünler | Özcan Ambalaj',
    description: "Sultangazi İstanbul'da oluklu mukavva, koli ve kutu çözümleri. Kumanya kolisi, taşıma kolisi, baskılı koli, pizza kutusu ve özel kesim ambalajlar.",
    url: 'https://www.ozcanambalaj.com/urunler',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ürünler | Özcan Ambalaj',
    description: "Sultangazi İstanbul'da oluklu mukavva, koli ve kutu çözümleri. Kumanya kolisi, taşıma kolisi, baskılı koli, pizza kutusu ve özel kesim ambalajlar.",
    images: ['/og-image.jpg'],
  },
};

export default function ProductsPage() {
  return <ProductsFeature />;
}
