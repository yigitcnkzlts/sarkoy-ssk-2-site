"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Dumbbell,
  Music,
  Umbrella,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/site";

const features = [
  {
    icon: Waves,
    title: "Denize 1 Dakika",
    description:
      "Denize yürüyerek 1 dakikada ulaşın. Plaj ve deniz havası kapınızın önünde.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "from-sea to-sea-dark",
    large: true,
  },
  {
    icon: Building2,
    title: "17 Blok · 308 Daire",
    description: "17 bloktan oluşan geniş site yerleşkesinde 308 bağımsız bölüm.",
    span: "",
    accent: "from-navy to-navy-light",
    large: false,
  },
  {
    icon: Umbrella,
    title: "Beach Club",
    description: "Site bünyesindeki beach club ile yaz keyfinizi site içinde yaşayın.",
    span: "",
    accent: "from-sea-dark to-navy",
    large: false,
  },
  {
    icon: UtensilsCrossed,
    title: "Lokal",
    description: "Site sakinlerinin sosyalleştiği, dinlendiği lokal alan.",
    span: "",
    accent: "from-navy-light to-sea-dark",
    large: false,
  },
  {
    icon: Music,
    title: "Sahne & Etkinlik",
    description: "Konser, gösteri ve site etkinlikleri için sahne alanı.",
    span: "",
    accent: "from-gold/80 to-navy",
    large: false,
  },
  {
    icon: Dumbbell,
    title: "Yönetim & Altyapı",
    description: "Yönetim binası, danışma, teknik oda, hidrofor, kuyu ve su depoları.",
    span: "lg:col-span-2",
    accent: "from-sea-light to-sea",
    large: false,
  },
];

export default function Features({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className={`relative overflow-hidden bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-sea/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge="Öne Çıkan Özellikler"
            title={`Neden ${siteConfig.name}?`}
            description="Denize 1 dakika, 17 blok, 308 daire ve zengin site olanaklarıyla huzurlu yazlık yaşam."
          />
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`card-premium group relative overflow-hidden rounded-3xl ${feature.span} ${
                feature.large ? "min-h-[320px]" : "min-h-[200px]"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-90 transition-opacity group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-[url('/images/gallery-2.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
              <div className="relative flex h-full flex-col justify-end p-7 text-white">
                <div className="mb-auto inline-flex rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
                  <feature.icon size={feature.large ? 28 : 22} />
                </div>
                <h3
                  className={`mb-2 font-semibold ${feature.large ? "text-2xl" : "text-lg"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`leading-relaxed text-white/80 ${feature.large ? "text-base" : "text-sm"}`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
