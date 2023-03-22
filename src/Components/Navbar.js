import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav className='flex justify-around items-center min-h-[12vh] bg-lime-100'>
    <div className='uppercase tracking-widest font-bold text-2xl'>Tracker</div>
    <ul className='nav-links flex justify-around w-[42%] uppercase font-medium'>
       <li className='link'> <Link to='/'>Bricks Data</Link> </li>
       <li className='link'><Link to='/employess'>Employess Data</Link></li>
       <li className='link'><Link to='/tekedar'>TekeDar Data</Link></li>
       <li className='link'><Link to='/tekedar'>Other Expenses</Link></li>
       <button className='cursor-pointer'>Logout</button>
    </ul>
   </nav>
   </>
  )
}

export default Navbar