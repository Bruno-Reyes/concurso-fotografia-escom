import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
)
