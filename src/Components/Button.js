import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <>
         <div className='bricks-data-container'>
           <div className='flex justify-center'>
            <button className='ml-3 px-3 py-1 bg-orange-400 mt-4 cursor-pointer text-white'><Link to='/bricks1data'>Bricks 1</Link></button>
            <button className='ml-3 px-3 py-1 bg-orange-400 mt-4 cursor-pointer text-white'>Bricks 2</button>
            <button className='ml-3 px-3 py-1 bg-orange-400 mt-4 cursor-pointer text-white'>Bricks 3</button>
            <button className='ml-3 px-3 py-1 bg-orange-400 mt-4 cursor-pointer text-white'>Chatka</button>
            <button className='ml-3 px-3 py-1 bg-orange-400 mt-4 cursor-pointer text-white'>Talsa</button>
            <button className='ml-3 px-3 py-1 bg-orange-400 mt-4 cursor-pointer text-white'><Link to='/brickModal'>Add data</Link></button>
           </div>
        </div>
    </>
  )
}

export default Button