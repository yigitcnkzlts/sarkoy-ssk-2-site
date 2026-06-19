"use client";

import { motion } from "framer-motion";
import { Banknote, Building2, CreditCard, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/site";

const duesCards = [
  {
    icon: Banknote,
    title: "Güncel Aidat Bilgisi",
    items: [
      { label: "Aylık Aidat", value: "Belirlenecek" },
      { label: "Ödeme Dönemi", value: "Her ayın 1-10'u arası" },
      { label: "Son Ödeme Tarihi", value: "Her ayın 10'u" },
    ],
  },
  {
    icon: CreditCard,
    title: "Banka Hesap Bilgileri",
    items: [
      { label: "Banka", value: "Belirlenecek" },
      { label: "IBAN", value: "TR00 0000 0000 0000 0000 0000 00" },
      { label: "Hesap Sahibi", value: siteConfig.managementName },
    ],
  },
  {
    icon: Building2,
    title: "Ödeme Açıklaması",
    items: [
      { label: "Açıklama Formatı", value: "Blok No - Daire No - Ad Soyad" },
      { label: "Örnek", value: "A-12 - Ahmet Yılmaz" },
      { label: "Not", value: "Açıklama kısmına mutlaka daire bilgisi yazınız." },
    ],
  },
  {
    icon: Phone,
    title: "Yönetim İletişim Bilgisi",
    items: [
      { label: "Telefon", value: "Belirlenecek" },
      { label: "E-posta", value: siteConfig.managementEmail },
      { label: "Çalışma Saatleri", value: "Hafta içi 09:00 - 17:00" },
    ],
  },
];

export default function DuesInfo({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="aidat" className={`bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="Aidat"
          title="Aidat Bilgileri"
          description="Aidat ödeme bilgileri ve yönetim iletişim detayları. Gerçek tutar ve IBAN bilgileri daha sonra güncellenecektir."
        />
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {duesCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-premium overflow-hidden rounded-3xl border border-sand/50 bg-sand-light/40"
            >
              <div className="flex items-center gap-4 border-b border-sand/60 bg-white px-7 py-5">
                <div className="rounded-2xl bg-sea p-3 text-white">
                  <card.icon size={20} />
                </div>
                <h3 className="font-semibold text-navy">{card.title}</h3>
              </div>
              <dl className="space-y-0 px-7 py-5">
                {card.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-0.5 border-b border-sand/40 py-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <dt className="text-sm text-navy/55">{item.label}</dt>
                    <dd className="text-sm font-semibold text-navy">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
