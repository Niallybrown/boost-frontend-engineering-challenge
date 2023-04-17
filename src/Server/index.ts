import http from "http";
import axios from "axios";
import cors from "cors";
import express from "express";
import {
  OPEN_WEATHER_API_LOCATION_URL,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_WEATHER_URL,
  PORT,
  SERVER_LOCATION_PATH,
  SERVER_WEATHER_PATH,
} from "../constants";
import { formatCurrentWeather } from "./utils";
require("dotenv").config();

/*
  Due to requests from cross-domain sources being blocked this simple server
  has been created to make requests to the OpenWeatherAPI.
  It handles the two get requests /location and /weather in order to get the corresponding data
*/

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const openWeatherAPI = axios.create({
  baseURL: OPEN_WEATHER_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: process.env.API_KEY,
  },
});

app.get("*", async (req, res, next) => {
  if (req.path === SERVER_LOCATION_PATH) {
    try {
      const apiRes = await openWeatherAPI({
        url: OPEN_WEATHER_API_LOCATION_URL,
        params: {
          q: req.query.location,
          limit: 10,
        },
      });
      res.status(200).send(apiRes.data);
    } catch (err) {
      console.debug(err);
    }
  } else if (req.path === SERVER_WEATHER_PATH) {
    try {
      const apiRes = await openWeatherAPI({
        url: OPEN_WEATHER_API_WEATHER_URL,
        params: { ...req.query },
      });
      const weatherData = formatCurrentWeather(apiRes.data);
      res.status(200).send(weatherData);
    } catch (err) {
      console.debug(err);
    }
  }
  next();
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
