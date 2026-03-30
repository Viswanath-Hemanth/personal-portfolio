import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

