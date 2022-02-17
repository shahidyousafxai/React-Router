import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Order from './Components/Order'
import NoMatch from './Components/NoMatch'
import Product from './Components/Product'
import Featured from './Components/Featured'
import New from './Components/New'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import Admin from './Components/Admin'
const LazyAbout = React.lazy(() => import('./Components/About'))

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='about'
          element={
            <React.Suspense fallback='Loading'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='order' element={<Order />} />
        <Route path='product' element={<Product />}>
          {/* <Route index element={<Featured />} /> */}
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='users' element={<Users />}>
          {/* <Route index element={<Admin />} /> */}
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
