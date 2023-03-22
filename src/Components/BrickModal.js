import React from 'react'
import Button from './Button'
import Navbar from './Navbar'

const BrickModal = ({userName,setuserName,userAmount,setuserAmount,date, setdate ,addInfo,setaddInfo,addData,brick1Data,deliveryCharges, setdeliveryCharges,bricksAmt,setbrickAmt, chooseBricksValue,setchooseBricksValue}) => {
  return (
    <>
    <Navbar />
    <Button />
    <div className='w-[60%] bg-[#eaeaea] m-auto px-5 py-5 mt-1'>
        <div>
            <label className='label-head'>Brick Client</label>
            <input value={userName} onChange={(e) => setuserName(e.currentTarget.value)} className='rounded-md outline-none bg-slate-300 placeholder:text-black w-[100%] py-2 px-2 mt-2' type='text' placeholder='Enter the Client name' />
        </div>
        <div>
            <label className='label-head'>Bricks Amount</label>
            <input value={userAmount} onChange={(e) => setuserAmount(e.currentTarget.value) } className='rounded-md outline-none bg-slate-300 placeholder:text-black w-[100%] py-2 px-2 mt-2' type='number' placeholder='Enter the purchase Amount' />
        </div>
        <div>
            <label className='label-head'>Purchasing Date</label>
            <input value={date} onChange={(e) => setdate(e.currentTarget.value)} className='rounded-md outline-none bg-slate-300 placeholder:text-black w-[100%] py-2 px-2 mt-2' type='date' placeholder='Select the date'/>
        </div>
        <div>
            <label className='label-head'>Info</label>
            <input value={addInfo} onChange={(e) => setaddInfo(e.currentTarget.value)} className='rounded-md outline-none bg-slate-300 placeholder:text-black w-[100%] py-2 px-2 mt-2' type='text' placeholder='Additional Information'/>
        </div>
        <div>
            <label className='label-head'>delivery Charges</label>
            <input value={deliveryCharges} onChange={(e) => setdeliveryCharges(e.currentTarget.value)} className='rounded-md outline-none bg-slate-300 placeholder:text-black w-[100%] py-2 px-2 mt-2' type='number'  placeholder='enter delivery + expenses charges'/>
        </div>
        <div>
            <label className='label-head'>Total Bricks Purchase</label>
            <input value={bricksAmt} onChange={(e) => setbrickAmt(e.currentTarget.value)}  className='rounded-md outline-none bg-slate-300 placeholder:text-black w-[100%] py-2 px-2 mt-2' type='text' placeholder='evelaues total amount purchase bricks' />
        </div>
        <div>
            <label className='label-head'>Choose Which Number Bricks Purchase</label>
            <select value={chooseBricksValue} onChange={(e) => setchooseBricksValue(e.currentTarget.value) } className='w-[35%]' id='bricks'>
                <option value='1bricks'>1 Bricks</option>
                <option value='2bricks'>2 Bricks</option>
                <option value='3bricks'>3 Bricks</option>
                <option value='chatka'>chatka</option>
                <option value='talsa'>Talsa</option>
            </select>
        </div>
        <button onClick={addData} className='mt-3 px-5 py-1 bg-[crimson] text-white cursor-pointer' >Add Data</button>
    </div>
    </>
  )
}

export default BrickModal