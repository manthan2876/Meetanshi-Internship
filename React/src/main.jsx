import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./day12/Tenzies/App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
