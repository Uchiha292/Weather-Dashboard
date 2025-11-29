import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const weatherAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Add response interceptor for error handling
weatherAPI.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export const fetchWeatherForecast = (city, units = 'metric') => {
  return weatherAPI.get('/weather/forecast', {
    params: { city, units }
  })
}

export const fetchCurrentWeather = (city, units = 'metric') => {
  return weatherAPI.get('/weather/current', {
    params: { city, units }
  })
}

export const fetchWeatherByCoordinates = (lat, lon, units = 'metric') => {
  return weatherAPI.get('/weather/coordinates', {
    params: { lat, lon, units }
  })
}

export default weatherAPI
