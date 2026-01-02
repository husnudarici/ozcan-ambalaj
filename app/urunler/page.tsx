import ProductsFeature from '@/features/products/Products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ürünlerimiz | Özcan Ambalaj',
  description: "Geniş ambalaj ürün yelpazemiz. A-Box koliler, özel kesimli kutular, pizza kutuları, e-ticaret kargo kutuları ve ofset baskılı kutu seçenekleri.",
  keywords: "koli çeşitleri, kargo kutusu, pizza kutusu, e-ticaret ambalajı, ofset baskılı kutu, a-box koli"
};

export default function ProductsPage() {
  return <ProductsFeature />;
}