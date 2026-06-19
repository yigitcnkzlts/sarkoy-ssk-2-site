"use client";

import { motion } from "framer-motion";
import { CloudSun, Droplets, Thermometer, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import type { WeatherData } from "@/lib/weather";

export default function WeatherWidget({ compact = false }: { compact?: boolean }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => setWeather(null))
      .finally(() => setLoading(false));
  }, []);

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
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sea-light">
            Şarköy Hava Durumu
          </p>
          <p className="mt-1 text-sm text-white/60">Canlı · Open-Meteo</p>
        </div>
        <CloudSun size={compact ? 28 : 36} className="text-gold" />
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
