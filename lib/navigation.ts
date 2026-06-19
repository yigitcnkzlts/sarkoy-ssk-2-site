import { siteConfig } from "./site";

export const navLinks = [
  { href: "/site-hakkinda", label: "Site Hakkında" },
  { href: "/duyurular", label: "Duyurular" },
  { href: "/calisan-izinleri", label: "Çalışan İzinleri" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/aidat", label: "Aidat" },
  { href: "/ilanlar", label: "İlanlar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
];

export const footerLinks = [
  { href: "/", label: "Ana Sayfa" },
  ...navLinks,
  { href: "/baglantilar", label: "Faydalı Bağlantılar" },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  "/site-hakkinda": {
    title: "Site Hakkında",
    description: `${siteConfig.fullName} hakkında bilgiler, konum ve olanaklar.`,
  },
  "/duyurular": {
    title: "Duyurular",
    description: "Site yönetiminden güncel duyurular ve haberler.",
  },
  "/calisan-izinleri": {
    title: "Çalışan İzinleri",
    description: "Site görevlilerinin güncel izin durumları.",
  },
  "/etkinlikler": {
    title: "Etkinlikler",
    description: `${siteConfig.fullName} etkinlik takvimi ve sosyal aktiviteler.`,
  },
  "/aidat": {
    title: "Aidat Bilgileri",
    description: "Aidat ödeme bilgileri ve banka hesap detayları.",
  },
  "/ilanlar": {
    title: "İlanlar",
    description: "Satılık, kiralık ve site içi duyuru ilanları.",
  },
  "/galeri": {
    title: "Fotoğraf Galerisi",
    description: `${siteConfig.fullName} fotoğraf galerisi.`,
  },
  "/iletisim": {
    title: "İletişim",
    description: "Site yönetimi ile iletişime geçin.",
  },
  "/baglantilar": {
    title: "Faydalı Bağlantılar",
    description: "Site sakinleri için faydalı web bağlantıları.",
  },
};
