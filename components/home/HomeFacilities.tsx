"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Container,
  Droplets,
  Gauge,
  Home,
  Info,
  Landmark,
  Music,
  Palette,
  ShoppingBag,
  Trash2,
  Umbrella,
  Users,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Wrench,
} from "lucide-react";
import { siteConfig, siteFacilities } from "@/lib/site";

const iconMap = {
  waves: Waves,
  building: Building2,
  users: Users,
  coffee: UtensilsCrossed,
  umbrella: Umbrella,
  music: Music,
  shopping: ShoppingBag,
  home: Home,
  basketball: Dumbbell,
  palette: Palette,
  wrench: Wrench,
  office: Landmark,
  info: Info,
  trash: Trash2,
  gauge: Gauge,
  well: Droplets,
  tank: Container,
};

export default function HomeFacilities() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
            Site Olanakları
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold text-navy sm:text-4xl">
            {siteConfig.stats.blocks} Blok · {siteConfig.stats.units} Daire
          </h2>
          <p className="mx-auto max-w-2xl text-navy/65">
            Denize 1 dakika mesafede; sosyal alanlardan yönetim binası ve danışmaya,
            hobi odasından su altyapısına kadar geniş olanaklara sahip {siteConfig.name}.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteFacilities.map((facility, i) => {
            const Icon = iconMap[facility.icon];
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="card-premium group rounded-2xl border border-sand/50 bg-sand-light/30 p-6 transition-all hover:border-sea/30 hover:bg-white"
              >
                <div className="mb-4 inline-flex rounded-xl bg-navy p-3 text-white transition-colors group-hover:bg-sea">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-semibold text-navy">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-navy/65">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
