import './App.css';
import { useState, useEffect } from 'react';
import Forecast from './components/forecast';
import Header from './components/header';
import Input from './components/input';
import TemperatureDetails from './components/temperatureDetails';
import TimeAndLocation from './components/timeAndLocation';
import getWeatherData from './service/weather';
function App() {
  const [search, setSearch] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const fetchData = async () => {
    const data = await getWeatherData({ ...search, units });
    setWeather(data);
  }

  useEffect(() => {
    fetchData();
  }, [search, units]);

  const getBackgroundColour = () => {
    if (!weather) return `background`;
    const threshold = units === 'metric' ? 20 : 60;
    if(weather.temp <= threshold){
      return "background"
    }else{
      return "background-hot"
    }
  }
  return (
    <div className={`App ${getBackgroundColour()}`}>
      <Header setSearch={setSearch} />
      <Input
        setSearch={setSearch}
        setUnits={setUnits}
        units={units}
      />
      {weather &&
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast
            title="hourly forecast"
            forecast={weather.hourly}
          />
          <Forecast
            title="daily forecast"
            forecast={weather.daily}
          />
        </>}

    </div>
  );
}

export default App;
