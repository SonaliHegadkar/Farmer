import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=208912e57d4dc5b2cbd3060ef955416a&units=metric`);
          setWeatherData(response.data);
          setLoading(false);
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="weather-card">Loading...</div>;
  if (error) return <div className="weather-card error">Error: {error}</div>;
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <div className="weather-content">
        
        <p id='weath'>Location: {weatherData.name}</p>
        <p id='weath'>Temperature: {weatherData.main.temp}°C</p>
        <p id='weath'>Weather Condition: {weatherData.weather[0].main}</p>
        <p id='weath'>Feels Like: {weatherData.main.feels_like}°C</p>
        <p id='weath'>Humidity: {weatherData.main.humidity}%</p>
        <p id='weath'>Wind Speed: {weatherData.wind.speed}MPH</p>
      </div>
    </div>
  );
};

export default Weather;
