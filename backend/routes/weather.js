const express = require('express');
const router = express.Router();
const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * GET /api/weather/forecast
 * Get weather forecast for a city
 * Query params: city (required), units (optional, default: metric)
 */
router.get('/forecast', async (req, res) => {
    try {
        const { city, units = 'metric' } = req.query;

        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const url = `${OPENWEATHER_API_URL}/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${units}`;
        
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        
        if (error.response?.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }
        
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

/**
 * GET /api/weather/current
 * Get current weather for a city
 * Query params: city (required), units (optional, default: metric)
 */
router.get('/current', async (req, res) => {
    try {
        const { city, units = 'metric' } = req.query;

        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const url = `${OPENWEATHER_API_URL}/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${units}`;
        
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        
        if (error.response?.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }
        
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

/**
 * GET /api/weather/coordinates
 * Get weather by coordinates (latitude, longitude)
 * Query params: lat (required), lon (required), units (optional, default: metric)
 */
router.get('/coordinates', async (req, res) => {
    try {
        const { lat, lon, units = 'metric' } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const url = `${OPENWEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${units}`;
        
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

module.exports = router;
