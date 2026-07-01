import { isAdminAuthenticated } from "@/lib/admin-auth";
import { contentStore } from "@/lib/db/store";
import { NextResponse } from "next/server";

async function guard() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await guard();
  if (denied) return denied;
  return NextResponse.json(contentStore.getAnnouncements());
}

export async function POST(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  const body = await request.json();
  return NextResponse.json(contentStore.createAnnouncement(body), { status: 201 });
}
