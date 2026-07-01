import { head, put } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import type { Announcement, SiteEvent } from "@/lib/types/content";
import { seedAnnouncements, seedEvents } from "./seed";

export type ContentData = {
  announcements: Announcement[];
  events: SiteEvent[];
};

const BLOB_PATHNAME = "ssk2-site-content.json";
const LOCAL_PATH = path.join(process.cwd(), "data", "site-content.json");

function seedData(): ContentData {
  return {
    announcements: structuredClone(seedAnnouncements),
    events: structuredClone(seedEvents),
  };
}

async function loadFromBlob(): Promise<ContentData | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  try {
    const blob = await head(BLOB_PATHNAME);
    const response = await fetch(blob.url, { cache: "no-store" });
    if (!response.ok) return null;
    return (await response.json()) as ContentData;
  } catch {
    return null;
  }
}

async function saveToBlob(data: ContentData) {
  await put(BLOB_PATHNAME, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function loadFromFile(): Promise<ContentData | null> {
  try {
    const raw = await fs.readFile(LOCAL_PATH, "utf-8");
    return JSON.parse(raw) as ContentData;
  } catch {
    return null;
  }
}

async function saveToFile(data: ContentData) {
  await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
  await fs.writeFile(LOCAL_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function loadContent(): Promise<ContentData> {
  const fromBlob = await loadFromBlob();
  if (fromBlob) return fromBlob;

  const fromFile = await loadFromFile();
  if (fromFile) return fromFile;

  const seeded = seedData();
  await saveContent(seeded);
  return seeded;
}

export async function saveContent(data: ContentData) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await saveToBlob(data);
    return;
  }
  await saveToFile(data);
}
