import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Order from './Components/Order'
import NoMatch from './Components/NoMatch'
import Product from './Components/Product'
import Featured from './Components/Featured'
import New from './Components/New'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />/
        <Route path='order' element={<Order />} />
        <Route path='product' element={<Product />}>
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
