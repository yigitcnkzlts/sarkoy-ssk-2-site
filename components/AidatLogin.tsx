"use client";

import LoginField from "@/components/LoginField";
import SiteBrand from "@/components/SiteBrand";
import { motion } from "framer-motion";
import { KeyRound, LogIn, ShieldCheck, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AidatLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/aidat/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Giriş başarısız.");
        return;
      }

      router.refresh();
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-mesh-light py-14 sm:py-20">
      <div className="mx-auto max-w-lg px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-3xl border border-sand/60 bg-white shadow-xl"
        >
          <div className="border-b border-sand/60 bg-navy px-8 py-8 text-center">
            <div className="mb-5 flex justify-center">
              <SiteBrand variant="footer" />
            </div>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/20 text-sea-light">
              <ShieldCheck size={24} />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">Üye Girişi</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/65">
              Aidat ve ödeme bilgilerini görüntülemek için site yönetiminin verdiği
              kullanıcı adı ve şifre ile giriş yapın.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <LoginField
              id="aidat-username"
              label="Kullanıcı Adı"
              icon={User}
              value={username}
              onChange={setUsername}
              placeholder="Örn. ssk2"
              autoComplete="username"
            />

            <LoginField
              id="aidat-password"
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
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sea to-sea-dark py-3.5 text-sm font-semibold text-white shadow-md shadow-sea/25 transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              <LogIn size={16} />
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>

            <p className="text-center text-xs leading-relaxed text-navy/45">
              Giriş bilgilerinizi site yönetiminden alabilirsiniz. Bu sayfa sadece site
              sakinleri içindir.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
