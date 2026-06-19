export const siteConfig = {
  name: "SSK2 Sitesi",
  fullName: "Şarköy SSK2 Sitesi",
  shortName: "SSK2",
  location: "Şarköy, Tekirdağ",
  region: "Marmara Kıyısı",
  tagline: "Denize 1 Dakika, Huzurlu ve Aile Dostu Yaşam Alanı",
  description:
    "Şarköy SSK2 Sitesi resmi tanıtım ve bilgilendirme web sitesi. 17 blok, 308 daire, denize 1 dakika mesafede yazlık yaşam alanı.",
  email: "info@ssk2sitesi.com",
  managementEmail: "yonetim@ssk2sitesi.com",
  phone: process.env.NEXT_PUBLIC_SITE_PHONE || "+90 555 000 00 00",
  phoneDisplay: process.env.NEXT_PUBLIC_SITE_PHONE_DISPLAY || "0 (555) 000 00 00",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "905550000000",
  whatsappMessage: "Merhaba, SSK2 Sitesi hakkında bilgi almak istiyorum.",
  address: "SSK2 Sitesi, Şarköy, Tekirdağ",
  managementName: "SSK2 Sitesi Yönetimi",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sarkoy-ssk-2-site.vercel.app",
  map: {
    latitude: 40.6136,
    longitude: 27.0864,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.5!2d27.0864!3d40.6136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40LjYxMzYsIDI3LjA4NjQ!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=40.6136,27.0864",
  },
  stats: {
    blocks: 17,
    units: 308,
    seaDistance: "1 dk",
    staffCount: 2,
  },
};

export type FacilityIcon =
  | "waves"
  | "building"
  | "users"
  | "coffee"
  | "umbrella"
  | "music"
  | "shopping"
  | "home"
  | "basketball"
  | "palette"
  | "wrench"
  | "office"
  | "info"
  | "trash"
  | "gauge"
  | "well"
  | "tank";

export const siteFacilities: {
  icon: FacilityIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "waves" as const,
    title: "Denize 1 Dakika",
    description: "Denize yürüyerek 1 dakikada ulaşabilirsiniz. Plaj ve deniz keyfi kapınızın önünde.",
  },
  {
    icon: "building" as const,
    title: "17 Blok · 308 Daire",
    description: "17 bloktan oluşan site yerleşkesinde toplam 308 bağımsız bölüm bulunmaktadır.",
  },
  {
    icon: "users" as const,
    title: "Toplantı Odası",
    description: "Site sakinlerinin kullanımına açık toplantı ve etkinlik odası.",
  },
  {
    icon: "coffee" as const,
    title: "Lokal",
    description: "Site sakinlerinin sosyalleştiği, dinlendiği lokal alan.",
  },
  {
    icon: "umbrella" as const,
    title: "Beach Club",
    description: "Site bünyesindeki beach club ile yaz keyfinizi site içinde yaşayın.",
  },
  {
    icon: "music" as const,
    title: "Sahne & Etkinlik Alanı",
    description: "Konser, gösteri ve site etkinlikleri için sahne ve açık etkinlik alanı.",
  },
  {
    icon: "shopping" as const,
    title: "Bakkal / Market",
    description: "Bağımsız bölümlerde bakkal ve market imkânı, günlük ihtiyaçlarınız elinizin altında.",
  },
  {
    icon: "home" as const,
    title: "Personel Lojmanı",
    description: "2 personel için site içi lojman; düzenli bakım ve güvenlik hizmeti.",
  },
  {
    icon: "basketball" as const,
    title: "Basket Sahası",
    description: "Açık hava basket sahası; çocuklar ve gençler için spor alanı.",
  },
  {
    icon: "office" as const,
    title: "Yönetim Binası",
    description: "Site yönetiminin merkezi; aidat, başvuru ve resmi işlemler burada yürütülür.",
  },
  {
    icon: "info" as const,
    title: "Danışma",
    description: "Site sakinlerinin bilgi alabileceği danışma noktası.",
  },
  {
    icon: "palette" as const,
    title: "Hobi Odası",
    description: "El sanatları, atölye ve sosyal etkinlikler için 1 adet hobi odası.",
  },
  {
    icon: "wrench" as const,
    title: "Teknik Oda",
    description: "Site bakım ekipmanları ve teknik altyapı için 1 adet teknik oda.",
  },
  {
    icon: "trash" as const,
    title: "Çöp Evleri",
    description: "Site genelinde düzenli atık toplama için 2 adet çöp evi.",
  },
  {
    icon: "gauge" as const,
    title: "Hidrofor Odaları",
    description: "Su basıncı ve dağıtımı için 2 adet hidrofor odası.",
  },
  {
    icon: "well" as const,
    title: "Kuyu",
    description: "Site su altyapısının temel kaynağı olan 1 adet kuyu.",
  },
  {
    icon: "tank" as const,
    title: "Su Depoları",
    description: "Kesintisiz su temini için 2 adet su deposu.",
  },
];

export const siteFacts = [
  { label: "Blok Sayısı", value: "17 Blok" },
  { label: "Bağımsız Bölüm", value: "308 Daire" },
  { label: "Denize Mesafe", value: "1 Dakika" },
  { label: "Yönetim Binası", value: "Danışma" },
  { label: "Hobi Odası", value: "1 Adet" },
  { label: "Su Altyapısı", value: "1 Kuyu · 2 Depo" },
];

export function pageTitle(section: string) {
  return `${section} | ${siteConfig.fullName}`;
}

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
