import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import WeatherChart from '../components/WeatherChart'
import ErrorMessage from '../components/ErrorMessage'
import useWeather from '../hooks/useWeather'

const Dashboard = ({ showTables = false }) => {
  const { weather, loading, error, searchCity, setError } = useWeather()

  if (showTables) {
    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Weather Tables</h1>
        <SearchBar onSearch={searchCity} loading={loading} />
        <ErrorMessage error={error} onClose={() => setError(null)} />

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full"></div>
            </div>
            <p className="mt-4 text-gray-600">Loading weather data...</p>
          </div>
        )}

        {!loading && weather && weather.list && (
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date/Time</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Temperature</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Feels Like</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Min/Max</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Humidity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pressure</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Wind Speed</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cloudiness</th>
                </tr>
              </thead>
              <tbody>
                {weather.list.map((forecast, index) => {
                  const date = new Date(forecast.dt * 1000)
                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 capitalize">
                        {forecast.weather[0].description}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {Math.round(forecast.main.temp)}°C
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {Math.round(forecast.main.feels_like)}°C
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {Math.round(forecast.main.temp_min)}°C / {Math.round(forecast.main.temp_max)}°C
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {forecast.main.humidity}%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {forecast.main.pressure} hPa
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {forecast.wind.speed} m/s
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {forecast.clouds.all}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <p className="text-gray-600 text-lg">Search for a city to see detailed weather data</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <SearchBar onSearch={searchCity} loading={loading} />

      <ErrorMessage error={error} onClose={() => setError(null)} />

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600">Loading weather data...</p>
        </div>
      )}

      {weather && !loading && (
        <>
          <WeatherCard weather={weather} />
          <WeatherChart data={weather} type="line" />
        </>
      )}

      {!weather && !loading && !error && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">Search for a city to see the weather forecast</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard
