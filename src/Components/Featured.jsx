import React from 'react'

const Featured = () => {
  return (
    <div className='ml-[2vw] mt-5'>
      <h3 className='font-bold text-blue-900'>List of Featured Products</h3>
      <ul className='list-disc pl-5'>
        <li className='bg-lime-700 text-white indent-1 rounded px-1 w-[10vw] mt-[5px]'>
          a
        </li>
        <li className='bg-lime-700 text-white indent-1 rounded px-1 w-[10vw] mt-[5px]'>
          b
        </li>
        <li className='bg-lime-700 text-white indent-1 rounded px-1 w-[10vw] mt-[5px]'>
          c
        </li>
        <li className='bg-lime-700 text-white indent-1 rounded px-1 w-[10vw] mt-[5px]'>
          d
        </li>
        <li className='bg-lime-700 text-white indent-1 rounded px-1 w-[10vw] mt-[5px]'>
          e
        </li>
      </ul>
    </div>
  )
}

export default Featured
