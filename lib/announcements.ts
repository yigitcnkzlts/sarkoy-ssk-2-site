import { contentStore } from "@/lib/db/store";
import {
  announcementCategoryColors,
  type Announcement,
  type AnnouncementCategory,
} from "@/lib/types/content";

export type { Announcement, AnnouncementCategory };
export const categoryColors = announcementCategoryColors;

export function getAnnouncements() {
  return contentStore.getAnnouncements(true);
}

export function getAnnouncement(slug: string) {
  return contentStore.getAnnouncementBySlug(slug);
}
