import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Wather App (aplicacion del clima)
        <WeatherLocation></WeatherLocation>
      </header>
    </div>
  );
}

export default App;
