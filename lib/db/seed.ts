import type { Announcement, SiteEvent } from "@/lib/types/content";

const now = new Date().toISOString();

export const seedAnnouncements: Announcement[] = [
  {
    id: "ann-1",
    slug: "genel-kurul-2026",
    date: "15 Haziran 2026",
    category: "Toplantı",
    title: "Genel Kurul Toplantısı Duyurusu",
    description:
      "2026 yılı olağan genel kurul toplantımız 28 Haziran 2026 tarihinde site sosyal tesisinde gerçekleştirilecektir. Tüm site sakinlerinin katılımı önemle rica olunur.",
    hasDocument: true,
    published: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "ann-2",
    slug: "aidat-bilgilendirme-2026",
    date: "10 Haziran 2026",
    category: "Aidat",
    title: "Aidat Bilgilendirmesi",
    description:
      "2026 yaz sezonu aidat ödemeleri hakkında bilgilendirme. Ödeme detayları ve banka hesap bilgileri güncellenmiştir.",
    hasDocument: true,
    published: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "ann-3",
    slug: "site-bakim-2026",
    date: "5 Haziran 2026",
    category: "Bakım",
    title: "Site Bakım Çalışmaları",
    description:
      "Site genelinde peyzaj düzenleme ve ortak alan bakım çalışmaları 20-25 Haziran tarihleri arasında yapılacaktır.",
    hasDocument: false,
    published: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "ann-4",
    slug: "yaz-sezonu-2026",
    date: "1 Haziran 2026",
    category: "Sezon",
    title: "Yaz Sezonu Bilgilendirmesi",
    description:
      "Yaz sezonu başlangıcı ile ilgili site kuralları, su kullanımı ve ortak alan kullanım bilgileri paylaşılmıştır.",
    hasDocument: true,
    published: true,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedEvents: SiteEvent[] = [
  {
    id: "evt-1",
    title: "Yaz Sezonu Açılış Pikniği",
    date: "28 Haziran 2026",
    time: "11:00 – 16:00",
    location: "Site Sosyal Alanı",
    description:
      "Yaz sezonunun açılışını birlikte kutluyoruz. Tüm site sakinleri ve aileleri davetlidir.",
    tag: "Sosyal",
    type: "etkinlik",
    published: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "evt-2",
    title: "Genel Kurul Toplantısı",
    date: "28 Haziran 2026",
    time: "10:00 – 12:00",
    location: "Site Yönetim Binası",
    description: "2026 yılı olağan genel kurul toplantısı.",
    tag: "Resmi",
    type: "toplanti",
    published: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "evt-3",
    title: "Çocuklar İçin Yaz Etkinliği",
    date: "5 Temmuz 2026",
    time: "15:00 – 18:00",
    location: "Site Oyun Alanı",
    description: "Oyun turnuvası ve eğlence etkinliği. Katılım ücretsizdir.",
    tag: "Aile",
    type: "etkinlik",
    published: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "evt-4",
    title: "Mangal ve Komşuluk Gecesi",
    date: "19 Temmuz 2026",
    time: "18:00 – 22:00",
    location: "Site Barbekü Alanı",
    description: "Geleneksel yaz mangal gecesi.",
    tag: "Sosyal",
    type: "etkinlik",
    published: true,
    createdAt: now,
    updatedAt: now,
  },
];
