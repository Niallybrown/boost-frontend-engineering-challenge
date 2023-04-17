export interface LocationData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type Coords = Pick<LocationData, "lat" | "lon">;

export interface CurrenWeather {
  main: string;
  description: string;
  icon: string;
  temperature: number;
}

export interface Weather {
  name: string;
  currentWeather: CurrenWeather;
  sunriseTimestamp: number;
  sunsetTimestamp: number;
}
