"use client";

import LoginField from "@/components/LoginField";
import SiteBrand from "@/components/SiteBrand";
import { motion } from "framer-motion";
import { KeyRound, LogIn, Mail, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <div className="flex min-h-screen items-center justify-center bg-mesh-light px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md overflow-hidden rounded-3xl border border-sand/60 bg-white shadow-xl"
      >
        <div className="border-b border-sand/60 bg-navy px-8 py-8 text-center">
          <div className="mb-5 flex justify-center">
            <SiteBrand variant="footer" />
          </div>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-gold">
            <Settings size={24} />
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Site Yönetim Girişi</h1>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/60">
            Duyuru ve etkinlik yönetimi — yalnızca site yöneticisi erişebilir.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          <LoginField
            id="admin-email"
            label="E-posta"
            icon={Mail}
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="yonetim@ssk2sitesi.com"
            autoComplete="email"
          />

          <LoginField
            id="admin-password"
            label="Şifre"
            icon={KeyRound}
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Şifrenizi girin"
            autoComplete="current-password"
          />

          {error && (
            <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-light disabled:opacity-70"
          >
            <LogIn size={16} />
            {loading ? "Giriş yapılıyor..." : "Panele Giriş Yap"}
          </button>

          <p className="text-center text-xs leading-relaxed text-navy/45">
            Bu giriş aidat sayfasından bağımsızdır. Şifrenizi kimseyle paylaşmayın.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
