"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import Link from "next/link";

export default function HomeQuickLinks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-sea">
            Keşfet
          </span>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Site Bölümleri
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/65">
            Her bölüm ayrı bir sayfada açılır. Tıklayarak ilgili sayfaya gidin.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="card-premium group flex items-center justify-between rounded-2xl border border-sand/60 bg-sand-light/40 px-5 py-4 transition-all hover:border-sea/30 hover:bg-white"
              >
                <span className="font-medium text-navy group-hover:text-sea">
                  {link.label}
                </span>
                <ArrowRight
                  size={16}
                  className="text-navy/30 transition-all group-hover:translate-x-1 group-hover:text-sea"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
