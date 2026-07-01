"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Calendar,
  Home,
  LayoutDashboard,
  LogOut,
  Megaphone,
} from "lucide-react";
import SiteBrand from "@/components/SiteBrand";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/duyurular", label: "Duyurular", icon: Megaphone },
  { href: "/admin/etkinlikler", label: "Etkinlikler", icon: Calendar },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-full flex-col border-b border-sand/80 bg-white lg:w-64 lg:border-b-0 lg:border-r">
      <div className="border-b border-sand/60 p-5">
        <SiteBrand variant="navbar" />
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-sea">
          Site Yönetim Paneli
        </p>
        <p className="mt-1 text-xs text-navy/45">Sadece yönetici erişimi</p>
      </div>

      <nav className="flex gap-1 overflow-x-auto p-3 lg:flex-col lg:overflow-visible lg:p-4">
        {links.map((link) => {
          const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-navy text-white shadow-md"
                  : "text-navy/70 hover:bg-sand-light hover:text-navy"
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-sand/60 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-navy/70 hover:bg-sand-light"
        >
          <Home size={18} />
          Siteye Dön
        </Link>
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut size={18} />
          Çıkış Yap
        </button>
      </div>
    </aside>
  );
}
