"use client";

import { motion } from "framer-motion";
import {
  CloudSun,
  ExternalLink,
  Globe,
  Map,
  Pill,
  Building,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/site";

const links = [
  {
    icon: Building,
    title: "Şarköy Belediyesi",
    description: "Resmi belediye web sitesi, duyurular ve hizmetler.",
    href: "https://www.sarkoy.bel.tr",
  },
  {
    icon: Pill,
    title: "Nöbetçi Eczane",
    description: "Şarköy bölgesi nöbetçi eczane bilgileri.",
    href: "https://www.eczaneler.gen.tr/nobetci-tekirdag-sarkoy",
  },
  {
    icon: CloudSun,
    title: "Hava Durumu",
    description: "Şarköy güncel hava durumu ve tahminleri.",
    href: "https://www.mgm.gov.tr",
  },
  {
    icon: Globe,
    title: "E-Devlet",
    description: "Resmi e-devlet kapısı ve kamu hizmetleri.",
    href: "https://www.turkiye.gov.tr",
  },
  {
    icon: Map,
    title: "Harita / Yol Tarifi",
    description: `${siteConfig.fullName} konumuna yol tarifi alın.`,
    href: siteConfig.map.directionsUrl,
  },
];

export default function UsefulLinks({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="baglantilar" className={`bg-mesh-light ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="Bağlantılar"
          title="Faydalı Bağlantılar"
          description="Site sakinleri için faydalı web bağlantıları ve hızlı erişim araçları."
        />
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-premium group flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="flex-shrink-0 rounded-2xl bg-navy p-3.5 text-white transition-colors group-hover:bg-sea">
                <link.icon size={22} />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="font-semibold text-navy transition-colors group-hover:text-sea">
                    {link.title}
                  </h3>
                  <ExternalLink
                    size={13}
                    className="text-navy/30 transition-colors group-hover:text-sea"
                  />
                </div>
                <p className="text-sm text-navy/60">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
