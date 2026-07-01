import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";
const SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN || "ssk2-admin-authenticated";

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL || "yonetim@ssk2sitesi.com",
    password: process.env.ADMIN_PASSWORD || "yonetim2026",
  };
}

export function isValidAdminCredentials(email: string, password: string) {
  const expected = getAdminCredentials();
  return email.trim() === expected.email && password === expected.password;
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === SESSION_TOKEN;
}

export function getAdminSessionToken() {
  return SESSION_TOKEN;
}
