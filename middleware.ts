import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";
  const hasSession = request.cookies.get("admin_session")?.value;

  if (isAdminRoute && !isLoginPage && !hasSession) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isLoginPage && hasSession) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
