import { isAdminAuthenticated } from "@/lib/admin-auth";
import { contentStore } from "@/lib/db/store";
import { NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  const item = contentStore.updateEvent((await params).id, await request.json());
  if (!item) return NextResponse.json({ error: "Bulunamadı" }, { status: 404 });
  return NextResponse.json(item);
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  contentStore.deleteEvent((await params).id);
  return NextResponse.json({ success: true });
}
