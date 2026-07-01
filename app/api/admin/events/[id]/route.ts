import { revalidateSiteContent } from "@/lib/revalidate-content";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { contentStore } from "@/lib/db/store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  const item = await contentStore.updateEvent((await params).id, await request.json());
  if (!item) return NextResponse.json({ error: "Bulunamadı" }, { status: 404 });
  revalidateSiteContent();
  return NextResponse.json(item);
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  await contentStore.deleteEvent((await params).id);
  revalidateSiteContent();
  return NextResponse.json({ success: true });
}
