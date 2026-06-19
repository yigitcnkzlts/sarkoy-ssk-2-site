"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building2, MapPin, Waves } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { icon: Waves, value: "1 dk", label: "Denize Mesafe" },
  { icon: Building2, value: "17 Blok", label: "308 Daire" },
  { icon: MapPin, value: "Şarköy", label: "Tekirdağ" },
];

export default function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt={`${siteConfig.fullName} manzarası`}
          fill
          priority
          className="animate-ken-burns object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/80 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />

      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-sea/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-sea-light" />
              <span className="text-sm font-medium text-white/90">
                {siteConfig.location} · {siteConfig.region}
              </span>
            </motion.div>

            <h1 className="font-display mb-5 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Şarköy{" "}
              <span className="text-gradient">{siteConfig.shortName}</span>{" "}
              Sitesi
            </h1>

            <p className="mb-3 text-xl font-light text-sea-light sm:text-2xl">
              {siteConfig.tagline}
            </p>

            <p className="mb-10 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Denize yürüyerek 1 dakikada ulaşabileceğiniz {siteConfig.name}; 17 blok,
              308 daireden oluşan; beach club, lokal, basket sahası ve daha fazlasını
              sunan huzurlu bir yazlık yaşam alanı.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/site-hakkinda"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-sea px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sea/30 transition-all hover:bg-sea-light hover:shadow-2xl hover:shadow-sea/40"
              >
                Sitemizi Keşfet
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
              >
                İletişime Geç
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="glass animate-float rounded-3xl p-8">
                <p className="mb-6 text-sm font-medium uppercase tracking-widest text-sea-light">
                  Site Özeti
                </p>
                <div className="space-y-5">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/20 text-sea-light">
                        <stat.icon size={22} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-white/60">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-sea/20 blur-xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-4 lg:hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          href="/site-hakkinda"
          className="flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-white"
          aria-label="Site hakkında"
        >
          <span className="text-xs tracking-widest uppercase">Keşfet</span>
          <ChevronDown size={24} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
