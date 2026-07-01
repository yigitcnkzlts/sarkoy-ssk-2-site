"use client";

import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Announcement, AnnouncementCategory } from "@/lib/types/content";

const categories: AnnouncementCategory[] = ["Toplantı", "Aidat", "Bakım", "Sezon"];

export default function AnnouncementManager({ initial }: { initial: Announcement[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    category: "Toplantı" as AnnouncementCategory,
    hasDocument: false,
    published: true,
  });

  async function refresh() {
    const res = await fetch("/api/admin/announcements");
    setItems(await res.json());
    router.refresh();
  }

  async function create() {
    if (!form.title || !form.description || !form.date) return;
    await fetch("/api/admin/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({
      title: "",
      description: "",
      date: "",
      category: "Toplantı",
      hasDocument: false,
      published: true,
    });
    refresh();
  }

  async function remove(id: string) {
    if (!confirm("Bu duyuruyu silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/admin/announcements/${id}`, { method: "DELETE" });
    refresh();
  }

  async function togglePublish(id: string, published: boolean) {
    await fetch(`/api/admin/announcements/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published }),
    });
    refresh();
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-sand/60 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-semibold text-navy">Yeni Duyuru Ekle</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Başlık"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="admin-input"
          />
          <input
            placeholder="Tarih (ör. 15 Haziran 2026)"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="admin-input"
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as AnnouncementCategory })}
            className="admin-input"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <label className="flex items-center gap-2 text-sm text-navy">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
            />
            Sitede yayınla
          </label>
          <textarea
            placeholder="Duyuru metni"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="admin-input sm:col-span-2"
            rows={4}
          />
        </div>
        <button
          type="button"
          onClick={create}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sea px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} />
          Duyuru Ekle
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
                {item.date} · {item.category}
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
