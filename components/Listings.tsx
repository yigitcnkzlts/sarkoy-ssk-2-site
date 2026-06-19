"use client";

import { motion } from "framer-motion";
import { Home, Key, Megaphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const listings = [
  {
    icon: Home,
    type: "Satılık",
    typeColor: "bg-sea",
    title: "Satılık Yazlık İlanı",
    description:
      "Denize yakın, bakımlı 2+1 yazlık daire. Site içinde güvenli ve huzurlu bir yaşam. Geniş balkon, deniz manzarası.",
    price: "Fiyat için iletişime geçin",
  },
  {
    icon: Key,
    type: "Kiralık",
    typeColor: "bg-navy",
    title: "Kiralık Yazlık İlanı",
    description:
      "Yaz sezonu için kiralık, eşyalı ve kullanıma hazır yazlık daire. Aileler için ideal konum.",
    price: "Fiyat için iletişime geçin",
  },
  {
    icon: Megaphone,
    type: "Duyuru",
    typeColor: "bg-gold/80",
    title: "Site İçi Duyuru",
    description:
      "Site sakinlerine yönelik duyuru: Ortak alan kullanım kuralları hakkında bilgilendirme.",
    price: "Detaylar için tıklayın",
  },
];

export default function Listings({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="ilanlar" className={`bg-mesh-light ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="İlanlar"
          title="Satılık & Kiralık İlanlar"
          description="Site sakinlerinden güncel satılık, kiralık ve duyuru ilanları."
        />
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, i) => (
            <motion.article
              key={listing.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-premium group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-sea">
                <listing.icon
                  size={56}
                  className="text-white/20 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[url('/images/gallery-3.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-bold text-white ${listing.typeColor}`}
                >
                  {listing.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display mb-2 text-xl font-bold text-navy transition-colors group-hover:text-sea">
                  {listing.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-navy/65">
                  {listing.description}
                </p>
                <div className="flex items-center justify-between border-t border-sand pt-5">
                  <span className="text-sm font-medium text-sea">{listing.price}</span>
                  <button
                    type="button"
                    className="rounded-xl bg-navy px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-sea"
                  >
                    Detaylar
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
