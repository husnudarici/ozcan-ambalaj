import Script from 'next/script';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Özcan Ambalaj",
    "url": "https://www.ozcanambalaj.com",
    "logo": "https://www.ozcanambalaj.com/logo.png",
    "description": "Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sultangazi",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.ozcanambalaj.com"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Özcan Ambalaj",
    "image": "https://www.ozcanambalaj.com/logo.png",
    "@id": "https://www.ozcanambalaj.com",
    "url": "https://www.ozcanambalaj.com",
    "telephone": "+90",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sultangazi",
      "addressLocality": "İstanbul",
      "postalCode": "34000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.1015,
      "longitude": 28.8730
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.ozcanambalaj.com"
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export function ProductSchema({ name, description, image, url, category }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": "Özcan Ambalaj"
    },
    "category": category,
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "TRY",
      "seller": {
        "@type": "Organization",
        "name": "Özcan Ambalaj"
      }
    }
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Özcan Ambalaj",
    "url": "https://www.ozcanambalaj.com",
    "description": "Profesyonel kutu ve ambalaj çözümleri. Oluklu mukavva, özel tasarım kutular ve endüstriyel ambalaj hizmetleri.",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "Organization",
      "name": "Özcan Ambalaj",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ozcanambalaj.com/logo.png"
      }
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
