import EventManager from "@/components/admin/EventManager";
import { contentStore } from "@/lib/db/store";

export default function AdminEtkinliklerPage() {
  const events = contentStore.getEvents();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-navy">Etkinlikler</h1>
      <p className="mt-2 text-navy/60">Site etkinlik takvimini buradan güncelleyin.</p>
      <div className="mt-8">
        <EventManager initial={events} />
      </div>
    </div>
  );
}
