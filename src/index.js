import React from 'react';
import ReactDOM from 'react-dom';
import WeatherWidget from './WeatherWidget';

ReactDOM.render(
  <React.StrictMode>
    <WeatherWidget />
  </React.StrictMode>,
  document.getElementById('weather-root') // Змініть на ID вашого елементу, куди ви хочете вставити віджет
);