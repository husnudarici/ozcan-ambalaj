# Özcan Ambalaj - Kurumsal Web Sitesi

Bu proje, **Özcan Ambalaj** firması için geliştirilmiş; modern, hızlı ve SEO uyumlu bir kurumsal web sitesidir. **Next.js (App Router)**, React, TypeScript ve Tailwind CSS teknolojileri kullanılarak tasarlanmıştır.

## 🚀 Özellikler

*   **Next.js App Router:** Gelişmiş yönlendirme ve Server Side Rendering (SSR) desteği.
*   **SEO Dostu:** Her sayfa için özelleştirilmiş dinamik meta etiketleri ve anlamsal HTML yapısı.
*   **Modern Arayüz:** Kullanıcı deneyimini ön planda tutan, estetik ve profesyonel tasarım.
*   **Mobil Uyumlu (Responsive):** Tüm cihazlarda (Telefon, Tablet, Masaüstü) kusursuz görünüm.
*   **İletişim Formu:** EmailJS entegrasyonu ile sunucu gerektirmeyen, doğrudan e-posta gönderimi.
*   **Dinamik İçerik:** Kolay yönetilebilir ürün ve referans veri yapısı.

## 🛠️ Teknoloji Yığını

*   **Framework:** [Next.js 14](https://nextjs.org/)
*   **Dil:** [TypeScript](https://www.typescriptlang.org/)
*   **Stil:** [Tailwind CSS](https://tailwindcss.com/)
*   **Form/Mail:** [EmailJS](https://www.emailjs.com/)
*   **İkonlar:** [Material Symbols](https://fonts.google.com/icons)

## 📂 Klasör Yapısı

```
ozcan-ambalaj/
├── app/             # Next.js App Router sayfaları ve layout
├── components/      # Ortak kullanılan UI bileşenleri
├── features/        # Sayfa bazlı özellik modülleri (Home, About vb.)
├── constants.ts     # Sabit veriler
├── types.ts         # TypeScript tip tanımları
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

4.  Tarayıcınızda `http://localhost:3000` adresine gidin.

## 🚀 Dağıtım (Deployment)

Bu proje **Vercel** üzerinde çalışmak üzere optimize edilmiştir.

1.  GitHub reponuzu Vercel'e bağlayın.
2.  Framework Preset olarak **Next.js** otomatik seçilecektir.
3.  **Environment Variables** (Opsiyonel): EmailJS API anahtarlarınızı Vercel panelinden ekleyebilirsiniz.
    *   `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
    *   `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
    *   `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.