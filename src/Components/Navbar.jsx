import React, { useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
const Navbar = () => {
  const [ input , setInput] = useState("")
  
  return (
   <>
   <nav>
    <div className='flex  px-10 justify-center gap-190 md:gap-270  mt-5 items-center '>
      <p className=' text-xl '>Gemini</p>
      <img className='w-10 h-10 rounded-full' src="logo.png" alt="" />
     
    </div>
    <div className='text-6xl font-bold text-blue-400 ml-35 md:ml-50 mt-25'>
       <p>Hello, Dev.</p>
       <p className='mt-4 text-gray-400'>How can I help you today?</p>
    </div>
    <div className='flex flex-col md:flex-row items-center md:justify-center  gap-6 mt-10'>
      <div className='h-50 rounded-2xl w-170  md:w-50 bg-gray-200 flex flex-col items-center hover:bg-gray-300 '>
        <p className='mt-13 md:mt-5'>Suggest beautiful <br /> places to see on <br /> an upcoming road trip</p>
        <FaMessage className='mt-4 md:mt-15  ml-100 md:ml-30' />

      </div>
      <div className='h-50 rounded-2xl w-170 md:w-50 bg-gray-200 flex flex-col items-center hover:bg-gray-300 '>
        <p className='mt-13 md:mt-5'>Suggest beautiful <br /> places to see on <br /> an upcoming road trip</p>
        <FaMessage className='mt-4 md:mt-15  ml-100 md:ml-30' />

      </div>
      <div className='h-50 rounded-2xl w-170 md:w-50 bg-gray-200 flex flex-col items-center hover:bg-gray-300 '>
        <p className='mt-13 md:mt-5'>Suggest beautiful <br /> places to see on <br /> an upcoming road trip</p>
        <FaMessage className='mt-4 md:mt-15  ml-100  md:ml-30' />

      </div>
      <div className='h-50 rounded-2xl w-170 md:w-50 bg-gray-200 flex flex-col items-center hover:bg-gray-300 '>
        <p className='mt-13 md:mt-5'>Suggest beautiful <br /> places to see on <br /> an upcoming road trip</p>
        <FaMessage className='mt-4 md:mt-15 ml-100 md:ml-30' />

      </div>
    </div>
    <div className='flex justify-center mt-10 ml-15 '>
      <div className='flex items-center '>
        <form className='flex items-center'>
          <input className='w-215 bg-gray-200 p-4 text-xl rounded-full' type="text" placeholder='Enter a prompt here' onChange={(e)=> setInput(e.target.value)}/>
       <div className='flex relative right-30 gap-2.5 text-2xl'>
         <GrGallery />
        <IoMicOutline />
        <IoMdSend className={`${input.length > 0 ? "block": "hidden"}`} />
       </div>
        </form>
       
      </div>
    </div>
    <p className='text-center text-gray-400 text-sm'>Gemini may display inaccurate info, including about people, so double-check, its responses. Your privacy and Gemini Apps</p>
   </nav>
   </>
  )
}

export default Navbar
