"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/gallery";
import { siteConfig } from "@/lib/site";

export default function Gallery({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Tümü");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tümü"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % filtered.length,
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  const current: GalleryImage | undefined =
    lightboxIndex !== null ? filtered[lightboxIndex] : undefined;

  return (
    <section id="fotograflar" className={`bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            badge="Galeri"
            title="Sitemizden Kareler"
            description={`${siteConfig.fullName}'nin doğal güzelliği, denizi ve yaşam alanları.`}
          />
        )}

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-navy text-white shadow-lg shadow-navy/20"
                  : "bg-sand-light/60 text-navy/70 hover:bg-sand-light hover:text-navy"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.button
                key={`${image.src}-${image.alt}-${index}`}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                onClick={() => openLightbox(index)}
                className={`group relative cursor-zoom-in overflow-hidden rounded-3xl text-left ${image.span ?? ""} ${
                  image.span?.includes("row-span-2")
                    ? "aspect-auto min-h-[280px] sm:min-h-[400px]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                    <Expand size={22} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="mb-2 inline-block rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                    {image.category}
                  </span>
                  <p className="font-medium text-white">{image.alt}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {current && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 p-4 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
              aria-label="Kapat"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Önceki"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              className="absolute right-2 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Sonraki"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative h-[70vh] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="rounded-2xl object-contain"
                sizes="100vw"
                priority
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-lg font-semibold text-white">{current.alt}</p>
                <p className="text-sm text-white/50">
                  {lightboxIndex + 1} / {filtered.length} · {current.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
