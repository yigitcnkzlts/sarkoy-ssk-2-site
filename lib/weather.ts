const weatherLabels: Record<number, string> = {
  0: "Açık",
  1: "Az Bulutlu",
  2: "Parçalı Bulutlu",
  3: "Kapalı",
  45: "Sisli",
  48: "Sisli",
  51: "Çisenti",
  53: "Çisenti",
  55: "Çisenti",
  61: "Yağmurlu",
  63: "Yağmurlu",
  65: "Şiddetli Yağmur",
  80: "Sağanak",
  81: "Sağanak",
  82: "Sağanak",
  95: "Fırtına",
};

export function weatherLabel(code: number) {
  return weatherLabels[code] ?? "Değişken";
}

export type WeatherData = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  label: string;
  high: number;
  low: number;
};

export async function fetchSarkoyWeather(): Promise<WeatherData | null> {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=40.6136&longitude=27.0864&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FIstanbul&forecast_days=1";

    const response = await fetch(url, { next: { revalidate: 1800 } });
    if (!response.ok) return null;

    const data = await response.json();
    const code = data.current.weather_code as number;

    return {
      temperature: Math.round(data.current.temperature_2m),
      humidity: data.current.relative_humidity_2m,
      windSpeed: Math.round(data.current.wind_speed_10m),
      label: weatherLabel(code),
      high: Math.round(data.daily.temperature_2m_max[0]),
      low: Math.round(data.daily.temperature_2m_min[0]),
    };
  } catch {
    return null;
  }
}
