import { siteConfig } from "@/config/site";

interface OrganizationData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  sameAs: string[];
}

interface ProductData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image: string;
  url: string;
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export function OrganizationJsonLd() {
  const data: OrganizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: [siteConfig.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
}) {
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  const data: ProductData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: imageUrl,
    url: `${siteConfig.url}/products`,
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
