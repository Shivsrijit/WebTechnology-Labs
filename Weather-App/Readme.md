# Weather App

A simple, responsive weather application that displays current weather information for any city worldwide.

## Features

- **City Search**: Search for weather information by city name
- **Real-time Weather Data**: Displays current temperature, weather description, and conditions
- **Country Flags**: Shows the country flag for the searched city
- **Weather Icons**: Visual weather icons from OpenWeatherMap
- **Detailed Metrics**: Displays clouds, humidity, and pressure information
- **Error Handling**: Visual feedback for invalid city searches
- **Default Location**: Loads with Lucknow weather data on initialization

## API Integration

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data and the [FlagsAPI](https://flagsapi.com/) for country flag images.

## Setup

### Prerequisites

- A web browser
- An OpenWeatherMap API key

### Installation

1. Clone or download the project files
2. Replace the API key in the JavaScript code:
   ```javascript
   let id = 'YOUR_API_KEY_HERE';
   ```
3. Open `index.html` in your web browser

### Getting an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your dashboard
4. Replace the existing API key in the code

## Usage

1. Enter a city name in the search field
2. Press Enter or submit the form
3. View the weather information including:
   - City name with country flag
   - Current temperature (°C)
   - Weather description
   - Cloud coverage percentage
   - Humidity percentage
   - Atmospheric pressure (hPa)

## File Structure

```
weather-app/
├── index.html          # Main HTML file
├── style.css           # Styling (not included in provided code)
├── script.js           # Weather app functionality
└── README.md           # This file
```

## HTML Elements Expected

The JavaScript code expects the following HTML elements:

- `form` - Search form
- `#name` - Input field for city name
- `.name` - Container for city name and flag
- `.temperature` - Container for temperature and weather icon
- `.description` - Weather description text
- `#clouds` - Cloud coverage display
- `#humidity` - Humidity display
- `#pressure` - Pressure display
- `main` - Main container for error styling

## Error Handling

- Invalid city names trigger a visual error state
- Error styling is automatically removed after 1 second
- Search field is cleared after each search attempt

## Browser Compatibility

This app uses modern JavaScript features including:
- Fetch API
- Arrow functions
- Template literals
- DOM manipulation methods

Ensure your browser supports ES6+ features for optimal functionality.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Support

For issues related to weather data accuracy, please refer to the [OpenWeatherMap documentation](https://openweathermap.org/api).
