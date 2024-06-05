import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';
const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=fded99a9a581fe9c6df8e4de0a353727&&units=metric&lang=uk'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };
  
    if (loading) {
      return <div className="weather-widget loading">Loading...</div>;
    }
  
    if (error) {
      return <div className="weather-widget error">{error}</div>;
    }
  
    return (
      <div className="weather-widget">
        {weatherData ? (
          <div>
            <h2>Погода у {weatherData.name}</h2>
            <p className="temperature">Температура: {weatherData.main.temp}°C</p>
            <p>Відчуття: {weatherData.main.feels_like}°C</p>
            <p>Загальний опис: {weatherData.weather[0].description}</p>
            <p>Вологість: {weatherData.main.humidity}%</p>
            <p>Швидкість вітру: {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    );
  };
  
  export default WeatherWidget;