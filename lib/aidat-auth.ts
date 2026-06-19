import { cookies } from "next/headers";

export const AIDAT_COOKIE = "aidat_session";

const SESSION_TOKEN = process.env.AIDAT_SESSION_TOKEN || "ssk2-aidat-authenticated";

export function getAidatCredentials() {
  return {
    username: process.env.AIDAT_USERNAME || "ssk2",
    password: process.env.AIDAT_PASSWORD || "aidat2026",
  };
}

export function isValidAidatCredentials(username: string, password: string) {
  const expected = getAidatCredentials();
  return username === expected.username && password === expected.password;
}

export async function isAidatAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(AIDAT_COOKIE)?.value === SESSION_TOKEN;
}

export function getAidatSessionToken() {
  return SESSION_TOKEN;
}
