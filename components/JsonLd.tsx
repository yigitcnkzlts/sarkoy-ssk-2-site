import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Şarköy",
      addressRegion: "Tekirdağ",
      addressCountry: "TR",
      streetAddress: siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.map.latitude,
      longitude: siteConfig.map.longitude,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    numberOfRooms: siteConfig.stats.units,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
