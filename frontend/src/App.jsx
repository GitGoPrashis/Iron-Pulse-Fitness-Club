import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Joinuspage from './pages/Joinuspage'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
       <Route path="/join-us-page" element={<Joinuspage/>} />

    </Routes>


  )
}

export default App
