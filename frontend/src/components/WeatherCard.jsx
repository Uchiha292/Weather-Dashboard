import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi'

const getWeatherIcon = (description) => {
  const desc = description.toLowerCase()
  if (desc.includes('clear') || desc.includes('sunny')) return <WiDaySunny className="w-16 h-16 text-yellow-400" />
  if (desc.includes('cloud')) return <WiCloudy className="w-16 h-16 text-gray-400" />
  if (desc.includes('rain')) return <WiRain className="w-16 h-16 text-blue-400" />
  if (desc.includes('snow')) return <WiSnow className="w-16 h-16 text-blue-200" />
  return <WiDaySunny className="w-16 h-16 text-yellow-400" />
}

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.list || weather.list.length === 0) {
    return null
  }

  const current = weather.list[0]
  const city = weather.city

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">{city.name}, {city.country}</h2>
      <p className="text-gray-600 mb-4 capitalize">{current.weather[0].description}</p>

      <div className="flex justify-center mb-6">
        {getWeatherIcon(current.weather[0].description)}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Temperature</p>
          <p className="text-2xl font-bold text-blue-600">{Math.round(current.main.temp)}°C</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Humidity</p>
          <p className="text-2xl font-bold text-green-600">{current.main.humidity}%</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Wind Speed</p>
          <p className="text-2xl font-bold text-purple-600">{current.wind.speed} m/s</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">Pressure</p>
          <p className="text-2xl font-bold text-orange-600">{current.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
