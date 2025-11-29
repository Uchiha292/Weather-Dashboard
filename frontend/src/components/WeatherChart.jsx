import { useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const WeatherChart = ({ data, type = 'line' }) => {
  if (!data || !data.list || data.list.length === 0) {
    return <div className="text-center text-gray-500 py-8">No data available</div>
  }

  const labels = data.list.slice(0, 8).map((item) => {
    const date = new Date(item.dt * 1000)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit' })
  })

  const temperatures = data.list.slice(0, 8).map((item) => item.main.temp)
  const humidity = data.list.slice(0, 8).map((item) => item.main.humidity)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Humidity (%)',
        data: humidity,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weather Forecast',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {type === 'line' ? (
        <Line data={chartData} options={options} />
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  )
}

export default WeatherChart
