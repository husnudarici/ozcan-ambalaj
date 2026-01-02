import ProductsFeature from "@/features/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler | Özcan Ambalaj",
  description:
    "Sultangazi İstanbul'da oluklu mukavva, koli ve kutu çözümleri. Kumanya kolisi, taşıma kolisi, baskılı koli, pizza kutusu ve özel kesim ambalajlar.",
  keywords:
    "Sultangazi ambalaj, oluklu mukavva, koli, kutu, baskılı koli, pizza kutusu, kesimli kutu, Özcan Ambalaj",
};

export default function ProductsPage() {
  return <ProductsFeature />;
}
