import { revalidateSiteContent } from "@/lib/revalidate-content";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { contentStore } from "@/lib/db/store";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function guard() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await guard();
  if (denied) return denied;
  return NextResponse.json(await contentStore.getEvents());
}

export async function POST(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const item = await contentStore.createEvent(await request.json());
  revalidateSiteContent();
  return NextResponse.json(item, { status: 201 });
}
