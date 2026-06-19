"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import SiteMap from "@/components/SiteMap";
import WeatherWidget from "@/components/WeatherWidget";
import { siteConfig } from "@/lib/site";

export default function HomeLocationWeather() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-sea/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
            Konum & Hava
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Şarköy&apos;de, Denizin Kalbinde
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            {siteConfig.fullName} konumu ve Şarköy&apos;ün güncel hava durumu.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <SiteMap compact className="premium-ring shadow-2xl" />
            <Link
              href={siteConfig.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sea-light hover:text-white"
            >
              <Navigation size={16} />
              Google Maps&apos;te yol tarifi al
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <WeatherWidget />
            <div className="premium-ring rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2 text-sea-light">
                <MapPin size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Adres
                </span>
              </div>
              <p className="font-display text-xl font-bold text-white">
                {siteConfig.address}
              </p>
              <p className="mt-2 text-sm text-white/55">
                Denize yürüyerek 1 dakika · 17 blok · 308 daire
              </p>
              <Link
                href="/iletisim"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sea to-sea-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sea/25"
              >
                İletişim Sayfası
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
