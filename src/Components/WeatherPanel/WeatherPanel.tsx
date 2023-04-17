import moment from "moment";
import { memo } from "react";
import { Weather } from "../../types";
import { WeatherPanelWrapper, WeatherPanelStat } from "./styles";
import { getWeatherIconURL } from "./utils";

interface Props {
  weather: Weather;
}

const WeatherPanel = memo(
  ({
    weather: { name, currentWeather, sunriseTimestamp, sunsetTimestamp },
  }: Props) => {
    const sunriseTime = moment.unix(sunriseTimestamp).format("HH:mm A");
    const sunsetTime = moment.unix(sunsetTimestamp).format("HH:mm A");
    return (
      <WeatherPanelWrapper>
        <p>
          <strong>{name}</strong>
        </p>
        <div>
          <img
            src={getWeatherIconURL(currentWeather.icon)}
            alt={currentWeather.main}
          />
          <p>
            <strong>{currentWeather.main}</strong> -{" "}
            {currentWeather.description}
          </p>
        </div>
        <WeatherPanelStat>
          🌡 Temperature: {currentWeather.temperature}&#8451;
        </WeatherPanelStat>
        <WeatherPanelStat>🌄 Sunrise time: {sunriseTime}</WeatherPanelStat>
        <WeatherPanelStat>🌅 Sunset time: {sunsetTime}</WeatherPanelStat>
      </WeatherPanelWrapper>
    );
  }
);

export default WeatherPanel;
