"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, PartyPopper } from "lucide-react";
import Link from "next/link";
import type { SiteEvent } from "@/lib/types/content";

export default function HomeEventsPreview({ items }: { items: SiteEvent[] }) {
  return (
    <section className="bg-mesh-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
              Etkinlikler
            </span>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Yaklaşan Etkinlikler
            </h2>
          </div>
          <Link
            href="/etkinlikler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sea hover:gap-3 transition-all"
          >
            Etkinlik Takvimi
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href="/etkinlikler"
                className="card-premium group flex h-full gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-shrink-0 flex-col items-center justify-center rounded-xl bg-navy px-3 py-4 text-center text-white">
                  <PartyPopper size={18} className="mb-1 text-sea-light" />
                  <span className="text-lg font-bold leading-none">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-[10px] uppercase text-white/60">
                    {event.date.split(" ")[1]}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-semibold text-navy group-hover:text-sea transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-xs text-navy/50">
                    {event.time && (
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-sea" />
                        {event.time}
                      </span>
                    )}
                    {event.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-sea" />
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
