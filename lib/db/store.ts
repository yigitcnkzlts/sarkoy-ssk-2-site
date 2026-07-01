import type { Announcement, SiteEvent } from "@/lib/types/content";
import { loadContent, saveContent } from "./persistence";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function newId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export const contentStore = {
  async getAnnouncements(publishedOnly = false) {
    const { announcements } = await loadContent();
    return publishedOnly ? announcements.filter((a) => a.published) : [...announcements];
  },

  async getAnnouncementBySlug(slug: string) {
    const { announcements } = await loadContent();
    return announcements.find((a) => a.slug === slug && a.published);
  },

  async createAnnouncement(
    data: Omit<Announcement, "id" | "slug" | "createdAt" | "updatedAt">,
  ) {
    const store = await loadContent();
    const now = new Date().toISOString();
    const item: Announcement = {
      ...data,
      id: newId("ann"),
      slug: slugify(data.title),
      createdAt: now,
      updatedAt: now,
    };
    store.announcements.unshift(item);
    await saveContent(store);
    return item;
  },

  async updateAnnouncement(id: string, data: Partial<Announcement>) {
    const store = await loadContent();
    const index = store.announcements.findIndex((a) => a.id === id);
    if (index === -1) return null;
    store.announcements[index] = {
      ...store.announcements[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    await saveContent(store);
    return store.announcements[index];
  },

  async deleteAnnouncement(id: string) {
    const store = await loadContent();
    store.announcements = store.announcements.filter((a) => a.id !== id);
    await saveContent(store);
  },

  async getEvents(publishedOnly = false) {
    const { events } = await loadContent();
    return publishedOnly ? events.filter((e) => e.published) : [...events];
  },

  async createEvent(data: Omit<SiteEvent, "id" | "createdAt" | "updatedAt">) {
    const store = await loadContent();
    const now = new Date().toISOString();
    const item: SiteEvent = { ...data, id: newId("evt"), createdAt: now, updatedAt: now };
    store.events.unshift(item);
    await saveContent(store);
    return item;
  },

  async updateEvent(id: string, data: Partial<SiteEvent>) {
    const store = await loadContent();
    const index = store.events.findIndex((e) => e.id === id);
    if (index === -1) return null;
    store.events[index] = {
      ...store.events[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    await saveContent(store);
    return store.events[index];
  },

  async deleteEvent(id: string) {
    const store = await loadContent();
    store.events = store.events.filter((e) => e.id !== id);
    await saveContent(store);
  },

  async getStats() {
    const store = await loadContent();
    return {
      announcements: store.announcements.length,
      events: store.events.length,
      publishedAnnouncements: store.announcements.filter((a) => a.published).length,
      publishedEvents: store.events.filter((e) => e.published).length,
    };
  },
};
