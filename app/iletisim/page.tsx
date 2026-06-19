import Contact from "@/components/Contact";
import PageBanner from "@/components/PageBanner";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/iletisim"].title),
  description: pageMeta["/iletisim"].description,
};

export default function IletisimPage() {
  const meta = pageMeta["/iletisim"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <Contact hideHeader />
    </main>
  );
}
