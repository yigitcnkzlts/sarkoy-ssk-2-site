import { get, put } from "@vercel/blob";
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
const BLOB_ACCESS = "private" as const;

function seedData(): ContentData {
  return {
    announcements: structuredClone(seedAnnouncements),
    events: structuredClone(seedEvents),
  };
}

async function readStream(stream: ReadableStream<Uint8Array>) {
  return new Response(stream).text();
}

async function loadFromBlob(): Promise<ContentData | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  try {
    const result = await get(BLOB_PATHNAME, { access: BLOB_ACCESS });
    if (!result || result.statusCode !== 200 || !result.stream) return null;
    return JSON.parse(await readStream(result.stream)) as ContentData;
  } catch {
    return null;
  }
}

async function saveToBlob(data: ContentData) {
  await put(BLOB_PATHNAME, JSON.stringify(data), {
    access: BLOB_ACCESS,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function loadFromFile(): Promise<ContentData | null> {
  if (process.env.VERCEL) return null;

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
  try {
    await saveContent(seeded);
  } catch (error) {
    console.error("[content] seed save failed:", error);
  }
  return seeded;
}

export async function saveContent(data: ContentData) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await saveToBlob(data);
    return;
  }

  if (process.env.VERCEL) {
    throw new Error("BLOB_READ_WRITE_TOKEN eksik. Vercel Blob deposunu projeye baglayin.");
  }

  await saveToFile(data);
}
