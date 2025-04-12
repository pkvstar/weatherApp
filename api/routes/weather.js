const router = require("express").Router();
const axios = require('axios');
require('dotenv').config();
router.get('/api/:city', async (req, res) => {
  // console.log("entered");
    const city = req.params.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
  
      const structuredData = {
        temperature: data.main.temp,
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };
  
      res.status(200).json(structuredData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  });
  module.exports = router;