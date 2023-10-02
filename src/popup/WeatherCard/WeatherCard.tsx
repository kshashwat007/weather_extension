import React, { useEffect } from 'react'
import { fetchWeatherData } from '../../utils/api'

const WeatherCard: React.FC<{ city: string }> = ({city}) => {
  useEffect(() => {
    fetchWeatherData(city)
      .then((data) => console.log(data))
      .catch((err) => console.log("Error while fetching data", err))
  }, [city])

  return (
    <div>
      {city}
    </div>
  )
}

export default WeatherCard