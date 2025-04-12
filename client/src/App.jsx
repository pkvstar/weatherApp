import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Weather from './pages/Weather'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path='*' element={<h1 style={{fontSize:"3rem",marginTop:"2rem"}}>Error 404 NO PAGE FOUND</h1>}/>
    </Routes>
    </>
  )
}

export default App