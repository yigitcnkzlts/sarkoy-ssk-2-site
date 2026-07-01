export type AnnouncementCategory = "Toplantı" | "Aidat" | "Bakım" | "Sezon";
export type EventTag = "Sosyal" | "Resmi" | "Aile";
export type EventType = "etkinlik" | "toplanti";

export interface Announcement {
  id: string;
  slug: string;
  date: string;
  category: AnnouncementCategory;
  title: string;
  description: string;
  hasDocument: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SiteEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tag: EventTag;
  type: EventType;
  image?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export const announcementCategoryColors: Record<AnnouncementCategory, string> = {
  Toplantı: "bg-navy text-white",
  Aidat: "bg-sea text-white",
  Bakım: "bg-gold/80 text-navy",
  Sezon: "bg-sea-light text-navy",
};

export const eventTagColors: Record<EventTag, string> = {
  Sosyal: "bg-sea text-white",
  Resmi: "bg-navy text-white",
  Aile: "bg-gold/80 text-navy",
};
