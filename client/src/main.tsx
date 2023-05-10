import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@picocss/pico/css/pico.min.css'
import '../public/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
