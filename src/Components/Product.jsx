import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <nav className='bg-slate-200 w-[20vw] flex justify-around mt-5'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Product
