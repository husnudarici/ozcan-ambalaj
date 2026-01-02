import React from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { STATS } from '@/constants';
import { PRODUCT_CATALOG } from '@/data/products';

const Home: React.FC = () => {
  const featuredProducts = PRODUCT_CATALOG.slice(0, 4);
  const tagTextStyles: Record<string, string> = {
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-600",
    red: "text-red-600",
    purple: "text-purple-600",
    yellow: "text-yellow-600",
    gray: "text-gray-600",
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div 
            className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center shadow-2xl"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1920&auto=format&fit=crop')` 
            }}
          >
            <div className="relative z-10 w-full max-w-4xl px-8 md:px-16 flex flex-col gap-6">
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                Kutunun Ötesinde <br/>
                <span className="text-primary-light">Bir Hikaye</span>
              </h1>
              <p className="text-gray-100 text-lg md:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
                1995'ten beri ambalaj sektöründe güven, kalite ve yenilik sunuyoruz. Özcan Ambalaj olarak her pakete değer katıyoruz.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/urunler" className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary-dark text-white text-lg font-bold shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
                  Ürünleri Keşfet
                </Link>
                <Link href="/iletisim" className="flex items-center justify-center rounded-lg h-14 px-8 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white text-lg font-bold transition-all">
                  Bize Ulaşın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Biz Kimiz?</span>
          <h2 className="text-secondary text-3xl md:text-4xl font-bold leading-tight mb-6">
            Çeyrek Asırlık Tecrübe, Geleceğe Yönelik Vizyon
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Özcan Ambalaj, İstanbul Sultangazi’de oluklu mukavva ve karton kutu üretimi alanında faaliyet gösteren bir ambalaj firmasıdır. İhtiyaca özel ölçülerde ürettiğimiz oluklu mukavva kutular ile ürünlerin taşınması, depolanması ve sevkiyatı için güvenilir ambalaj çözümleri sunuyoruz.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Kaliteli hammadde kullanımı, düzenli üretim süreci ve zamanında teslimat anlayışımız sayesinde, küçük ve orta ölçekli işletmelerin ambalaj ihtiyaçlarına pratik ve ekonomik çözümler üretmeyi amaçlıyoruz.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            İstanbul içi hızlı üretim ve teslimat avantajımız ile; e-ticaret, üretim ve lojistik alanlarında faaliyet gösteren firmalara oluklu mukavva kutu, özel kesim karton kutu ve baskılı ambalaj çözümleri sunmaktayız.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <div className="w-full bg-surface-light border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 text-center group">
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                </div>
                <p className="text-4xl font-black text-secondary mb-1">{stat.value}</p>
                <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex flex-col gap-6 md:w-1/3 top-24">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wide">Kalite Standartları</span>
            </div>
            <h2 className="text-secondary text-3xl sm:text-4xl font-extrabold leading-tight">
              Neden <br/>Özcan Ambalaj?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sektördeki 20 yılı aşkın tecrübemizle, işletmeniz için en güvenilir ve yenilikçi paketleme çözümlerini sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-2/3">
            <div className="p-8 rounded-2xl border border-gray-100 bg-surface-light hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Üretimden teslimata kadar optimize edilmiş lojistik süreçlerimizle zamanında teslimat garantisi.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-surface-light hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
               <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-3xl">straighten</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Özel Boyutlandırma</h3>
              <p className="text-gray-600">Standart kalıpların ötesinde, ürününüze milimetrik uyum sağlayan özel kesim ve tasarım kutular.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-surface-light hover:border-green-500/50 transition-all duration-300 hover:shadow-xl sm:col-span-2">
               <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 text-green-600">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Çevre Dostu Üretim</h3>
              <p className="text-gray-600">%100 geri dönüştürülebilir malzemeler kullanarak doğayı koruyor, karbon ayak izinizi azaltmanıza yardımcı oluyoruz.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Products */}
      <Section className="bg-surface-light">
        <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mb-10 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-secondary text-3xl font-bold tracking-tight mb-2">Öne Çıkan Ürünlerimiz</h2>
            <p className="text-gray-600">Farklı sektörler için geliştirdiğimiz popüler ambalaj çözümleri.</p>
          </div>
          <Link href="/urunler" className="text-primary hover:text-primary-dark font-bold inline-flex items-center gap-1 group">
            Tüm Ürünleri Gör 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
             <Link key={product.slug} href={`/urunler/${product.slug}`} className="group flex flex-col gap-3">
              <div className="w-full aspect-square rounded-xl bg-white border border-gray-200 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                {product.tag && (
                  <div className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded bg-white/90 backdrop-blur-sm shadow-sm ${tagTextStyles[product.tagColor || "blue"]}`}>
                    {product.tag}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-1">{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="relative z-10 px-6 py-16 md:py-20 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projeniz için En İyi Çözümü Bulalım</h2>
            <p className="text-blue-50 text-lg max-w-2xl mb-10">
              Özel ölçü, baskılı kutu veya standart koliler. İhtiyacınız ne olursa olsun, uzman ekibimiz size yardımcı olmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="flex items-center justify-center rounded-lg h-14 px-10 bg-white text-primary text-lg font-bold hover:bg-gray-50 transition-colors shadow-lg">
                İletişime Geç
              </Link>
              <Link href="/urunler" className="flex items-center justify-center rounded-lg h-14 px-10 bg-blue-800/40 text-white border border-white/20 text-lg font-bold hover:bg-blue-800/60 transition-colors backdrop-blur-sm">
                Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
