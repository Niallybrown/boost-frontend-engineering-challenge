import { LocationData, Weather } from "../types";

export interface AppState {
  searchStr: string;
  locations: LocationData[];
  selectedLocation: LocationData | null;
  weather: Weather | null;
}

export enum ActionTypes {
  SET_SEARCH_STR = "setSearchStr",
  SET_LOCATIONS = "setLocations",
  SET_WEATHER = "setCurrentWeather",
}

export type Action =
  | {
      type: ActionTypes.SET_SEARCH_STR;
      payload: {
        searchStr: AppState["searchStr"];
      };
    }
  | {
      type: ActionTypes.SET_LOCATIONS;
      payload: {
        locations: AppState["locations"];
      };
    }
  | {
      type: ActionTypes.SET_WEATHER;
      payload: {
        weather: AppState["weather"];
      };
    };
