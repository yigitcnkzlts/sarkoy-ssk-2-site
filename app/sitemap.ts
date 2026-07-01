import { getAnnouncements } from "@/lib/announcements";
import { navLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl;
  const announcements = await getAnnouncements();
  const routes = [
    "",
    ...navLinks.map((link) => link.href),
    "/baglantilar",
    ...announcements.map((item) => `/belgeler/${item.slug}`),
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
