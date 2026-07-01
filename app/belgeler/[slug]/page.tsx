import DocumentPageClient from "@/components/DocumentPageClient";
import PageBanner from "@/components/PageBanner";
import { getAnnouncement } from "@/lib/announcements";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getAnnouncement(slug);
  if (!item) return { title: pageTitle("Belge") };
  return {
    title: pageTitle(item.title),
    description: item.description,
  };
}

export default async function BelgePage({ params }: Props) {
  const { slug } = await params;
  const item = await getAnnouncement(slug);
  if (!item) notFound();

  return (
    <main>
      <div className="no-print">
        <PageBanner title={item.title} description={`${item.category} · ${item.date}`} />
      </div>
      <Suspense>
        <DocumentPageClient item={item} />
      </Suspense>
    </main>
  );
}
