import Announcements from "@/components/Announcements";
import PageBanner from "@/components/PageBanner";
import { getAnnouncements } from "@/lib/announcements";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/duyurular"].title),
  description: pageMeta["/duyurular"].description,
};

export default async function DuyurularPage() {
  const meta = pageMeta["/duyurular"];
  const announcements = await getAnnouncements();
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <Announcements hideHeader items={announcements} />
    </main>
  );
}
