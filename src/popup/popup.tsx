import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import './popup.css'
import WeatherCard from './WeatherCard'

const App: React.FC<{}> = () => {
  
  return (
    <div>
      <WeatherCard city="Dubai"/>
    </div>
  )
}


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)