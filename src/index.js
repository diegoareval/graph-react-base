import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {FavoritesProvider} from "./Provider/FavoritesProvider";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <FavoritesProvider>
    <App />
      </FavoritesProvider>
  </React.StrictMode>
)
