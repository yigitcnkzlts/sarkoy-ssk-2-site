import About from "@/components/About";
import PageBanner from "@/components/PageBanner";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/site-hakkinda"].title),
  description: pageMeta["/site-hakkinda"].description,
};

export default function SiteHakkindaPage() {
  const meta = pageMeta["/site-hakkinda"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <About hideHeader />
    </main>
  );
}
