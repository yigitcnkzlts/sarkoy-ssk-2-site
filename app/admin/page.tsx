import { contentStore } from "@/lib/db/store";
import { Calendar, Megaphone } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const stats = await contentStore.getStats();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-navy">Yönetim Paneli</h1>
      <p className="mt-2 text-navy/60">
        Duyuru ve etkinlikleri buradan yönetebilirsiniz. Değişiklikler sitede anında görünür.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-sand/60 bg-white p-6 shadow-sm">
          <p className="text-sm text-navy/50">Toplam Duyuru</p>
          <p className="mt-1 text-3xl font-bold text-navy">{stats.announcements}</p>
          <p className="mt-1 text-xs text-green-600">{stats.publishedAnnouncements} yayında</p>
        </div>
        <div className="rounded-2xl border border-sand/60 bg-white p-6 shadow-sm">
          <p className="text-sm text-navy/50">Toplam Etkinlik</p>
          <p className="mt-1 text-3xl font-bold text-navy">{stats.events}</p>
          <p className="mt-1 text-xs text-green-600">{stats.publishedEvents} yayında</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/duyurular"
          className="group flex items-center gap-4 rounded-2xl border border-sand/60 bg-white p-6 shadow-sm transition-all hover:border-sea/40 hover:shadow-md"
        >
          <div className="rounded-xl bg-sea/10 p-3 text-sea">
            <Megaphone size={24} />
          </div>
          <div>
            <p className="font-semibold text-navy group-hover:text-sea">Duyuruları Yönet</p>
            <p className="text-sm text-navy/50">Ekle, düzenle veya yayından kaldır</p>
          </div>
        </Link>
        <Link
          href="/admin/etkinlikler"
          className="group flex items-center gap-4 rounded-2xl border border-sand/60 bg-white p-6 shadow-sm transition-all hover:border-sea/40 hover:shadow-md"
        >
          <div className="rounded-xl bg-navy/10 p-3 text-navy">
            <Calendar size={24} />
          </div>
          <div>
            <p className="font-semibold text-navy group-hover:text-sea">Etkinlikleri Yönet</p>
            <p className="text-sm text-navy/50">Takvim ve toplantıları güncelle</p>
          </div>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <strong>Not:</strong> Eklediğiniz içeriklerin sitede görünmesi için &quot;Sitede yayınla&quot;
        kutusunun işaretli olduğundan emin olun.
      </div>
    </div>
  );
}
