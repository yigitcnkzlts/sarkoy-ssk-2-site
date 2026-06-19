"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

const announcements = [
  {
    date: "15 Haziran 2026",
    category: "Toplantı",
    title: "Genel Kurul Toplantısı Duyurusu",
    description:
      "2026 yılı olağan genel kurul toplantımız 28 Haziran 2026 tarihinde site sosyal tesisinde gerçekleştirilecektir. Tüm site sakinlerinin katılımı önemle rica olunur.",
  },
  {
    date: "10 Haziran 2026",
    category: "Aidat",
    title: "Aidat Bilgilendirmesi",
    description:
      "2026 yaz sezonu aidat ödemeleri hakkında bilgilendirme. Ödeme detayları ve banka hesap bilgileri güncellenmiştir.",
  },
  {
    date: "5 Haziran 2026",
    category: "Bakım",
    title: "Site Bakım Çalışmaları",
    description:
      "Site genelinde peyzaj düzenleme ve ortak alan bakım çalışmaları 20-25 Haziran tarihleri arasında yapılacaktır.",
  },
  {
    date: "1 Haziran 2026",
    category: "Sezon",
    title: "Yaz Sezonu Bilgilendirmesi",
    description:
      "Yaz sezonu başlangıcı ile ilgili site kuralları, su kullanımı ve ortak alan kullanım bilgileri paylaşılmıştır.",
  },
];

const categoryColors: Record<string, string> = {
  Toplantı: "bg-navy text-white",
  Aidat: "bg-sea text-white",
  Bakım: "bg-gold/80 text-navy",
  Sezon: "bg-sea-light text-navy",
};

export default function Announcements({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="duyurular" className={`bg-mesh-light ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="Duyurular"
          title="Güncel Haberler ve Duyurular"
          description="Site yönetiminden güncel duyurular, toplantı bilgileri ve önemli haberler."
        />
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {announcements.map((item, i) => (
            <motion.article
              key={item.title}
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
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[item.category]}`}
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
                <button
                  type="button"
                  className="inline-flex items-center gap-2 self-start text-sm font-semibold text-sea transition-all hover:gap-3"
                >
                  Devamını Oku
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
