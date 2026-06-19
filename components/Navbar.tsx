"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, ChevronRight, Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showSolid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-4 sm:py-3 lg:gap-4 ${
            showSolid ? "nav-shell-scrolled" : "nav-shell"
          }`}
        >
          <Link href="/" className="group flex shrink-0 items-center gap-3 pr-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
                showSolid
                  ? "bg-gradient-to-br from-sea to-sea-dark text-white shadow-md shadow-sea/25"
                  : "bg-white/15 text-sea-light backdrop-blur-sm"
              }`}
            >
              <Building2 size={20} strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-display text-base font-bold leading-none transition-colors ${
                  showSolid ? "text-navy" : "text-white"
                }`}
              >
                {siteConfig.shortName} Sitesi
              </p>
              <p
                className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors ${
                  showSolid ? "text-navy/45" : "text-white/50"
                }`}
              >
                Şarköy · Tekirdağ
              </p>
            </div>
          </Link>

          <div
            className={`mx-auto hidden min-w-0 max-w-full flex-1 items-center justify-center overflow-x-auto rounded-xl px-1 py-1 xl:flex [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              showSolid ? "nav-track-scrolled" : "nav-track"
            }`}
          >
            <ul className="flex items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch
                      className={`nav-link relative z-10 block whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium xl:px-3.5 xl:text-sm ${
                        isActive ? "nav-link-active" : ""
                      } ${
                        showSolid
                          ? isActive
                            ? "text-sea"
                            : "text-navy/70 hover:text-navy"
                          : isActive
                            ? "text-white"
                            : "text-white/75 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/iletisim"
              className={`hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex ${
                showSolid
                  ? "bg-gradient-to-r from-sea to-sea-dark text-white shadow-md shadow-sea/30 hover:shadow-lg hover:shadow-sea/40"
                  : "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              <Phone size={14} />
              <span className="hidden xl:inline">İletişim</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all xl:hidden ${
                showSolid
                  ? "bg-navy/5 text-navy hover:bg-navy/10"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Menüyü aç"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-navy-dark/60 backdrop-blur-sm xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="mobile-drawer fixed right-0 top-0 z-[70] flex h-full w-[min(320px,88vw)] flex-col shadow-2xl xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sea/20 text-sea-light">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">{siteConfig.shortName} Sitesi</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">
                      Site Yönetimi
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Menüyü kapat"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-1">
                  <motion.li
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all ${
                        pathname === "/"
                          ? "bg-sea/20 text-sea-light"
                          : "text-white/75 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      <span className="font-medium">Ana Sayfa</span>
                      <ChevronRight
                        size={16}
                        className={pathname === "/" ? "text-sea-light" : "text-white/30"}
                      />
                    </Link>
                  </motion.li>
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (i + 1) * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all ${
                            isActive
                              ? "bg-sea/20 text-sea-light"
                              : "text-white/75 hover:bg-white/8 hover:text-white"
                          }`}
                        >
                          <span className="font-medium">{link.label}</span>
                          <ChevronRight
                            size={16}
                            className={isActive ? "text-sea-light" : "text-white/30"}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-white/10 p-5">
                <Link
                  href="/iletisim"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sea to-sea-dark py-3.5 text-sm font-semibold text-white shadow-lg shadow-sea/30"
                >
                  <Phone size={15} />
                  İletişime Geç
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
