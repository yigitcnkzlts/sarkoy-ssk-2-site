"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, FileText } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { announcementCategoryColors } from "@/lib/types/content";
import type { Announcement } from "@/lib/types/content";

export default function Announcements({
  hideHeader = false,
  items,
}: {
  hideHeader?: boolean;
  items: Announcement[];
}) {
  return (
    <section id="duyurular" className={`bg-mesh-light ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge="Duyurular"
            title="Güncel Haberler ve Duyurular"
            description="Site yönetiminden güncel duyurular, toplantı bilgileri ve indirilebilir belgeler."
          />
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-premium group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="h-1 w-full bg-gradient-to-r from-sea via-sea-light to-transparent" />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${announcementCategoryColors[item.category]}`}
                  >
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-navy/50">
                    <Calendar size={13} />
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-navy transition-colors group-hover:text-sea">
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-navy/65">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/belgeler/${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sea transition-all hover:gap-3"
                  >
                    Devamını Oku
                    <ArrowRight size={16} />
                  </Link>
                  {item.hasDocument && (
                    <Link
                      href={`/belgeler/${item.slug}?print=1`}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-sand bg-sand-light/50 px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-sea/30 hover:text-sea"
                    >
                      <Download size={15} />
                      PDF İndir
                    </Link>
                  )}
                  {item.hasDocument && (
                    <span className="inline-flex items-center gap-1 text-xs text-navy/40">
                      <FileText size={12} />
                      Resmi belge
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
