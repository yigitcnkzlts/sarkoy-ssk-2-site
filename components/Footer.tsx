import { footerLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import SiteBrand from "@/components/SiteBrand";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-50" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <SiteBrand variant="footer" className="mb-5" />
            <p className="mb-6 text-sm leading-relaxed text-white/55">
              Şarköy&apos;ün sakin atmosferinde, komşuluk kültürünü ve yazlık yaşam
              konforunu bir araya getiren özel bir yaşam alanı. Denize yakın, aile
              dostu ve huzurlu bir site yerleşkesi.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                Şarköy
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                Tekirdağ
              </span>
              <span className="rounded-full bg-sea/20 px-3 py-1 text-xs text-sea-light">
                SSK 2
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
              Hızlı Menü
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-sea-light" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/55">
                <Phone size={16} className="flex-shrink-0 text-sea-light" />
                Belirlenecek
              </li>
              <li className="flex items-center gap-3 text-sm text-white/55">
                <Mail size={16} className="flex-shrink-0 text-sea-light" />
                {siteConfig.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/35">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. Tüm hakları
            saklıdır.
          </p>
          <p className="text-xs text-white/25">
            Denize yakın · Aile dostu · Huzurlu yaşam
          </p>
        </div>
      </div>
    </footer>
  );
}
