import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const container = document.createElement('div')
container.id = 'abc'
document.body.append(container)


ReactDOM.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
  ,
  document.querySelector('#abc')
)