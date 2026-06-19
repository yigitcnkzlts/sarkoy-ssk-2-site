"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-fab group fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="WhatsApp ile iletişime geç"
    >
      <span className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]" />
      <MessageCircle size={28} className="relative z-10" fill="currentColor" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-navy px-4 py-2 text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 sm:block">
        WhatsApp ile yazın
      </span>
    </motion.a>
  );
}
