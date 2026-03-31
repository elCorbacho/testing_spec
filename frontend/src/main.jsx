import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MensajesProvider } from './context/MensajesContext.jsx'
import { TicketsProvider } from './context/TicketsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MensajesProvider>
      <TicketsProvider>
        <App />
      </TicketsProvider>
    </MensajesProvider>
  </React.StrictMode>,
)
