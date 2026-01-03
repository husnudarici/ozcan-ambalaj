import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { PRODUCT_CATALOG, getProductBySlug } from "@/data/products";
import { ProductSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

type PageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return PRODUCT_CATALOG.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Ürün bulunamadı | Özcan Ambalaj",
      description: "Aradığınız ürün sayfası bulunamadı.",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: `https://www.ozcanambalaj.com/urunler/${params.slug}`,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [{ url: product.image, alt: product.title, width: 1200, height: 630 }],
      url: `https://www.ozcanambalaj.com/urunler/${params.slug}`,
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.description,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const tagStyles: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
    purple: "bg-purple-100 text-purple-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
  };

  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: 'https://www.ozcanambalaj.com' },
    { name: 'Ürünler', url: 'https://www.ozcanambalaj.com/urunler' },
    { name: product.title, url: `https://www.ozcanambalaj.com/urunler/${params.slug}` }
  ];

  return (
    <>
      <ProductSchema
        name={product.title}
        description={product.overview}
        image={product.image}
        url={`https://www.ozcanambalaj.com/urunler/${params.slug}`}
        category={product.category}
        lowPrice={product.lowPrice}
        highPrice={product.highPrice}
        offerCount={product.offerCount}
        aggregateRating={product.aggregateRating}
        reviews={product.reviews}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link href="/urunler" className="text-sm text-gray-300 hover:text-white">
            ← Tüm ürünler
          </Link>
          <div className="mt-6 flex flex-col gap-4">
            <span className="text-primary-light text-sm font-bold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black">{product.title}</h1>
            <p className="text-gray-300 max-w-3xl text-lg">{product.summary}</p>
            <div className="flex flex-wrap items-center gap-3">
              {product.tag && (
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${tagStyles[product.tagColor || "blue"]}`}
                >
                  {product.tag}
                </span>
              )}
              {product.minOrder && (
                <span className="text-xs font-semibold text-gray-300">
                  Min. {product.minOrder}
                </span>
              )}
              <span className="text-xs font-semibold text-gray-300">
                Sultangazi, İstanbul üretim
              </span>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-secondary">Ürün Özeti</h2>
            <p className="text-gray-600 leading-relaxed">{product.overview}</p>
            <div className="bg-surface-light rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Neden Özcan Ambalaj?
              </h3>
              <p className="text-gray-600">
                Sultangazi İstanbul'daki üretim hattımızla oluklu mukavva, koli ve
                kutu ihtiyaçlarınıza hızlı termin ve stabil kalite sunuyoruz.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 shadow-lg bg-gray-100 aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={1200}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-surface-light">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-secondary">Öne Çıkan Özellikler</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.highlights.map((highlight, index) => (
            <div
              key={`${product.slug}-highlight-${index}`}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-secondary mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Kullanım Alanları</h2>
            <ul className="space-y-3 text-gray-600">
              {product.useCases.map((item, index) => (
                <li key={`${product.slug}-use-${index}`} className="flex gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Teknik Özellikler
            </h2>
            <div className="bg-surface-light rounded-2xl border border-gray-100 p-6">
              <dl className="space-y-4">
                {product.specs.map((spec, index) => (
                  <div
                    key={`${product.slug}-spec-${index}`}
                    className="flex items-start justify-between gap-4"
                  >
                    <dt className="text-sm font-semibold text-gray-500">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-bold text-secondary text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-light">
        <div className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="relative z-10 px-6 py-14 md:py-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sultangazi İstanbul'da hızlı üretim ve teslimat
            </h2>
            <p className="text-blue-50 text-lg max-w-2xl mb-8">
              {product.title} için ölçü, baskı ve adet bilgisi ile teklif alabilirsiniz.
              Oluklu mukavva koli, kutu ve ambalaj çözümlerimizle yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/iletisim"
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-white text-primary text-base font-bold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Teklif Alın
              </Link>
              <Link
                href="/urunler"
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-blue-800/40 text-white border border-white/20 text-base font-bold hover:bg-blue-800/60 transition-colors backdrop-blur-sm"
              >
                Diğer Ürünler
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
