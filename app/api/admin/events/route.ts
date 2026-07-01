import { isAdminAuthenticated } from "@/lib/admin-auth";
import { contentStore } from "@/lib/db/store";
import { NextResponse } from "next/server";

async function guard() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await guard();
  if (denied) return denied;
  return NextResponse.json(contentStore.getEvents());
}

export async function POST(request: Request) {
  const denied = await guard();
  if (denied) return denied;
  return NextResponse.json(contentStore.createEvent(await request.json()), { status: 201 });
}
