import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <nav className='bg-slate-200 w-[20vw] flex justify-around mt-5'>
        <Link
          to='featured'
          className='hover:bg-slate-600 hover:text-white px-2'
        >
          Featured
        </Link>
        <Link to='new' className='hover:bg-slate-600 hover:text-white px-2'>
          New
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Product
