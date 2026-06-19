export type Announcement = {
  slug: string;
  date: string;
  category: "Toplantı" | "Aidat" | "Bakım" | "Sezon";
  title: string;
  description: string;
  hasDocument?: boolean;
};

export const announcements: Announcement[] = [
  {
    slug: "genel-kurul-2026",
    date: "15 Haziran 2026",
    category: "Toplantı",
    title: "Genel Kurul Toplantısı Duyurusu",
    description:
      "2026 yılı olağan genel kurul toplantımız 28 Haziran 2026 tarihinde site sosyal tesisinde gerçekleştirilecektir. Tüm site sakinlerinin katılımı önemle rica olunur.",
    hasDocument: true,
  },
  {
    slug: "aidat-bilgilendirme-2026",
    date: "10 Haziran 2026",
    category: "Aidat",
    title: "Aidat Bilgilendirmesi",
    description:
      "2026 yaz sezonu aidat ödemeleri hakkında bilgilendirme. Ödeme detayları ve banka hesap bilgileri güncellenmiştir.",
    hasDocument: true,
  },
  {
    slug: "site-bakim-2026",
    date: "5 Haziran 2026",
    category: "Bakım",
    title: "Site Bakım Çalışmaları",
    description:
      "Site genelinde peyzaj düzenleme ve ortak alan bakım çalışmaları 20-25 Haziran tarihleri arasında yapılacaktır.",
  },
  {
    slug: "yaz-sezonu-2026",
    date: "1 Haziran 2026",
    category: "Sezon",
    title: "Yaz Sezonu Bilgilendirmesi",
    description:
      "Yaz sezonu başlangıcı ile ilgili site kuralları, su kullanımı ve ortak alan kullanım bilgileri paylaşılmıştır.",
    hasDocument: true,
  },
];

export const categoryColors: Record<Announcement["category"], string> = {
  Toplantı: "bg-navy text-white",
  Aidat: "bg-sea text-white",
  Bakım: "bg-gold/80 text-navy",
  Sezon: "bg-sea-light text-navy",
};

export function getAnnouncement(slug: string) {
  return announcements.find((item) => item.slug === slug);
}
