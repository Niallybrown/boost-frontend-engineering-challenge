import { Action, ActionTypes, AppState } from "./types";

export const initialState: AppState = {
  searchStr: "",
  locations: [],
  selectedLocation: null,
  weather: null,
};

export const reducer = (
  state: AppState,
  { type, payload }: Action
): AppState => {
  switch (type) {
    case ActionTypes.SET_SEARCH_STR:
      return { ...state, searchStr: payload.searchStr };
    case ActionTypes.SET_LOCATIONS:
      return { ...state, locations: payload.locations };
    case ActionTypes.SET_WEATHER:
      return { ...state, weather: payload.weather };
    default:
      throw new Error("invalid action type!");
  }
};
