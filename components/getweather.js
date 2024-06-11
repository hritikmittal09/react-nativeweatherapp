/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable dot-notation */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import Geolocation from 'react-native-geolocation-service';
import { api_key } from "@env"; // Make sure this is correctly imported from your environment variables

export const useWeatherData = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;
        const response = await fetch(url);
        const result = await response.json();
        setWeather(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
       
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return { weather, loading, error };
};
