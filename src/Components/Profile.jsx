import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
    auth.setUser('')
  }

  return (
    <div className='flex flex-col items-center mt-5 ml-5'>
      <h3 className='text-5xl'>
        Welcome, <span className='font-bold'>{auth.user}</span>
      </h3>
      <button
        onClick={handleLogout}
        className='bg-sky-500 px-2 rounded text-white mt-3'
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
