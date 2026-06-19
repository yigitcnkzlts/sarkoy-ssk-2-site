"use client";

import { motion } from "framer-motion";
import { Building2, Heart, MapPin, Waves } from "lucide-react";
import { siteConfig } from "@/lib/site";

const highlights = [
  {
    icon: Waves,
    title: "Denize 1 Dakika",
    text: "Denize yürüyerek 1 dakikada ulaşabilirsiniz. Plaj keyfi her an elinizin altında.",
  },
  {
    icon: Building2,
    title: "17 Blok · 308 Daire",
    text: "Geniş site yerleşkesinde 17 blok ve 308 bağımsız bölüm.",
  },
  {
    icon: Heart,
    title: "Zengin Olanaklar",
    text: "Beach club, lokal, yönetim binası, hobi odası ve basket sahası.",
  },
  {
    icon: MapPin,
    title: "Şarköy'de Konum",
    text: "Tekirdağ'ın incisi Şarköy'de, Marmara kıyısında huzurlu bir yaşam.",
  },
];

export default function HomeIntro() {
  return (
    <section className="bg-mesh-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
              Hoş Geldiniz
            </span>
            <h2 className="font-display mb-5 text-3xl font-bold text-navy sm:text-4xl">
              {siteConfig.name}&apos;ne Hoş Geldiniz
            </h2>
            <p className="mb-4 leading-relaxed text-navy/70">
              {siteConfig.fullName}, Şarköy&apos;ün sakin atmosferinde 17 blok ve 308
              daireden oluşan, denize 1 dakika mesafede konumlanmış özel bir site
              yerleşkesidir. Yönetim binası, danışma, hobi odası, teknik oda ve su
              altyapısı dahil zengin site olanaklarına sahiptir.
            </p>
            <p className="leading-relaxed text-navy/70">
              Duyurular, etkinlikler, aidat bilgileri ve iletişim kanalları bu web sitesi
              üzerinden site sakinlerine sunulmaktadır.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-premium rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-sea/10 p-3 text-sea">
                  <item.icon size={22} />
                </div>
                <h3 className="mb-2 font-semibold text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-navy/65">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
