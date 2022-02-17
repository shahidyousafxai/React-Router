import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='flex flex-col items-center'>
        <p className='font-bold text-5xl'>Home Page Route</p>
        <input
          type='button'
          value='Place Order'
          className='bg-sky-500 rounded px-1 text-white w-[100px] mt-[30px]'
          onClick={() => {
            navigate('Order')
          }}
        />
      </div>
    </div>
  )
}

export default Home
