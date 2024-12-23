import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <section>
      <Header />
      <CurrentWeather />
      <WeatherForecast />
    </section>
  );
}

export default App;
