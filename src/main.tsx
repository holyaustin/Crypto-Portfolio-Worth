import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './App/App.tsx'
import Welcome from './Welcome.jsx'
import Transaction from './Transaction/Transaction.jsx'
import Pyusd from './Pyusd/Pyusd.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Welcome />} />
      <Route path="/app" element={<App />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/pyusd" element={<Pyusd />} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
