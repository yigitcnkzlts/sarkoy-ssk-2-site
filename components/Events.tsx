"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, PartyPopper } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/site";

const events = [
  {
    title: "Yaz Sezonu Açılış Pikniği",
    date: "28 Haziran 2026",
    time: "11:00 – 16:00",
    location: "Site Sosyal Alanı",
    description:
      "Yaz sezonunun açılışını birlikte kutluyoruz. Tüm site sakinleri ve aileleri davetlidir. Yönetim ikramları olacaktır.",
    tag: "Sosyal",
  },
  {
    title: "Genel Kurul Toplantısı",
    date: "28 Haziran 2026",
    time: "10:00 – 12:00",
    location: "Site Yönetim Binası",
    description:
      "2026 yılı olağan genel kurul toplantısı. Gündem maddeleri duyurular bölümünde paylaşılmıştır.",
    tag: "Resmi",
  },
  {
    title: "Çocuklar İçin Yaz Etkinliği",
    date: "5 Temmuz 2026",
    time: "15:00 – 18:00",
    location: "Site Oyun Alanı",
    description:
      "Site sakinlerinin çocukları için oyun turnuvası ve eğlence etkinliği. Katılım ücretsizdir.",
    tag: "Aile",
  },
  {
    title: "Mangal ve Komşuluk Gecesi",
    date: "19 Temmuz 2026",
    time: "18:00 – 22:00",
    location: "Site Barbekü Alanı",
    description:
      "Geleneksel yaz mangal gecesi. Site sakinleri kendi ikramlarını getirebilir, ortak alan kullanım kuralları geçerlidir.",
    tag: "Sosyal",
  },
];

const tagColors: Record<string, string> = {
  Sosyal: "bg-sea text-white",
  Resmi: "bg-navy text-white",
  Aile: "bg-gold/80 text-navy",
};

export default function Events({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="etkinlikler" className={`bg-mesh-light ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="Etkinlikler"
          title="Site Etkinlik Takvimi"
          description={`${siteConfig.fullName}'nde düzenlenen sosyal etkinlikler, toplantılar ve aile aktiviteleri.`}
        />
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-premium group flex gap-5 rounded-3xl bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="flex flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-navy px-4 py-5 text-center text-white">
                <PartyPopper size={22} className="mb-2 text-sea-light" />
                <p className="text-xs font-medium uppercase tracking-wide text-white/60">
                  {event.date.split(" ")[1]}
                </p>
                <p className="font-display text-2xl font-bold">
                  {event.date.split(" ")[0]}
                </p>
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[event.tag]}`}
                  >
                    {event.tag}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-lg font-bold text-navy transition-colors group-hover:text-sea">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-navy/65">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-navy/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-sea" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-sea" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-sea" />
                    {event.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
