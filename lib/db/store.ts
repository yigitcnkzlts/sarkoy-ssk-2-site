import type { Announcement, SiteEvent } from "@/lib/types/content";
import { seedAnnouncements, seedEvents } from "./seed";

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

type Store = {
  announcements: Announcement[];
  events: SiteEvent[];
};

declare global {
  // eslint-disable-next-line no-var
  var __ssk2ContentStore: Store | undefined;
}

function getStore(): Store {
  if (!global.__ssk2ContentStore) {
    global.__ssk2ContentStore = {
      announcements: structuredClone(seedAnnouncements),
      events: structuredClone(seedEvents),
    };
  }
  return global.__ssk2ContentStore;
}

export const contentStore = {
  getAnnouncements(publishedOnly = false) {
    const items = getStore().announcements;
    return publishedOnly ? items.filter((a) => a.published) : [...items];
  },

  getAnnouncementBySlug(slug: string) {
    return getStore().announcements.find((a) => a.slug === slug && a.published);
  },

  createAnnouncement(
    data: Omit<Announcement, "id" | "slug" | "createdAt" | "updatedAt">,
  ) {
    const now = new Date().toISOString();
    const item: Announcement = {
      ...data,
      id: newId("ann"),
      slug: slugify(data.title),
      createdAt: now,
      updatedAt: now,
    };
    getStore().announcements.unshift(item);
    return item;
  },

  updateAnnouncement(id: string, data: Partial<Announcement>) {
    const store = getStore();
    const index = store.announcements.findIndex((a) => a.id === id);
    if (index === -1) return null;
    store.announcements[index] = {
      ...store.announcements[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return store.announcements[index];
  },

  deleteAnnouncement(id: string) {
    getStore().announcements = getStore().announcements.filter((a) => a.id !== id);
  },

  getEvents(publishedOnly = false) {
    const items = getStore().events;
    return publishedOnly ? items.filter((e) => e.published) : [...items];
  },

  createEvent(data: Omit<SiteEvent, "id" | "createdAt" | "updatedAt">) {
    const now = new Date().toISOString();
    const item: SiteEvent = { ...data, id: newId("evt"), createdAt: now, updatedAt: now };
    getStore().events.unshift(item);
    return item;
  },

  updateEvent(id: string, data: Partial<SiteEvent>) {
    const store = getStore();
    const index = store.events.findIndex((e) => e.id === id);
    if (index === -1) return null;
    store.events[index] = {
      ...store.events[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return store.events[index];
  },

  deleteEvent(id: string) {
    getStore().events = getStore().events.filter((e) => e.id !== id);
  },

  getStats() {
    const store = getStore();
    return {
      announcements: store.announcements.length,
      events: store.events.length,
      publishedAnnouncements: store.announcements.filter((a) => a.published).length,
      publishedEvents: store.events.filter((e) => e.published).length,
    };
  },
};
