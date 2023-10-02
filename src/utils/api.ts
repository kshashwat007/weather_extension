const WEATHER_API_KEY = 'a1f2f5165e0e5447d9f312df5cc5528d'


export interface WeatherData {
  name: string
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
  }
  weather: {
    description: string
    icon: string
    id: number
    main: string
  }[]
  wind: {
    deg: number
    speed: number
    gust: number
  }
}

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)

  if (!res.ok) {
    throw new Error('City not found')
  }

  const data: WeatherData = await res.json()
  
  return data
}