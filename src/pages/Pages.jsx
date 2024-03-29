import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import Diet from './Diet'
import Recipe from './Recipe'


function Pages() {
  return (
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diets/:type" element={<Diet />} />
        <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
   
  )
}

export default Pages