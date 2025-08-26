import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './Paragrafo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
    <Paragrafo/>
  </StrictMode>,
)
