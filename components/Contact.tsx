"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { FormEvent, useState } from "react";
import SectionHeader from "./SectionHeader";
import SiteMap from "./SiteMap";

export default function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className={`bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge="İletişim"
            title="Bize Ulaşın"
            description="Sorularınız, önerileriniz veya talepleriniz için site yönetimi ile iletişime geçin."
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <SiteMap className="premium-ring shadow-xl" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-sand/60 bg-sand-light/30 p-7 shadow-sm sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-5 rounded-full bg-sea/10 p-5 text-sea">
                    <Send size={32} />
                  </div>
                  <h3 className="font-display mb-2 text-2xl font-bold text-navy">
                    Mesajınız Alındı
                  </h3>
                  <p className="text-navy/65">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
                      Ad Soyad
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      className="w-full rounded-2xl border border-sand bg-white px-5 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-sea focus:ring-4 focus:ring-sea/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={siteConfig.phoneDisplay}
                      className="w-full rounded-2xl border border-sand bg-white px-5 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-sea focus:ring-4 focus:ring-sea/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
                      E-posta
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ornek@email.com"
                      className="w-full rounded-2xl border border-sand bg-white px-5 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-sea focus:ring-4 focus:ring-sea/10"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full resize-none rounded-2xl border border-sand bg-white px-5 py-3.5 text-sm text-navy outline-none transition-all placeholder:text-navy/35 focus:border-sea focus:ring-4 focus:ring-sea/10"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sea to-sea-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sea/20 transition-all hover:shadow-2xl sm:w-auto"
                    >
                      <Send size={18} />
                      Mesaj Gönder
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-2xl sm:p-9">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sea/20 blur-2xl" />
              <h3 className="font-display mb-7 text-2xl font-bold text-white">
                İletişim Bilgileri
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <MapPin size={18} className="text-sea-light" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-white/50">
                      Adres
                    </p>
                    <p className="text-sm leading-relaxed text-white/85">
                      {siteConfig.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Phone size={18} className="text-sea-light" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-white/50">
                      Telefon
                    </p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-white/85 hover:text-sea-light">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Mail size={18} className="text-sea-light" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-white/50">
                      E-posta
                    </p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/85 hover:text-sea-light">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-8 grid gap-3">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  <MessageCircle size={16} />
                  WhatsApp ile Yazın
                </a>
                <a
                  href={siteConfig.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <MapPin size={16} />
                  Haritada Görüntüle
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
