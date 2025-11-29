import { useState } from 'react'
import { fetchWeatherForecast, fetchCurrentWeather } from '../api/weatherAPI'

export const useWeather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchCity = async (city, units = 'metric') => {
    if (!city.trim()) {
      setError('Please enter a valid city name')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const data = await fetchWeatherForecast(city, units)
      setWeather(data)
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch weather data')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const getCurrentWeather = async (city, units = 'metric') => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchCurrentWeather(city, units)
      setWeather(data)
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch weather data')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return {
    weather,
    loading,
    error,
    searchCity,
    getCurrentWeather,
    setError
  }
}

export default useWeather
