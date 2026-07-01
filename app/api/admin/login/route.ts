import {
  ADMIN_COOKIE,
  getAdminSessionToken,
  isValidAdminCredentials,
} from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!isValidAdminCredentials(email, password)) {
    return NextResponse.json({ error: "E-posta veya şifre hatalı." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, getAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
