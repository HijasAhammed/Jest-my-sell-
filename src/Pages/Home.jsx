import React from 'react'
import img from '../assets/Images/JS_Black-removebg-preview.png'
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className='w-full h-auto flex flex-col'>
       <div className='header w-full h-16 bg-black flex'>
        <div className='w-32 h-full bg-red-400 flex items-center justify-center'>
            <img src={img} alt="" className='w-[5rem]'/>
        </div>
        <div className='bg-green-300 h-full w-96 flex items-center justify-center'>
            <input type="text"
            placeholder='  Location' className='w-80 h-7' style={{borderRadius:'10px'}}/>
           <FaLocationDot size={24}/>
        </div>
        <div className='bg-blue-300 w-96 h-full flex items-center justify-center'>
          <input type="text"
          placeholder='  Find What You Want' style={{borderRadius:'10px'}} className='w-80 h-7'/>
          <CiSearch />
        </div>
       </div>
    </div>
  )
}

export default Home
