import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import MovieCard from './Components/MovieCard.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MovieProvider>
    {/* Allows routing in url*/}
  </StrictMode>,
)
