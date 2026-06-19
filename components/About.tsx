"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Gauge,
  Heart,
  Home,
  Landmark,
  Palette,
  Shield,
  Waves,
} from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { siteConfig, siteFacilities, siteFacts } from "@/lib/site";

const factIcons = [Building2, Home, Waves, Landmark, Palette, Gauge];

const highlights = [
  {
    icon: Waves,
    title: "Denize 1 Dakika",
    description:
      "Denize yürüyerek 1 dakikada ulaşabilirsiniz. Plaj ve deniz havası her an yanınızda.",
  },
  {
    icon: Building2,
    title: "17 Blok · 308 Daire",
    description:
      "Geniş site yerleşkesinde 17 blok ve 308 bağımsız bölüm ile köklü bir yazlık topluluğu.",
  },
  {
    icon: Heart,
    title: "Aile Dostu Ortam",
    description:
      "Beach club, basket sahası ve etkinlik alanlarıyla aileler için ideal bir yaşam.",
  },
  {
    icon: Shield,
    title: "Güvenli Site Yaşamı",
    description:
      "2 personel lojmanı ile düzenli bakım, güvenlik ve site yönetimi hizmeti.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="site-hakkinda" className={`bg-mesh-light ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge="Sitemiz Hakkında"
            title="Şarköy'ün Kalbinde Huzurlu Yaşam"
            description={`${siteConfig.fullName}; 17 blok, 308 daire, denize 1 dakika mesafede. Beach club, lokal, toplantı odası, yönetim binası, hobi odası, teknik oda ve su altyapısı ile donatılmış özel bir yazlık yaşam alanı.`}
          />
        )}

        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/gallery-1.jpg"
                alt={`${siteConfig.fullName} genel görünüm`}
                width={600}
                height={450}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl font-bold text-white">
                  17 Blok · 308 Daire
                </p>
                <p className="text-sm text-white/80">Denize 1 Dakika · Şarköy</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-sea/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Site Tarihçesi ve Konum
            </h3>
            <p className="leading-relaxed text-navy/70">
              {siteConfig.fullName}, Tekirdağ&apos;ın en güzel sahil ilçelerinden biri olan
              Şarköy&apos;de, denize yürüyerek 1 dakikada ulaşılabilen konumuyla yazlık
              yaşamın tüm avantajlarını sunan köklü bir site yerleşkesidir. 17 blok ve 308
              bağımsız bölümden oluşan sitemiz, yıllardır ailelerin yaz tatillerini
              geçirdiği, komşuluk bağlarının güçlendiği bir yaşam merkezi haline gelmiştir.
            </p>
            <p className="leading-relaxed text-navy/70">
              Site bünyesinde toplantı odası, lokal, beach club, sahne ve etkinlik alanı,
              bakkal/market, basket sahası, yönetim binası, danışma, hobi odası, teknik oda,
              2 çöp evi, 2 hidrofor odası, 1 kuyu ve 2 su deposu bulunmaktadır. 2 personel
              lojmanı ile düzenli bakım ve güvenlik hizmeti sunulmaktadır.
            </p>
            <p className="leading-relaxed text-navy/70">
              Yaz sezonunda canlanan site, site sakinlerine huzurlu bir yazlık yaşam sunarken;
              kış aylarında da bakım ve güvenlik hizmetleriyle site değerini korumaktadır.
            </p>
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
                className="card-premium flex items-center gap-4 rounded-2xl border border-sand/60 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sea/10 text-sea">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-navy/50">
                    {fact.label}
                  </p>
                  <p className="font-semibold text-navy">{fact.value}</p>
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
          className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="card-premium group rounded-3xl bg-white p-7 shadow-sm"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-navy p-3.5 text-white transition-colors group-hover:bg-sea">
                <card.icon size={22} />
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
          className="overflow-hidden rounded-3xl bg-navy p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
                Site Olanakları
              </span>
              <h3 className="font-display mb-4 text-3xl font-bold text-white">
                Yaşam Kalitesi ve Konfor
              </h3>
              <p className="leading-relaxed text-white/65">
                {siteConfig.fullName}, sakinlerine sadece bir yazlık değil; beach club,
                lokal, etkinlik alanları ve spor imkânlarıyla zenginleştirilmiş sosyal bir
                yaşam alanı sunmaktadır.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {siteFacilities.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-sea-light"
                  />
                  <span className="text-sm text-white/75">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
