import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // Sayfa başlığını güncelle
    document.title = `${title} | Özcan Ambalaj`;

    // Meta etiketlerini güncelle veya oluştur
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // Cleanup (Opsiyonel: Sayfa değiştiğinde varsayılanlara dönülebilir ama SPA'da bir sonraki sayfa üzerine yazacağı için gerek yok)
  }, [title, description, keywords]);

  return null;
};

export default SEO;