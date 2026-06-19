import Announcements from "@/components/Announcements";
import PageBanner from "@/components/PageBanner";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/duyurular"].title),
  description: pageMeta["/duyurular"].description,
};

export default function DuyurularPage() {
  const meta = pageMeta["/duyurular"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <Announcements hideHeader />
    </main>
  );
}
