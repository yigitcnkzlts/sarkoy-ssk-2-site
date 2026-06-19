import { fetchSarkoyWeather } from "@/lib/weather";
import { NextResponse } from "next/server";

export async function GET() {
  const weather = await fetchSarkoyWeather();
  if (!weather) {
    return NextResponse.json({ error: "Weather unavailable" }, { status: 503 });
  }
  return NextResponse.json(weather);
}
