"use client";

import { motion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery";

const previewImages = galleryImages.slice(0, 4);

export default function HomeGalleryPreview() {
  return (
    <section className="bg-mesh-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
              Galeri
            </span>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Siteden Kareler
            </h2>
          </div>
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sea transition-all hover:gap-3"
          >
            Tüm Galeri
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {previewImages.map((image, i) => (
            <motion.div
              key={`${image.src}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[320px]" : "aspect-square"
              }`}
            >
              <Link href="/galeri" className="block h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-md">
                    <Expand size={18} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-sm font-medium text-white">{image.alt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
