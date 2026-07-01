"use client";

import { motion } from "framer-motion";
import { CloudSun, Droplets, RefreshCw, Thermometer, Wind } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { WeatherData } from "@/lib/weather";

const REFRESH_MS = 5 * 60 * 1000;

function formatUpdatedAt(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(iso));
}

export default function WeatherWidget({ compact = false }: { compact?: boolean }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadWeather = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await fetch("/api/weather", { cache: "no-store" });
      if (!res.ok) throw new Error("weather failed");
      const data = (await res.json()) as WeatherData;
      setWeather(data);
    } catch {
      if (!silent) setWeather(null);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadWeather();
    const interval = setInterval(() => loadWeather(true), REFRESH_MS);
    return () => clearInterval(interval);
  }, [loadWeather]);

  if (loading) {
    return (
      <div
        className={`animate-pulse rounded-3xl bg-white/10 ${compact ? "h-32" : "h-48"}`}
      />
    );
  }

  if (!weather) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`premium-ring overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-light/90 to-navy/90 backdrop-blur-md ${
        compact ? "p-5" : "p-7"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
              Anlık Hava Durumu
            </p>
          </div>
          <p className="mt-1 text-sm text-white/60">{weather.location}</p>
          <p className="mt-1 text-xs text-white/45">
            Son güncelleme: {formatUpdatedAt(weather.updatedAt)}
            {refreshing && " · yenileniyor..."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => loadWeather(true)}
            disabled={refreshing}
            className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
            aria-label="Hava durumunu yenile"
          >
            <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
          </button>
          <CloudSun size={compact ? 28 : 36} className="text-gold" />
        </div>
      </div>

      <div className="flex items-end gap-3">
        <p className={`font-display font-bold text-white ${compact ? "text-4xl" : "text-5xl"}`}>
          {weather.temperature}°
        </p>
        <div className="mb-1">
          <p className="font-medium text-white/90">{weather.label}</p>
          <p className="text-sm text-white/50">
            Y:{weather.high}° D:{weather.low}°
          </p>
        </div>
      </div>

      {!compact && (
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Thermometer size={16} className="text-sea-light" />
            {weather.high}° / {weather.low}°
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Droplets size={16} className="text-sea-light" />
            %{weather.humidity}
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Wind size={16} className="text-sea-light" />
            {weather.windSpeed} km/s
          </div>
        </div>
      )}
    </motion.div>
  );
}
