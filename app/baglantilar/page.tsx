import PageBanner from "@/components/PageBanner";
import UsefulLinks from "@/components/UsefulLinks";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/baglantilar"].title),
  description: pageMeta["/baglantilar"].description,
};

export default function BaglantilarPage() {
  const meta = pageMeta["/baglantilar"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <UsefulLinks hideHeader />
    </main>
  );
}
