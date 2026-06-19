"use client";

import { motion } from "framer-motion";
import { Lock, LogIn, User } from "lucide-react";
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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-premium overflow-hidden rounded-3xl border border-sand/60 bg-sand-light/30 shadow-lg"
        >
          <div className="border-b border-sand/60 bg-navy px-8 py-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/20 text-sea-light">
              <Lock size={28} />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Aidat Girişi
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Aidat bilgilerini görüntülemek için site yönetimi tarafından
              verilen kullanıcı adı ve şifre ile giriş yapın.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 px-8 py-8">
            <div>
              <label
                htmlFor="aidat-username"
                className="mb-2 block text-sm font-medium text-navy"
              >
                Kullanıcı Adı
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/35"
                />
                <input
                  id="aidat-username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="username"
                  required
                  className="w-full rounded-xl border border-sand/80 bg-white py-3 pl-11 pr-4 text-navy outline-none transition-colors focus:border-sea focus:ring-2 focus:ring-sea/20"
                  placeholder="Kullanıcı adınız"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="aidat-password"
                className="mb-2 block text-sm font-medium text-navy"
              >
                Şifre
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/35"
                />
                <input
                  id="aidat-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-sand/80 bg-white py-3 pl-11 pr-4 text-navy outline-none transition-colors focus:border-sea focus:ring-2 focus:ring-sea/20"
                  placeholder="Şifreniz"
                />
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sea to-sea-dark py-3.5 text-sm font-semibold text-white shadow-md shadow-sea/30 transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              <LogIn size={16} />
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
