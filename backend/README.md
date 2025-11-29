# Weather Dashboard Backend

A Node.js/Express backend server for the Weather Dashboard application.

## Features

- Fetch weather forecast data for any city
- Get current weather conditions
- Weather data by coordinates (latitude/longitude)
- CORS enabled for frontend integration
- Environment variable configuration
- Error handling and validation

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file by copying `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your OpenWeather API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   PORT=5000
   NODE_ENV=development
   ```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### 1. Get Weather Forecast
**GET** `/api/weather/forecast`

Query Parameters:
- `city` (required): City name
- `units` (optional): Units system - 'metric' (default), 'imperial', 'standard'

Example:
```
GET http://localhost:5000/api/weather/forecast?city=London&units=metric
```

Response:
```json
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [...],
  "city": {
    "id": 2643743,
    "name": "London",
    "coord": {"lat": 51.5085, "lon": -0.1257},
    "country": "GB",
    ...
  }
}
```

### 2. Get Current Weather
**GET** `/api/weather/current`

Query Parameters:
- `city` (required): City name
- `units` (optional): Units system - 'metric' (default), 'imperial', 'standard'

Example:
```
GET http://localhost:5000/api/weather/current?city=London&units=metric
```

### 3. Get Weather by Coordinates
**GET** `/api/weather/coordinates`

Query Parameters:
- `lat` (required): Latitude
- `lon` (required): Longitude
- `units` (optional): Units system - 'metric' (default), 'imperial', 'standard'

Example:
```
GET http://localhost:5000/api/weather/coordinates?lat=51.5085&lon=-0.1257&units=metric
```

### 4. Health Check
**GET** `/api/health`

Response:
```json
{
  "status": "Server is running"
}
```

## Error Responses

### City Not Found
```json
{
  "error": "City not found",
  "statusCode": 404
}
```

### Missing Required Parameter
```json
{
  "error": "City name is required",
  "statusCode": 400
}
```

### Server Error
```json
{
  "error": "Failed to fetch weather data",
  "statusCode": 500
}
```

## Project Structure

```
backend/
├── config/
│   └── config.js           # Configuration settings
├── controllers/
│   └── weatherController.js # Weather data logic
├── middleware/
│   └── errorHandler.js     # Error handling middleware
├── routes/
│   └── weather.js          # Weather API routes
├── server.js               # Main server file
├── package.json            # Dependencies
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Integration with Frontend

Update your frontend API calls to use the backend endpoints:

### Old (Direct API calls):
```javascript
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
```

### New (Using backend):
```javascript
const url = `http://localhost:5000/api/weather/forecast?city=${city}&units=metric`;
```

## Dependencies

- **express**: Web framework for Node.js
- **cors**: Cross-Origin Resource Sharing middleware
- **dotenv**: Environment variable management
- **axios**: HTTP client for API requests
- **nodemon** (dev): Auto-reload server during development

## License

ISC
