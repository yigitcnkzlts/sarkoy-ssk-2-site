"use client";

import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { EventTag, EventType, SiteEvent } from "@/lib/types/content";

export default function EventManager({ initial }: { initial: SiteEvent[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    tag: "Sosyal" as EventTag,
    type: "etkinlik" as EventType,
    image: "",
    published: true,
  });

  async function refresh() {
    const res = await fetch("/api/admin/events");
    setItems(await res.json());
    router.refresh();
  }

  async function create() {
    if (!form.title || !form.date || !form.description) return;
    await fetch("/api/admin/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        image: form.image || undefined,
      }),
    });
    setForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      tag: "Sosyal",
      type: "etkinlik",
      image: "",
      published: true,
    });
    refresh();
  }

  async function remove(id: string) {
    if (!confirm("Bu etkinliği silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
    refresh();
  }

  async function togglePublish(id: string, published: boolean) {
    await fetch(`/api/admin/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published }),
    });
    refresh();
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-sand/60 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-semibold text-navy">Yeni Etkinlik / Toplantı Ekle</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Başlık"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="admin-input sm:col-span-2"
          />
          <input
            placeholder="Tarih"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="admin-input"
          />
          <input
            placeholder="Saat"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="admin-input"
          />
          <input
            placeholder="Konum"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="admin-input"
          />
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value as EventType })}
            className="admin-input"
          >
            <option value="etkinlik">Etkinlik</option>
            <option value="toplanti">Toplantı</option>
          </select>
          <input
            placeholder="Görsel yolu (opsiyonel, /images/...)"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="admin-input sm:col-span-2"
          />
          <textarea
            placeholder="Açıklama"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="admin-input sm:col-span-2"
            rows={3}
          />
        </div>
        <button
          type="button"
          onClick={create}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sea px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} />
          Etkinlik Ekle
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-sand/60 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold text-navy">{item.title}</p>
              <p className="text-sm text-navy/50">
                {item.date} · {item.type} · {item.tag}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => togglePublish(item.id, !item.published)}
                className={`rounded-lg px-3 py-1 text-xs font-medium ${
                  item.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.published ? "Yayında" : "Taslak"}
              </button>
              <button
                type="button"
                onClick={() => remove(item.id)}
                className="rounded-lg p-2 text-red-500 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
