import AnnouncementManager from "@/components/admin/AnnouncementManager";
import { contentStore } from "@/lib/db/store";

export default function AdminDuyurularPage() {
  const announcements = contentStore.getAnnouncements();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-navy">Duyurular</h1>
      <p className="mt-2 text-navy/60">Site sakinlerinin göreceği duyuruları buradan yönetin.</p>
      <div className="mt-8">
        <AnnouncementManager initial={announcements} />
      </div>
    </div>
  );
}
