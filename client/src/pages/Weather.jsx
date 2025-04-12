import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import WeatherCard from '../Components/WeatherCard';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/weather/api/${city}`);
    //   console.log(res);
      setWeather({
        city,
        ...res.data
      });
    } catch (err) {
      console.error(err);
      alert('enter valid city');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value.trim())}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={getWeather}
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          <FaSearch />
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {weather && (
        <WeatherCard
          city={weather.city}
          temperature={weather.temperature}
          condition={weather.condition}
          icon={weather.icon}
          humidity={weather.humidity}
          windSpeed={weather.windSpeed}
        />
      )}
    </div>
  );
};

export default Weather;
