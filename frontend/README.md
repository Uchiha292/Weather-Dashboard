# Weather Dashboard Frontend

A modern React frontend for the Weather Dashboard application built with Vite, React, and Tailwind CSS.

## Features

- ⚡ Lightning-fast development with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 📊 Real-time weather data visualization
- 📈 Interactive charts with Chart.js
- 🔍 City search functionality
- 📱 Fully responsive design
- 🎯 React Router for navigation
- 🪝 Custom React hooks for weather data

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Chart.js** - Data visualization
- **React Router** - Navigation
- **React Icons** - Icon library

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

The development server is configured to proxy API requests to `http://localhost:5000`, so make sure your backend is running.

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── weatherAPI.js       # API service
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation
│   │   ├── Sidebar.jsx         # Side navigation
│   │   ├── SearchBar.jsx       # City search input
│   │   ├── WeatherCard.jsx     # Current weather display
│   │   ├── WeatherChart.jsx    # Weather charts
│   │   └── ErrorMessage.jsx    # Error display
│   ├── hooks/
│   │   └── useWeather.js       # Custom hook for weather data
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard page
│   │   └── Tables.jsx          # Detailed weather table
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## API Integration

The frontend communicates with the backend via these endpoints:

### Weather Forecast
```
GET /api/weather/forecast?city=London&units=metric
```

### Current Weather
```
GET /api/weather/current?city=London&units=metric
```

### Weather by Coordinates
```
GET /api/weather/coordinates?lat=51.5085&lon=-0.1257&units=metric
```

## Components

### Navbar
Top navigation bar showing app title and current date.

### Sidebar
Navigation sidebar with links to Dashboard and Tables pages.

### SearchBar
Input field for searching weather by city name.

### WeatherCard
Displays current weather information with icon and key metrics.

### WeatherChart
Line/bar chart showing temperature and humidity trends.

### ErrorMessage
Error notification component.

## Hooks

### useWeather
Custom hook for weather data management:
- `searchCity(city, units)` - Search weather by city
- `getCurrentWeather(city, units)` - Get current weather
- `weather` - Current weather data
- `loading` - Loading state
- `error` - Error message

## Environment Variables

Create a `.env.local` file (optional):
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Lint and fix code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
