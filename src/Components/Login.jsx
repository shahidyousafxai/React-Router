import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (user !== '') {
      auth.login(user)
      navigate('/')
    } else {
      alert('Please Enter Your Name...!')
    }
  }
  return (
    <div className='mt-5 ml-5'>
      <label htmlFor='username' className='font-bold'>
        Username:{' '}
        <input
          type='text'
          id='username'
          className='outline-0 border-2 border-slate-500 rounded'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button
        onClick={handleLogin}
        className='bg-sky-500 px-2 rounded text-white ml-2'
      >
        Login
      </button>
    </div>
  )
}

export default Login
