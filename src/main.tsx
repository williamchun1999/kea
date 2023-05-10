import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './views/home.tsx'
import LandingPage from './views/landingPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
