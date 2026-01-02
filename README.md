# Özcan Ambalaj - Kurumsal Web Sitesi

Bu proje, **Özcan Ambalaj** firması için geliştirilmiş; modern, hızlı ve mobil uyumlu bir kurumsal web sitesidir. React, TypeScript ve Tailwind CSS teknolojileri kullanılarak tasarlanmıştır.

![Özcan Ambalaj Cover](https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1920&auto=format&fit=crop)

## 🚀 Özellikler

*   **Modern Arayüz:** Kullanıcı deneyimini ön planda tutan, estetik ve profesyonel tasarım.
*   **Mobil Uyumlu (Responsive):** Tüm cihazlarda (Telefon, Tablet, Masaüstü) kusursuz görünüm.
*   **Hızlı Performans:** Vite altyapısı ile optimize edilmiş hızlı yükleme süreleri.
*   **İletişim Formu:** EmailJS entegrasyonu ile sunucu gerektirmeyen, doğrudan e-posta gönderimi.
*   **Dinamik İçerik:** Kolay yönetilebilir ürün ve referans veri yapısı.
*   **SEO Dostu:** Anlamsal HTML yapısı ve optimize edilmiş meta etiketleri.

## 🛠️ Teknoloji Yığını

*   **Core:** [React 18](https://react.dev/)
*   **Dil:** [TypeScript](https://www.typescriptlang.org/)
*   **Stil:** [Tailwind CSS](https://tailwindcss.com/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Yönlendirme:** [React Router v6](https://reactrouter.com/)
*   **Form/Mail:** [EmailJS](https://www.emailjs.com/)
*   **İkonlar:** [Material Symbols](https://fonts.google.com/icons)

## 📂 Klasör Yapısı

```
ozcan-ambalaj/
├── components/      # Ortak kullanılan UI bileşenleri (Layout, Section vb.)
├── features/        # Sayfa bazlı özellik modülleri (Home, About, Contact vb.)
├── constants.ts     # Sabit veriler (Menüler, Ürünler, Referanslar)
├── types.ts         # TypeScript tip tanımları
├── App.tsx          # Ana uygulama bileşeni ve Rotalar
├── main.tsx         # Giriş noktası
└── ...config files  # Yapılandırma dosyaları
```

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Repoyu klonlayın:**
    ```bash
    git clone https://github.com/kullaniciadi/ozcan-ambalaj.git
    cd ozcan-ambalaj
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

4.  Tarayıcınızda `http://localhost:5173` adresine gidin.

## 🚀 Dağıtım (Deployment)

Bu proje **Vercel** üzerinde çalışmak üzere optimize edilmiştir.

1.  GitHub reponuzu Vercel'e bağlayın.
2.  Build ayarlarını varsayılan olarak bırakın (Vite otomatik algılanır).
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
3.  **Environment Variables** (Opsiyonel): EmailJS API anahtarlarınızı Vercel panelinden ekleyebilirsiniz.
    *   `REACT_APP_EMAILJS_SERVICE_ID`
    *   `REACT_APP_EMAILJS_TEMPLATE_ID`
    *   `REACT_APP_EMAILJS_PUBLIC_KEY`

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.