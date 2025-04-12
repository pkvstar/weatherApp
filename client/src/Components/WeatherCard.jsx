import React from 'react';

const WeatherCard = ({ city, temperature, condition, icon, humidity, windSpeed }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-80 text-center">
      <h2 className="text-xl font-semibold mb-2">{city.toUpperCase()}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={condition}
        className="mx-auto"
      />
      <p className="text-3xl font-bold">{temperature}°C</p>
      <p className="text-gray-700">{condition}</p>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>💧 {humidity}%</span>
        <span>💨 {windSpeed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherCard;
