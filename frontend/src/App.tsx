import { useEffect, useState } from 'react';

type WeatherForecast = {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
};

function App() {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    fetch('http://localhost:5006/weatherforecast')
      .then(res => res.json())
      .then(data => setForecast(data));
  }, []);

  return (
    <div>
      <h1>Forecast</h1>
      <ul>
        {forecast && forecast.map((item, i) => (
          <li key={i}>{item.summary} - {item.temperatureC}°C</li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
