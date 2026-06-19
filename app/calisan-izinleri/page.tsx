import PageBanner from "@/components/PageBanner";
import StaffLeaves from "@/components/StaffLeaves";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/calisan-izinleri"].title),
  description: pageMeta["/calisan-izinleri"].description,
};

export default function CalisanIzinleriPage() {
  const meta = pageMeta["/calisan-izinleri"];
  return (
    <main>
      <PageBanner title={meta.title} description={meta.description} />
      <StaffLeaves hideHeader />
    </main>
  );
}
