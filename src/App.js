import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Order from './Components/Order'
import NoMatch from './Components/NoMatch'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='Order' element={<Order />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}

export default App
