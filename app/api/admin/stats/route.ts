import { isAdminAuthenticated } from "@/lib/admin-auth";
import { contentStore } from "@/lib/db/store";
import { NextResponse } from "next/server";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }
  return NextResponse.json(contentStore.getStats());
}
