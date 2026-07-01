import Events from "@/components/Events";
import PageBanner from "@/components/PageBanner";
import { contentStore } from "@/lib/db/store";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/etkinlikler"].title),
  description: pageMeta["/etkinlikler"].description,
};

export default async function EtkinliklerPage() {
  const meta = pageMeta["/etkinlikler"];
  const events = await contentStore.getEvents(true);
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <Events hideHeader items={events} />
    </main>
  );
}
