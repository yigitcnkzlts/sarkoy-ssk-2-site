"use client";

import { motion } from "framer-motion";
import { Lock, LogIn, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SiteBrand from "@/components/SiteBrand";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setError("E-posta veya şifre hatalı. Sadece site yöneticisi giriş yapabilir.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-mesh-light px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md overflow-hidden rounded-3xl border border-sand/60 bg-white shadow-xl"
      >
        <div className="bg-navy px-8 py-8 text-center">
          <div className="mb-4 flex justify-center">
            <SiteBrand variant="footer" />
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Yönetim Girişi</h1>
          <p className="mt-2 text-sm text-white/60">
            Duyuru ve etkinlik yönetimi — sadece site yöneticisi
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">E-posta</label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/35" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="admin-input w-full py-3 pl-11 pr-4"
                placeholder="yonetim@ssk2sitesi.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">Şifre</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/35" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="admin-input w-full py-3 pl-11 pr-4"
                placeholder="••••••••"
              />
            </div>
          </div>
          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-sea py-3.5 text-sm font-semibold text-white disabled:opacity-70"
          >
            <LogIn size={16} />
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
