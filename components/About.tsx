"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Gauge,
  Heart,
  Home,
  Landmark,
  MapPin,
  Palette,
  Shield,
  Waves,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import SiteBrand from "./SiteBrand";
import { siteConfig, siteFacilities, siteFacts } from "@/lib/site";

const factIcons = [Building2, Home, Waves, Landmark, Palette, Gauge];

const highlights = [
  {
    icon: Waves,
    title: "Denize 1 Dakika",
    description: "Plaj ve deniz havası yürüme mesafesinde.",
    accent: "from-sea/15 to-sea/5",
  },
  {
    icon: Building2,
    title: "17 Blok · 308 Daire",
    description: "Köklü ve geniş bir yazlık topluluğu.",
    accent: "from-navy/10 to-navy/5",
  },
  {
    icon: Heart,
    title: "Aile Dostu Ortam",
    description: "Sosyal alanlar ve etkinliklerle canlı site yaşamı.",
    accent: "from-gold/15 to-gold/5",
  },
  {
    icon: Shield,
    title: "Güvenli Site Yaşamı",
    description: "Düzenli bakım, güvenlik ve yönetim hizmeti.",
    accent: "from-sea-light/20 to-sea-light/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About({ hideHeader = false }: { hideHeader?: boolean }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="site-hakkinda"
      className={`relative overflow-hidden bg-mesh-light ${hideHeader ? "py-12 sm:py-20" : "py-24 sm:py-32"}`}
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-sea/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-72 w-72 rounded-full bg-gold/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge="Sitemiz Hakkında"
            title="Şarköy'ün Kalbinde Huzurlu Yaşam"
            description={`${siteConfig.fullName}; denize 1 dakika, 17 blok ve 308 daire ile huzurlu yazlık yaşam.`}
          />
        )}

        {hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <div className="mb-4 flex justify-center">
              <SiteBrand variant="inline" className="text-2xl" />
            </div>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-navy/65">
              {siteConfig.fullName} hakkında konum, tarihçe ve site olanakları.
            </p>
          </motion.div>
        )}

        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-sea/20" />
            <motion.div style={{ y: imageY }} className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/gallery-1.jpg"
                alt={`${siteConfig.fullName} genel görünüm`}
                width={600}
                height={450}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="premium-ring inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                  <MapPin size={14} className="text-sea-light" />
                  <span className="text-sm font-medium text-white">Şarköy, Tekirdağ</span>
                </div>
                <p className="font-display mt-4 text-3xl font-bold text-white">
                  17 Blok · 308 Daire
                </p>
                <p className="text-sm text-white/75">Denize 1 dakika yürüme mesafesi</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 rounded-2xl bg-white p-4 shadow-xl sm:-right-8"
            >
              <p className="font-display text-3xl font-bold text-sea">1 dk</p>
              <p className="text-xs font-medium text-navy/50">Denize mesafe</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
              Tarihçe & Konum
            </span>
            <h3 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Köklü Bir Yazlık Topluluğu
            </h3>
            <p className="leading-relaxed text-navy/70">
              {siteConfig.fullName}, Tekirdağ&apos;ın sahil ilçesi Şarköy&apos;de, denize
              yürüyerek 1 dakikada ulaşılabilen konumuyla yazlık yaşamın tüm avantajlarını
              sunan köklü bir site yerleşkesidir. 17 blok ve 308 bağımsız bölümden oluşan
              sitemiz, yıllardır ailelerin yaz tatillerini geçirdiği bir yaşam merkezidir.
            </p>
            <p className="leading-relaxed text-navy/70">
              Toplantı odası, lokal, beach club, sahne alanı, yönetim binası, hobi odası,
              teknik oda ve su altyapısı ile donatılmıştır. 2 personel lojmanı ile düzenli
              bakım ve güvenlik hizmeti sunulmaktadır.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Şarköy", "Marmara Kıyısı", "308 Daire", "17 Blok"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="rounded-full border border-sand bg-white px-4 py-1.5 text-sm font-medium text-navy/70"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteFacts.map((fact, i) => {
            const Icon = factIcons[i] ?? Building2;
            return (
              <motion.div
                key={fact.label}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-sand/60 bg-white p-5 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sea/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-sea">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-navy/50">
                      {fact.label}
                    </p>
                    <p className="font-semibold text-navy">{fact.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-sand/50 bg-gradient-to-br ${card.accent} p-6`}
            >
              <div className="mb-4 inline-flex rounded-2xl bg-white p-3 shadow-sm transition-transform group-hover:scale-110">
                <card.icon size={22} className="text-navy" />
              </div>
              <h3 className="mb-2 font-semibold text-navy">{card.title}</h3>
              <p className="text-sm leading-relaxed text-navy/65">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-navy"
        >
          <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-sea/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sea/40 to-transparent" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
                Site Olanakları
              </span>
              <h3 className="font-display mb-4 text-3xl font-bold text-white">
                Ortak Alanlar ve Hizmetler
              </h3>
              <p className="leading-relaxed text-white/65">
                {siteConfig.fullName} sakinlerine beach club, lokal, etkinlik alanları,
                yönetim binası ve günlük ihtiyaç imkânları sunmaktadır.
              </p>
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-2.5 sm:grid-cols-2"
            >
              {siteFacilities.map((item) => (
                <motion.li
                  key={item.title}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/10"
                >
                  <CheckCircle2 size={16} className="flex-shrink-0 text-sea-light" />
                  <span className="text-sm text-white/80">{item.title}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
