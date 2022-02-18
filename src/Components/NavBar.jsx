import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const NavBar = () => {
  const auth = useAuth()
  return (
    <div>
      <nav className='flex items-center pl-10 bg-sky-500 text-white h-[40px]'>
        <NavLink to='/' className='ml-5 hover:text-rose-800'>
          Home
        </NavLink>
        <NavLink to='/product' className='ml-5 hover:text-rose-800'>
          Product
        </NavLink>
        <NavLink to='/about' className='ml-5 hover:text-rose-800'>
          About
        </NavLink>
        <NavLink to='/users' className='ml-5 hover:text-rose-800'>
          Users
        </NavLink>
        <NavLink to='/profile' className='ml-5 hover:text-rose-800'>
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink to='/login' className='ml-5 hover:text-rose-800'>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  )
}

export default NavBar
