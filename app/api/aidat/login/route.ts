import {
  AIDAT_COOKIE,
  getAidatSessionToken,
  isValidAidatCredentials,
} from "@/lib/aidat-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const username = String(body.username ?? "").trim();
  const password = String(body.password ?? "");

  if (!isValidAidatCredentials(username, password)) {
    return NextResponse.json(
      { error: "Kullanıcı adı veya şifre hatalı." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(AIDAT_COOKIE, getAidatSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
