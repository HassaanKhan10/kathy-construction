import 'bootstrap/dist/css/bootstrap.min.css';
// import 'swiper/css'; // Swiper CSS
// import 'aos/dist/aos.css'; // AOS animation CSS
// import '@fortawesome/fontawesome-free/css/all.min.css'; 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
