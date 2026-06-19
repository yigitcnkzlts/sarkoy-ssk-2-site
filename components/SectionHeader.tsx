"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeader({
  badge,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="h-px w-8 shimmer-border" />
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-sea-light" : "text-sea"
          }`}
        >
          {badge}
        </span>
        <div className="h-px w-8 shimmer-border" />
      </div>
      <h2
        className={`font-display mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto max-w-3xl text-base leading-relaxed sm:text-lg ${
            align === "left" ? "mx-0" : ""
          } ${light ? "text-white/70" : "text-navy/65"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
