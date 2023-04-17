import React, { useCallback, useReducer } from "react";
import {
  getCurrentWeather as getCurrentWeatherFn,
  getLocations as getLocationsFn,
} from "../../API";
import { AppHeader, Grid } from "./styles";
import { ActionTypes } from "../../Store/types";
import { initialState, reducer } from "../../Store";
import { Coords } from "../../types";
import LocationForm from "../LocationForm/LocationForm";
import LocationList from "../LocationList/LocationList";
import WeatherPanel from "../WeatherPanel/WeatherPanel";

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const getLocations = useCallback(async (value: string) => {
    try {
      const res = await getLocationsFn(value);
      dispatch({
        type: ActionTypes.SET_LOCATIONS,
        payload: {
          locations: res.data,
        },
      });
      clearWeatherData();
    } catch (err) {
      console.debug(err);
    }
  }, [])

  const getCurrentWeather = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const location =
      appState.locations[
        parseInt((event.target as HTMLButtonElement).value, 10)
      ];
    const coords: Coords = { lat: location.lat, lon: location.lon };

    try {
      const { data } = await getCurrentWeatherFn(coords);
      dispatch({
        type: ActionTypes.SET_WEATHER,
        payload: {
          weather: data,
        },
      });
      clearLocationsData();
    } catch (err) {
      console.debug(err);
    }
  }

  function clearLocationsData() {
    dispatch({
      type: ActionTypes.SET_LOCATIONS,
      payload: {
        locations: [],
      },
    });
  }

  function clearWeatherData() {
    dispatch({
      type: ActionTypes.SET_WEATHER,
      payload: {
        weather: null,
      },
    });
  }

  return (
    <Grid>
      <AppHeader>Weather forecast service</AppHeader>
      <LocationForm getLocations={getLocations} />
      {appState.locations.length ? (
        <LocationList
          onClick={getCurrentWeather}
          locations={appState.locations}
        />
      ) : null}
      {appState.weather && <WeatherPanel weather={appState.weather} />}
    </Grid>
  );
}

export default App;
