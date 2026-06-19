import DuesInfo from "@/components/DuesInfo";
import PageBanner from "@/components/PageBanner";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/aidat"].title),
  description: pageMeta["/aidat"].description,
};

export default function AidatPage() {
  const meta = pageMeta["/aidat"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <DuesInfo hideHeader />
    </main>
  );
}
