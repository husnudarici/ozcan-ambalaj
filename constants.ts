import { NavLink, Product, StatItem, Testimonial, TimelineItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Kurumsal', path: '/hakkimizda' },
  { label: 'Ürünler', path: '/urunler' },
  { label: 'Referanslar', path: '/referanslar' },
  { label: 'İletişim', path: '/iletisim' },
];

export const STATS: StatItem[] = [
  { value: '25+', label: 'Yıllık Tecrübe', icon: 'calendar_month' },
  { value: '1000+', label: 'Mutlu Müşteri', icon: 'groups' },
  { value: '50M+', label: 'Yıllık Kutu Üretimi', icon: 'inventory_2' },
  { value: '%100', label: 'Geri Dönüştürülebilir', icon: 'recycling' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Standart A-Box',
    category: 'Standart',
    description: 'En yaygın taşıma ve depolama kolileri. Dayanıklı yapısıyla lojistik süreçlerinizi güvene alır.',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800&auto=format&fit=crop',
    minOrder: '100 Adet',
    tag: 'Stokta',
    tagColor: 'blue'
  },
  {
    id: '2',
    title: 'Özel Kesimli Kutu',
    category: 'Kesimli',
    description: 'Ürününüzün şekline tam uyum sağlayan, bıçaklı kalıplarla üretilen özel tasarım kutular.',
    image: 'https://images.unsplash.com/photo-1632514931326-7784b2518e38?q=80&w=800&auto=format&fit=crop',
    minOrder: 'Özel Sipariş',
    tag: 'Özel Tasarım',
    tagColor: 'purple'
  },
  {
    id: '3',
    title: 'Pizza ve Gıda Kutusu',
    category: 'Gıda',
    description: 'Gıda ile temasa uygun, ısıyı koruyan ve baskıya uygun materyalden üretilen servis kutuları.',
    image: 'https://images.unsplash.com/photo-1595240366838-8c6328b939d8?q=80&w=800&auto=format&fit=crop',
    minOrder: '500 Adet',
    tag: 'Gıda Sertifikalı',
    tagColor: 'green'
  },
  {
    id: '4',
    title: 'E-Ticaret Kutuları',
    category: 'E-Ticaret',
    description: 'Kargo sürecinde ürünlerinizi koruyan, kolay kurulumlu ve marka baskılı gönderi kutuları.',
    image: 'https://images.unsplash.com/photo-1629026707321-d83042457c3d?q=80&w=800&auto=format&fit=crop',
    minOrder: '200 Adet',
    tag: 'Popüler',
    tagColor: 'orange'
  },
  {
    id: '5',
    title: 'Ağır Hizmet Kolisi',
    category: 'Endüstriyel',
    description: 'İhracat ve ağır sanayi yükleri için triplex (üç dalga) mukavvadan üretilen ekstra sağlam koliler.',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop',
    minOrder: '50 Adet',
    tag: 'Triplex',
    tagColor: 'red'
  },
  {
    id: '6',
    title: 'Ofset Baskılı Kutu',
    category: 'Ofset',
    description: 'Yüksek çözünürlüklü baskı kalitesiyle ürününüzün rafta dikkat çekmesini sağlayan lamine kutular.',
    image: 'https://images.unsplash.com/photo-1628135804791-d85c2c776077?q=80&w=800&auto=format&fit=crop',
    minOrder: 'Özel Sipariş',
    tag: 'Lamine',
    tagColor: 'yellow'
  }
];

export const TIMELINE: TimelineItem[] = [
  { year: '1995', title: 'İlk Adım', description: 'Sultangazi İstanbul\'da küçük bir atölyede oluklu mukavva üretimine başladık. İlk makinemiz ve 5 çalışanımızla yola çıktık.', tag: 'Kuruluş' },
  { year: '2005', title: 'Fabrika Yatırımı', description: 'Artan talep üzerine 5.000 m²\'lik ilk modern fabrikamıza taşındık. Üretim kapasitemizi 10 katına çıkardık.', tag: 'Büyüme' },
  { year: '2015', title: 'Dünyaya Açılma', description: 'Avrupa pazarına ilk ihracatımızı gerçekleştirdik. Kalite standartlarımızı uluslararası sertifikalarla belgeledik.', tag: 'İhracat' },
  { year: '2023', title: 'Yeşil Enerji', description: 'Fabrika çatımıza kurduğumuz güneş enerjisi santrali ile enerji ihtiyacımızın %80\'ini yenilenebilir kaynaklardan sağlıyoruz.', tag: 'Gelecek' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: 'Özcan Ambalaj ile 5 yıldır çalışıyoruz. Gıda kutularındaki baskı kalitesi ve zamanında teslimat konusunda hiçbir sorun yaşamadık. Kesinlikle tavsiye ederim.',
    author: 'Mehmet K.',
    role: 'Satın Alma Müdürü',
    company: 'GurmeGıda',
    rating: 5
  },
  {
    id: '2',
    content: 'E-ticaret operasyonlarımızda kullandığımız kargo kutularının dayanıklılığı sayesinde iade oranlarımız düştü. Özel tasarım desteği için teşekkürler.',
    author: 'Ayşe Y.',
    role: 'Operasyon Direktörü',
    company: 'ModaButik',
    rating: 5
  },
  {
    id: '3',
    content: 'Ağır sanayi parçalarımız için mukavemeti yüksek, özel ölçü kolilere ihtiyacımız vardı. Teknik ekip çok yardımcı oldu ve tam istediğimiz ürünü ürettiler.',
    author: 'Can E.',
    role: 'Fabrika Müdürü',
    company: 'MetalSan',
    rating: 4.5
  }
];