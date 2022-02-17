import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const params = useParams()
  const id = params.userId
  return (
    <div className='flex flex-col items-center font-bold text-slate-500'>
      <p className='text-xl'>User Details</p>
      <p className='text-9xl'>{id}</p>
    </div>
  )
}

export default UserDetails
