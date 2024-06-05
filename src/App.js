// src/App.js
import React from 'react';
import WeatherWidget from './WeatherWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Widget</h1>
      </header>
      <main>
        <WeatherWidget />
      </main>
    </div>
  );
}

export default App;
