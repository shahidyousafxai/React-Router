import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className='flex pl-10 bg-sky-500 text-white'>
        <NavLink to='/' className='ml-5 hover:text-rose-800'>
          Home
        </NavLink>
        <NavLink to='/about' className='ml-5 hover:text-rose-800'>
          About
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
