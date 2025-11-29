const axios = require('axios');
const config = require('../config/config');

/**
 * Fetch weather forecast data for a city
 */
const getWeatherForecast = async (city, units = 'metric') => {
    try {
        const url = `${config.OPENWEATHER_API_URL}/forecast?q=${city}&appid=${config.OPENWEATHER_API_KEY}&units=${units}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetch current weather data for a city
 */
const getCurrentWeather = async (city, units = 'metric') => {
    try {
        const url = `${config.OPENWEATHER_API_URL}/weather?q=${city}&appid=${config.OPENWEATHER_API_KEY}&units=${units}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetch weather data by coordinates
 */
const getWeatherByCoordinates = async (lat, lon, units = 'metric') => {
    try {
        const url = `${config.OPENWEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${config.OPENWEATHER_API_KEY}&units=${units}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getWeatherForecast,
    getCurrentWeather,
    getWeatherByCoordinates
};
