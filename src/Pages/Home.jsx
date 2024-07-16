import React from 'react'
import img from '../assets/Images/Black.png'
import { MdOutlineLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineDarkMode } from "react-icons/md";
const Home = () => {
  return (
    <div className='w-full h-auto flex flex-col'>
       <div className=' w-full h-16  flex items-center justify-between'>
        <div className='w-32 h-full  flex items-center justify-center '>
            <img src={img} alt="" className='w-[5rem]'/>
        </div>
        <div className=' h-full w-96 flex items-center justify-center relative'>
            <input type="text"
            placeholder='  Location' className='w-80 h-7' style={{borderRadius:'10px'}}/>
            <RxCross1 className='absolute left-80'/>
            <MdOutlineLocationOn size={22}/>
        </div>
        <div className=' w-96 h-full flex items-center justify-center relative'>
          <input type="text"
          placeholder='  Find What You Want' style={{borderRadius:'10px'}} className='w-80 h-7'/>
          <CiSearch size={20} className='absolute left-80'/>
        </div>
        <div>
        <MdOutlineDarkMode size={20}/>
        </div>
        <div className=' h-full w-36 flex items-center justify-center'>
          <button style={{borderRadius:'10px'}} className='bg-black text-white h-8 w-36'>Sell</button>
        </div>
       </div>
    </div>
  )
} 

export default Home
