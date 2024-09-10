import './App.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LayoutPage from './modules/core/components/layout/index.tsx'

function App() {
  return (
    <BrowserRouter>
      <LayoutPage />
    </BrowserRouter>
  )
}

export default App
