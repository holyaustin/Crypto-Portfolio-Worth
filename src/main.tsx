import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './App.tsx'
import Welcome from './Welcome.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Welcome />} />
      <Route path="app" element={<App />} />
      {/**
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />
      <Welcome />
      */}
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
