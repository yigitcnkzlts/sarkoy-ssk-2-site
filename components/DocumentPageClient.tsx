"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { Announcement } from "@/lib/types/content";

export default function DocumentPageClient({ item }: { item: Announcement }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("print") === "1") {
      const timer = setTimeout(() => window.print(), 500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <>
      <div className="no-print border-b border-sand/60 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/duyurular"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-sea"
          >
            <ArrowLeft size={16} />
            Duyurulara Dön
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-white"
            >
              <Printer size={15} />
              Yazdır / PDF
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-sand px-4 py-2 text-sm font-medium text-navy"
            >
              <Download size={15} />
              İndir
            </button>
          </div>
        </div>
      </div>

      <article className="document-print mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-10 border-b border-navy/10 pb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sea">
            {siteConfig.fullName}
          </p>
          <p className="mb-4 text-sm text-navy/50">{item.date} · {item.category}</p>
          <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            {item.title}
          </h1>
        </header>
        <div className="prose prose-navy max-w-none">
          <p className="text-lg leading-relaxed text-navy/80">{item.description}</p>
          <p className="mt-8 text-sm text-navy/50">
            Bu belge {siteConfig.managementName} tarafından yayımlanmıştır.
            Sorularınız için {siteConfig.managementEmail} adresine yazabilirsiniz.
          </p>
        </div>
        <footer className="mt-16 border-t border-navy/10 pt-6 text-center text-xs text-navy/40">
          © {new Date().getFullYear()} {siteConfig.fullName}
        </footer>
      </article>
    </>
  );
}
