import React from 'react'
import Button from './Button'
import Navbar from './Navbar'

const Bricks1data = () => {
  return (
    <>
    <Navbar />
    <Button />
    <div className='bricks-container'>
        <div>
          <div>
            <div>Name of client</div>
            <div>info of purchaseing</div>
          </div>
          <div>
            <div>Date</div>
          </div>
          <div>
          <div>Bricks Amount</div>
          <div>total amount</div>
          <div>delivery Charges</div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Bricks1data