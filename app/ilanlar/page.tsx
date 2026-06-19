import Listings from "@/components/Listings";
import PageBanner from "@/components/PageBanner";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/ilanlar"].title),
  description: pageMeta["/ilanlar"].description,
};

export default function IlanlarPage() {
  const meta = pageMeta["/ilanlar"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <Listings hideHeader />
    </main>
  );
}
