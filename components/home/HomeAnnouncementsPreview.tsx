"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Megaphone } from "lucide-react";
import Link from "next/link";

const latestAnnouncements = [
  {
    date: "15 Haziran 2026",
    title: "Genel Kurul Toplantısı Duyurusu",
    category: "Toplantı",
  },
  {
    date: "10 Haziran 2026",
    title: "Aidat Bilgilendirmesi",
    category: "Aidat",
  },
  {
    date: "1 Haziran 2026",
    title: "Yaz Sezonu Bilgilendirmesi",
    category: "Sezon",
  },
];

export default function HomeAnnouncementsPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
              Duyurular
            </span>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Son Duyurular
            </h2>
          </div>
          <Link
            href="/duyurular"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sea hover:gap-3 transition-all"
          >
            Tüm Duyurular
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {latestAnnouncements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href="/duyurular"
                className="card-premium group block h-full rounded-2xl border border-sand/60 bg-sand-light/30 p-6 transition-all hover:border-sea/30 hover:bg-white"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                  <Megaphone size={16} className="text-sea/40" />
                </div>
                <h3 className="mb-3 font-semibold text-navy group-hover:text-sea transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-navy/50">
                  <Calendar size={13} />
                  {item.date}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
