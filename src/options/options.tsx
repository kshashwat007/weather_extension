import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import './options.css'

const test = <img src='icon.png' />

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)