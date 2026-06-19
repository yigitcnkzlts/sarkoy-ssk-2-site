"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/site";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Site genel görünüm", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Yeşil alanlar", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Site girişi", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Ortak alan", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Site manzarası", span: "sm:col-span-2" },
  { src: "/images/gallery-6.jpg", alt: "Yazlık evler", span: "" },
];

export default function Gallery({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="fotograflar" className={`bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="Galeri"
          title="Sitemizden Kareler"
          description={`${siteConfig.fullName}'nin doğal güzelliği ve yaşam alanları. Gerçek site fotoğrafları yakında eklenecektir.`}
        />
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl ${image.span} ${
                image.span.includes("row-span-2") ? "aspect-auto min-h-[280px] sm:min-h-[400px]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                  <Expand size={22} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
