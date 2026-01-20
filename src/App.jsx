import { useState } from 'react'
import './App.css'
import Navbar from '../components/navbar'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}

export default App
