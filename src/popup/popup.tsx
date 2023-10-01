import React, {useEffect} from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import './popup.css'
import {fetchOpenWeatherData} from '../utils/api'

const App: React.FC<{}> = () => {

  useEffect(() => {
    fetchOpenWeatherData('Dubai')
      .then((data) => console.log(data))
      .catch((err) => console.log("Error while fetching data", err))
  }, [])
  
  return (
    <div>
      <img src='icon.png'/>
    </div>
  )
}


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)