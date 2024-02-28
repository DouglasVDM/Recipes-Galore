import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import Diet from './Diet'

function Pages() {
  return (
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diets/:type" element={<Diet />} />
    </Routes>
   
  )
}

export default Pages