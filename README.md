# Weather Dashboard - Full Stack Application

A complete weather dashboard application built with modern web technologies. Features a React frontend with Vite and a Node.js/Express backend for fetching real-time weather data from the OpenWeather API.

## 🏗️ Project Structure

```
Weather-Dashboard/
├── frontend/                 # React application with Vite
│   ├── src/
│   │   ├── api/             # API service layer
│   │   ├── components/      # Reusable React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── README.md            # Frontend documentation
│
├── backend/                 # Node.js/Express server
│   ├── config/              # Configuration files
│   ├── controllers/         # Business logic
│   ├── middleware/          # Express middleware
│   ├── routes/              # API routes
│   ├── server.js            # Server entry point
│   ├── package.json         # Backend dependencies
│   ├── .env.example         # Environment template
│   └── README.md            # Backend documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your OpenWeather API key (already configured with sample key)
npm run dev
```

The backend will start on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:3000`

The frontend is configured to proxy API requests to the backend.

## 📋 Features

### Frontend (React)
- ⚡ Fast development with Vite
- 🎨 Beautiful responsive UI with Tailwind CSS
- 📊 Interactive charts with Chart.js
- 🔍 City search functionality
- 📱 Mobile-friendly design
- 🎯 Component-based architecture
- 🪝 Custom React hooks for data management

### Backend (Node.js/Express)
- 🔌 RESTful API endpoints
- 🌐 CORS enabled for frontend integration
- 🛡️ Error handling and validation
- ⚙️ Environment-based configuration
- 🔄 Proxy to OpenWeather API
- 📊 Multiple weather endpoints (forecast, current, coordinates)

## 📡 API Endpoints

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

### Health Check
```
GET /api/health
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Chart.js** - Data visualization
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Axios** - HTTP client
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing

## 🔧 Configuration

### Frontend
Create `.env.local` in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend
Update `.env` file in the backend directory:
```
OPENWEATHER_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

## 📚 Development Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Lint and fix code
```

### Backend
```bash
npm start        # Production mode
npm run dev      # Development mode with auto-reload
```

## 🏗️ Component Overview

### Frontend Components

**Navbar** - Top navigation bar with app title and date

**Sidebar** - Navigation menu with Dashboard and Tables links

**SearchBar** - City search input component

**WeatherCard** - Display current weather with key metrics

**WeatherChart** - Line/bar charts for temperature and humidity trends

**ErrorMessage** - Error notification component

### Custom Hooks

**useWeather** - Manages weather data fetching and state

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend
```bash
# Make sure to set NODE_ENV=production in .env
npm start
```

## 🆘 Troubleshooting

### Backend not connecting
- Make sure backend is running on port 5000
- Check that API key is valid in `.env`
- Verify CORS is enabled

### Frontend not loading data
- Check browser console for errors
- Verify backend is running and accessible
- Clear browser cache and reload

### API rate limits
- OpenWeather has free tier limits
- Wait a moment before trying another search
- Consider upgrading your API plan for production use