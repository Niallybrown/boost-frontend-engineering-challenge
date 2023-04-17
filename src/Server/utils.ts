import { KELVIN_SUBTRACTOR } from "../constants";
import { Weather } from "../types";

function convertKelvinToCelcius(kelvin: number) {
  const celcius = Math.round(kelvin - KELVIN_SUBTRACTOR);
  return celcius < 0 ? kelvin * -1 : celcius;
}

// Send only the data required in the app
export function formatCurrentWeather(data: any): Weather {
  const {
    weather: [{ main, description, icon }],
    main: { temp },
    sys: { sunrise, sunset },
  } = data;
  return {
    name: "",
    currentWeather: {
      main,
      description,
      icon,
      temperature: convertKelvinToCelcius(temp),
    },
    sunriseTimestamp: sunrise,
    sunsetTimestamp: sunset,
  };
}
