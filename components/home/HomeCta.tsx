"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function HomeCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sea/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white sm:text-4xl">
                {siteConfig.name} ile İletişime Geçin
              </h2>
              <p className="mb-6 max-w-lg leading-relaxed text-white/65">
                Sorularınız, önerileriniz veya site yönetimi talepleriniz için
                bizimle iletişime geçebilirsiniz.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-2xl bg-sea px-8 py-4 font-semibold text-white shadow-xl shadow-sea/30 transition-all hover:bg-sea-light"
              >
                İletişim Formu
                <ArrowRight size={18} />
              </Link>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4 rounded-2xl bg-white/8 p-4 backdrop-blur-sm">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-sea-light" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">Adres</p>
                  <p className="text-sm text-white/85">{siteConfig.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl bg-white/8 p-4 backdrop-blur-sm">
                <Mail size={20} className="mt-0.5 flex-shrink-0 text-sea-light" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">E-posta</p>
                  <p className="text-sm text-white/85">{siteConfig.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl bg-white/8 p-4 backdrop-blur-sm">
                <Phone size={20} className="mt-0.5 flex-shrink-0 text-sea-light" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">Telefon</p>
                  <p className="text-sm text-white/85">Belirlenecek</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
