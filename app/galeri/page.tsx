import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/galeri"].title),
  description: pageMeta["/galeri"].description,
};

export default function GaleriPage() {
  const meta = pageMeta["/galeri"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <Gallery hideHeader />
    </main>
  );
}
