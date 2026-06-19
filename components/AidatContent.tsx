"use client";

import DuesInfo from "@/components/DuesInfo";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AidatContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/aidat/logout", { method: "POST" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="border-b border-sand/60 bg-sand-light/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm text-navy/65">
            Aidat bilgilerine giriş yapıldı.
          </p>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-sea/30 hover:text-sea disabled:opacity-70"
          >
            <LogOut size={15} />
            {loading ? "Çıkış yapılıyor..." : "Çıkış Yap"}
          </button>
        </div>
      </div>
      <DuesInfo hideHeader />
    </>
  );
}
