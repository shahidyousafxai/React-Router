import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [search, setSearch] = useSearchParams()
  const activeUsers = search.get('filter') === 'active'
  return (
    <div className='flex flex-col ml-[20px] mt-[20px] h-[100vh]'>
      <Link
        to='1'
        className='font-bold bg-cyan-500 w-[10vw] rounded mt-[5px] indent-2 hover:text-white'
      >
        User 1
      </Link>
      <Link
        to='2'
        className='font-bold bg-cyan-500 w-[10vw] rounded mt-[5px] indent-2 hover:text-white'
      >
        User 2
      </Link>
      <Link
        to='3'
        className='font-bold bg-cyan-500 w-[10vw] rounded mt-[5px] indent-2 hover:text-white'
      >
        User 3
      </Link>
      <Outlet />
      <div className='mt-[20px]'>
        <input
          type='button'
          value='Active users'
          className='bg-slate-600 rounded px-2 text-white mr-[10px] hover:bg-slate-500'
          onClick={() => {
            setSearch({ filter: 'active' })
          }}
        />
        <input
          type='button'
          value='Reset filter'
          className='bg-slate-600 rounded px-2 text-white mr-[10px] hover:bg-slate-500'
          onClick={() => {
            setSearch({})
          }}
        />
        <p className='text-lg mt-[10px]'>
          {activeUsers ? (
            <h2 className='text-lime-600'>Active Users</h2>
          ) : (
            <h2 className='text-slate-700'>All Users</h2>
          )}
        </p>
      </div>
    </div>
  )
}

export default Users
