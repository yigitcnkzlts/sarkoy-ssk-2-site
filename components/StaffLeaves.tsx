"use client";

import { motion } from "framer-motion";
import { CalendarOff, User } from "lucide-react";
import SectionHeader from "./SectionHeader";

const staffLeaves = [
  {
    name: "Ahmet Yılmaz",
    role: "Site Görevlisi / Bekçi",
    startDate: "20 Haziran 2026",
    endDate: "27 Haziran 2026",
    status: "İzinli",
    substitute: "Yedek görevli devrede",
  },
  {
    name: "Mehmet Demir",
    role: "Bahçıvan",
    startDate: "1 Temmuz 2026",
    endDate: "15 Temmuz 2026",
    status: "Planlandı",
    substitute: "Peyzaj firması ile anlaşmalı",
  },
  {
    name: "Ayşe Kaya",
    role: "Site Yönetimi Sekreterya",
    startDate: "10 Haziran 2026",
    endDate: "12 Haziran 2026",
    status: "İzinli",
    substitute: "Yönetim telefon hattı aktif",
  },
];

const statusColors: Record<string, string> = {
  İzinli: "bg-sea/15 text-sea",
  Planlandı: "bg-gold/20 text-navy",
  "İzin Yok": "bg-navy/10 text-navy/60",
};

export default function StaffLeaves({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="calisan-izinleri" className={`bg-white ${hideHeader ? "py-12 sm:py-16" : "py-24 sm:py-32"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <SectionHeader
          badge="Personel"
          title="Çalışan İzinleri"
          description="Site görevlilerinin güncel izin durumları. İzin dönemlerinde yedek görevli veya iletişim bilgileri burada paylaşılır."
        />
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {staffLeaves.map((staff, i) => (
            <motion.div
              key={staff.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-premium overflow-hidden rounded-3xl border border-sand/50 bg-sand-light/30"
            >
              <div className="flex items-center gap-4 border-b border-sand/60 bg-white px-6 py-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <User size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy">{staff.name}</h3>
                  <p className="text-sm text-navy/55">{staff.role}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[staff.status]}`}
                >
                  {staff.status}
                </span>
              </div>

              <div className="space-y-4 px-6 py-5">
                <div className="flex items-start gap-3">
                  <CalendarOff size={16} className="mt-0.5 flex-shrink-0 text-sea" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-navy/45">
                      İzin Tarihleri
                    </p>
                    <p className="text-sm font-semibold text-navy">
                      {staff.startDate} — {staff.endDate}
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-navy/45">
                    Not
                  </p>
                  <p className="text-sm text-navy/70">{staff.substitute}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-navy/50"
        >
          Güncel izin bilgileri site yönetimi tarafından düzenli olarak güncellenmektedir.
        </motion.p>
      </div>
    </section>
  );
}
