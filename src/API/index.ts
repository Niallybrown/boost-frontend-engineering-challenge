import axios from "axios";
import { SERVER_LOCATION_PATH, SERVER_WEATHER_PATH } from "../constants";
import { Coords, LocationData, Weather } from "../types";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLocations = (location: string) =>
  instance<LocationData[]>({
    url: SERVER_LOCATION_PATH,
    params: { location },
  });

export const getCurrentWeather = (coords: Coords) =>
  instance<Weather>({
    url: SERVER_WEATHER_PATH,
    params: coords,
  });
