export type ProductDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  image: string;
  minOrder?: string;
  lowPrice?: number;
  highPrice?: number;
  offerCount?: number;
  aggregateRating?: {
    ratingValue: number;
    reviewCount?: number;
    ratingCount?: number;
  };
  reviews?: {
    author: string;
    datePublished: string;
    reviewBody: string;
    ratingValue: number;
  }[];
  tag?: string;
  tagColor?: "blue" | "green" | "orange" | "red" | "purple" | "yellow" | "gray";
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  highlights: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
};

export const PRODUCT_CATALOG: ProductDetail[] = [
  {
    slug: "kumanya-kolisi",
    title: "Kumanya Kolisi",
    category: "Koli Çözümleri",
    summary:
      "Toplu dağıtımlar için dayanıklı, hijyenik ve ekonomik oluklu mukavva kumanya kolisi.",
    overview:
      "Sultangazi İstanbul'da ürettiğimiz kumanya kolileri, sosyal yardım ve kurumsal dağıtımlarda güvenli ambalaj çözümü sunar. Oluklu mukavva yapısı sayesinde koli taşıma sırasında ürünler korunur, kutu formu hızlı kurulum ve istifleme kolaylığı sağlar.",
    image: "/images/products/kumanya-kolisi.jpg",
    minOrder: "100 Adet",
    tag: "Sosyal Destek",
    tagColor: "green",
    seo: {
      title: "Kumanya Kolisi | Sultangazi İstanbul Oluklu Mukavva Koli",
      description:
        "Sultangazi İstanbul'da kumanya kolisi üretimi. Dayanıklı oluklu mukavva koli ve ambalaj çözümleri ile hızlı teslimat.",
      keywords:
        "kumanya kolisi, oluklu mukavva, koli, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Güçlü Taşıma",
        description:
          "B/C dalga oluklu mukavva ile ağır paketlerde bile formunu korur.",
      },
      {
        title: "Hızlı Kurulum",
        description:
          "Düz sevk ve kolay katlama sayesinde saha dağıtımlarında zaman kazandırır.",
      },
      {
        title: "Kurumsal Baskı",
        description:
          "İsteğe göre logo ve kurum bilgisi baskısıyla markanızı öne çıkarır.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva (B/C dalga)" },
      { label: "Baskı", value: "1-4 renk flexo (opsiyonel)" },
      { label: "Ebat", value: "Özel ölçü üretim" },
      { label: "Sevkiyat", value: "Düz sevk, hızlı kurulum" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Belediye ve STK yardım paketleri",
      "Kurumsal kampanya dağıtımları",
      "Okul ve kurum gıda paketleri",
      "Market ve kantin sevkiyatları",
    ],
  },
  {
    slug: "tasima-kolisi",
    title: "Taşıma Kolisi",
    category: "Koli Çözümleri",
    summary:
      "Lojistik süreçlerde darbe dayanımı yüksek, güvenli taşıma kolisi.",
    overview:
      "Sultangazi İstanbul'daki üretimimizden çıkan taşıma kolileri, ürünlerinizi sevkiyat boyunca korur. Oluklu mukavva yapısı sayesinde koli, kutu ve ambalaj ihtiyaçlarında sağlamlık ve ekonomik denge sağlar.",
    image: "/images/products/tasima-kolisi.jpg",
    minOrder: "100 Adet",
    tag: "Lojistik",
    tagColor: "blue",
    seo: {
      title: "Taşıma Kolisi | Sultangazi İstanbul Koli ve Ambalaj",
      description:
        "Sultangazi İstanbul taşıma kolisi üretimi. Oluklu mukavva koli ve kutu çözümleri ile güvenli lojistik.",
      keywords:
        "taşıma kolisi, oluklu mukavva, koli, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Darbe Dayanımı",
        description:
          "Ürünleri taşıma sırasında sarsıntı ve ezilmelere karşı korur.",
      },
      {
        title: "İstiflenebilir",
        description:
          "Depo ve araç içinde üst üste dizimde formunu korur.",
      },
      {
        title: "Özel Ölçü",
        description:
          "Ürün ebadına göre kesim ve katlama ile minimum boşluk.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva (C/B dalga)" },
      { label: "Baskı", value: "Baskısız veya 1 renk flexo" },
      { label: "Kapanış", value: "Bant veya kilitli kapama" },
      { label: "Dayanım", value: "Sevkiyat için güçlendirilmiş" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "E-ticaret gönderileri",
      "Lojistik ve depolama",
      "Üretim hatları iç taşıma",
      "Perakende sevkiyat",
    ],
  },
  {
    slug: "baskili-koli",
    title: "Baskılı Koli",
    category: "Koli Çözümleri",
    summary:
      "Marka görünürlüğü için logo ve iletişim bilgisi baskılı koli çözümleri.",
    overview:
      "Sultangazi İstanbul'da baskılı koli üretimi ile ambalaj, koli ve kutu süreçlerinizi markalı hale getiriyoruz. Oluklu mukavva üzerinde net ve dayanıklı baskı ile kurumsal kimliğiniz sevkiyatta da görünür olur.",
    image: "/images/products/baskili-koli.jpg",
    minOrder: "200 Adet",
    tag: "Markalı",
    tagColor: "orange",
    seo: {
      title: "Baskılı Koli | Sultangazi İstanbul Oluklu Mukavva Ambalaj",
      description:
        "Sultangazi İstanbul baskılı koli üretimi. Logo baskılı oluklu mukavva koli ve kutu çözümleri.",
      keywords:
        "baskılı koli, oluklu mukavva, koli, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Net Baskı",
        description:
          "Flexo baskı ile logo, iletişim ve uyarı bilgileri görünür olur.",
      },
      {
        title: "Kurumsal İmaj",
        description:
          "Sevkiyat boyunca markanızın profesyonel görünmesini sağlar.",
      },
      {
        title: "Sürdürülebilir Ambalaj",
        description:
          "Geri dönüştürülebilir oluklu mukavva ile çevreye duyarlı.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva (B/C dalga)" },
      { label: "Baskı", value: "1-4 renk flexo" },
      { label: "Ebat", value: "Özel ölçü üretim" },
      { label: "Baskı Alanı", value: "Tek veya çok yüzey" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "E-ticaret markalı gönderiler",
      "Perakende sevkiyatları",
      "Fuar ve etkinlik paketleri",
      "Distribütör lojistiği",
    ],
  },
  {
    slug: "arsiv-koli",
    title: "Arşiv Koli",
    category: "Depolama & Arşiv",
    summary:
      "Dosya ve evrak düzeni için kapaklı, istiflenebilir arşiv kolisi.",
    overview:
      "Sultangazi İstanbul üretimi arşiv kolileri, ofis ve kurumlarda evrak düzenini sağlar. Oluklu mukavva yapısı sayesinde koli sağlam kalır, kutu formu ile depolama alanında kolay istiflenir.",
    image: "/images/products/arsiv-koli.jpg",
    minOrder: "100 Adet",
    tag: "Düzen",
    tagColor: "purple",
    seo: {
      title: "Arşiv Koli | Sultangazi İstanbul Kutu ve Ambalaj",
      description:
        "Sultangazi İstanbul arşiv koli üretimi. Oluklu mukavva kutu ve koli ile evrak depolama.",
      keywords:
        "arşiv koli, oluklu mukavva, koli, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Etiketlik Alanı",
        description:
          "Dosya takibi ve arşiv düzeni için pratik etiketleme.",
      },
      {
        title: "Kolay Taşıma",
        description:
          "Yan kulplar sayesinde evrak transferinde ergonomik kullanım.",
      },
      {
        title: "İstifleme",
        description:
          "Düzenli depolama için üst üste sağlam duruş.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva (E/B dalga)" },
      { label: "Kapasite", value: "A4 klasör uyumlu" },
      { label: "Kapanış", value: "Kapaklı tasarım" },
      { label: "Sevkiyat", value: "Düz sevk, hızlı kurulum" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Ofis arşiv düzeni",
      "Kurum ve belediye evrakları",
      "Hukuk ve mali müşavirlik arşivleri",
      "Arşiv taşıma projeleri",
    ],
  },
  {
    slug: "baskisiz-koli",
    title: "Baskısız Koli",
    category: "Koli Çözümleri",
    summary:
      "Ekonomik ve hızlı tedarik için standart baskısız koli seçenekleri.",
    overview:
      "Sultangazi İstanbul'da baskısız koli üretimi ile hızlı ve ekonomik ambalaj çözümleri sağlıyoruz. Oluklu mukavva koli ve kutu seçenekleri, stok ve sevkiyat süreçlerinde ideal bir temel çözüm sunar.",
    image: "/images/products/baskisiz-koli.jpg",
    minOrder: "50 Adet",
    tag: "Ekonomik",
    tagColor: "blue",
    seo: {
      title: "Baskısız Koli | Sultangazi İstanbul Oluklu Mukavva",
      description:
        "Sultangazi İstanbul baskısız koli üretimi. Ekonomik oluklu mukavva koli ve kutu çözümleri.",
      keywords:
        "baskısız koli, oluklu mukavva, koli, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Hızlı Üretim",
        description:
          "Standart kalıplar sayesinde kısa termin süresi.",
      },
      {
        title: "Maliyet Avantajı",
        description:
          "Baskısız üretim ile ekonomik ambalaj çözümü.",
      },
      {
        title: "Geniş Ölçü Seçeneği",
        description:
          "Ürün tipine göre farklı ebat ve dayanım.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva (E/B/C dalga)" },
      { label: "Baskı", value: "Baskısız" },
      { label: "Ebat", value: "Standart ve özel ölçüler" },
      { label: "Kullanım", value: "Genel amaçlı ambalaj" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Depo stoklama",
      "Üretim hattı iç taşıma",
      "E-ticaret gönderileri",
      "Toptan sevkiyat",
    ],
  },
  {
    slug: "kitap-kolisi",
    title: "Kitap Kolisi",
    category: "Koli Çözümleri",
    summary:
      "Ağır yükler için güçlendirilmiş, kitap taşımaya uygun koli.",
    overview:
      "Sultangazi İstanbul'da üretilen kitap kolileri, ağır ve hassas içeriklerde güvenli ambalaj sağlar. Oluklu mukavva gövde, koli ve kutu formunda kitapların köşe ve sırtlarını korur.",
    image: "/images/products/kitap-kolisi.jpg",
    minOrder: "100 Adet",
    tag: "Dayanım",
    tagColor: "red",
    seo: {
      title: "Kitap Kolisi | Sultangazi İstanbul Koli ve Ambalaj",
      description:
        "Sultangazi İstanbul kitap kolisi üretimi. Dayanıklı oluklu mukavva koli ve kutu çözümleri.",
      keywords:
        "kitap kolisi, oluklu mukavva, koli, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Ağır Yük Dayanımı",
        description:
          "Kalın dalga mukavva ile yüksek taşıma kapasitesi.",
      },
      {
        title: "Köşe Koruma",
        description:
          "Kitap kapaklarını ezilmelere karşı koruyan form.",
      },
      {
        title: "İstif Güvenliği",
        description:
          "Depo ve kargo istiflerinde deformasyon riskini azaltır.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva (C/BC dalga)" },
      { label: "Baskı", value: "Baskısız veya 1 renk" },
      { label: "Ebat", value: "Kitap ölçüsüne göre özel" },
      { label: "Kapanış", value: "Bant veya kilitli" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Yayıncılık sevkiyatları",
      "E-ticaret kitap gönderileri",
      "Kütüphane taşıma",
      "Arşiv taşımaları",
    ],
  },
  {
    slug: "kesimli-kutu",
    title: "Kesimli Kutu",
    category: "Özel Kesim Kutular",
    summary:
      "Ürüne özel kalıp ile üretilen, dikkat çekici kesimli kutu çözümleri.",
    overview:
      "Sultangazi İstanbul'da kesimli kutu üretimi ile ürünlerinize tam uyumlu ambalaj tasarlarız. Oluklu mukavva ve karton seçenekleriyle kutu, koli ve ambalaj ihtiyaçlarınıza özel kesim çözümler sunarız.",
    image: "/images/products/kesimli-kutu.jpg",
    minOrder: "500 Adet",
    tag: "Özel Kesim",
    tagColor: "orange",
    seo: {
      title: "Kesimli Kutu | Sultangazi İstanbul Özel Ambalaj",
      description:
        "Sultangazi İstanbul kesimli kutu üretimi. Özel kalıp ile oluklu mukavva kutu ve ambalaj çözümleri.",
      keywords:
        "kesimli kutu, özel kesim, oluklu mukavva, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Kalıp Özel Kesim",
        description:
          "Ürüne tam uyum sağlayan kesim ve katlama seçenekleri.",
      },
      {
        title: "Raf Sunumu",
        description:
          "Perakende raflarında dikkat çekici forma sahip tasarım.",
      },
      {
        title: "Güçlü Ambalaj",
        description:
          "Oluklu mukavva sayesinde hafif ama dayanıklı yapı.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Oluklu mukavva veya karton" },
      { label: "Baskı", value: "Flexo veya ofset (opsiyonel)" },
      { label: "Kalıp", value: "Özel bıçaklı kesim" },
      { label: "Ebat", value: "Ürüne özel ölçüler" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Perakende ürün kutuları",
      "Teşhir ve stand kutuları",
      "Promosyon ambalajları",
      "Hediyelik ürün paketleri",
    ],
  },
  {
    slug: "pizza-kutusu",
    title: "Pizza Kutusu",
    category: "Gıda Kutuları",
    summary:
      "Gıdaya uygun, sıcaklığı koruyan ve yağ bariyeri olan pizza kutusu.",
    overview:
      "Sultangazi İstanbul'da pizza kutusu üretimi ile gıda ambalajı ihtiyaçlarını karşılıyoruz. Oluklu mukavva ve gıdaya uygun karton seçenekleriyle kutu formu sıcaklığı korur, taşıma sırasında ürün bütünlüğünü sağlar.",
    image: "/images/products/pizza-kutusu.jpg",
    minOrder: "500 Adet",
    tag: "Gıda",
    tagColor: "green",
    seo: {
      title: "Pizza Kutusu | Sultangazi İstanbul Gıda Ambalajı",
      description:
        "Sultangazi İstanbul pizza kutusu üretimi. Gıdaya uygun oluklu mukavva kutu ve ambalaj çözümleri.",
      keywords:
        "pizza kutusu, gıda kutusu, oluklu mukavva, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Isı Koruma",
        description:
          "Sıcak servislerde ısıyı daha uzun süre muhafaza eder.",
      },
      {
        title: "Yağ Bariyeri",
        description:
          "Gıdaya uygun kaplama ile sızıntıyı azaltır.",
      },
      {
        title: "Baskılı Tasarım",
        description:
          "Logo ve kampanya baskıları ile marka görünürlüğü.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Gıdaya uygun karton/mukavva" },
      { label: "Baskı", value: "1-4 renk flexo/ofset" },
      { label: "Ebat", value: "26-36 cm arası seçenekler" },
      { label: "Kapanış", value: "Kilitli kapak" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Pizzacı ve restoran paket servisleri",
      "Kafe ve fast-food zincirleri",
      "Etkinlik ve toplu organizasyonlar",
      "Donuk ürün taşımaları",
    ],
  },
  {
    slug: "dipkilit-kutu",
    title: "Dipkilit Kutu",
    category: "Özel Kesim Kutular",
    summary:
      "Otomatik tabanlı, hızlı kurulumlu dipkilit kutu çözümleri.",
    overview:
      "Sultangazi İstanbul'da dipkilit kutu üretimi ile pratik ve sağlam ambalaj çözümleri sunuyoruz. Oluklu mukavva ve karton yapısı sayesinde kutu, koli ve ambalaj süreçlerinde hız ve dayanım sağlar.",
    image: "/images/products/dipkilit-kutu.jpg",
    minOrder: "500 Adet",
    tag: "Hızlı Kurulum",
    tagColor: "blue",
    seo: {
      title: "Dipkilit Kutu | Sultangazi İstanbul Ambalaj",
      description:
        "Sultangazi İstanbul dipkilit kutu üretimi. Otomatik tabanlı oluklu mukavva kutu ve ambalaj çözümleri.",
      keywords:
        "dipkilit kutu, otomatik taban, oluklu mukavva, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Otomatik Taban",
        description:
          "Kurulum süresini kısaltan kilitli taban yapısı.",
      },
      {
        title: "Şık Sunum",
        description:
          "Perakende raflarında düzenli ve premium görünüm.",
      },
      {
        title: "Stabil Durus",
        description:
          "Düz zeminde dengeli durur, ürünleri korur.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Karton veya oluklu mukavva" },
      { label: "Baskı", value: "Flexo/ofset (opsiyonel)" },
      { label: "Taban", value: "Dipkilit (auto-lock)" },
      { label: "Ebat", value: "Özel ölçü üretim" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Kozmetik ve kişisel bakım",
      "Hediyelik ürün ambalajları",
      "Küçük elektronik aksesuarlar",
      "Promosyon setleri",
    ],
  },
  {
    slug: "aksesuar-kutusu",
    title: "Aksesuar Kutusu",
    category: "Özel Kesim Kutular",
    summary:
      "Küçük ürünlerde premium sunum sağlayan aksesuar kutusu.",
    overview:
      "Sultangazi İstanbul'da aksesuar kutusu üretimi ile ürünlerinize premium bir ambalaj sunuyoruz. Oluklu mukavva ve karton seçenekleriyle kutu, koli ve ambalaj ihtiyaçlarında şık ve güvenli çözümler sağlarız.",
    image: "/images/products/aksesuar-kutusu.jpg",
    minOrder: "500 Adet",
    tag: "Premium",
    tagColor: "purple",
    seo: {
      title: "Aksesuar Kutusu | Sultangazi İstanbul Kutu ve Ambalaj",
      description:
        "Sultangazi İstanbul aksesuar kutusu üretimi. Şık ve dayanıklı oluklu mukavva kutu ve ambalaj çözümleri.",
      keywords:
        "aksesuar kutusu, oluklu mukavva, kutu, ambalaj, Sultangazi, İstanbul",
    },
    highlights: [
      {
        title: "Premium Görünüm",
        description:
          "Ürün değerini yükselten temiz hatlar ve kaliteli baskı.",
      },
      {
        title: "İç Bölme Opsiyonu",
        description:
          "Aksesuarları ayrı ve düzenli taşıyan iç tasarım.",
      },
      {
        title: "Marka Etkisi",
        description:
          "Logo ve desen baskıları ile raflarda dikkat çeker.",
      },
    ],
    specs: [
      { label: "Malzeme", value: "Karton veya oluklu mukavva" },
      { label: "Baskı", value: "Ofset veya flexo" },
      { label: "Ebat", value: "Küçük ve orta boy seçenekler" },
      { label: "Aksesuar", value: "İç bölme, pencere (opsiyonel)" },
      { label: "Lokasyon", value: "Sultangazi, İstanbul" },
    ],
    useCases: [
      "Takı ve bijuteri",
      "Telefon ve cihaz aksesuarları",
      "Hediyelik ürünler",
      "Kurumsal promosyon setleri",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  PRODUCT_CATALOG.find((product) => product.slug === slug);
