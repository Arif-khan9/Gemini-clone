import { AiOutlineMenu } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineInteraction } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from 'react'

const Sidebar = () => {
  const [ side , setSide] = useState(false)

  return (
    <>
    <div>
        <div className={`${side? "h-40 h-177 w-40  bg-gray-100 flex flex-col justify-between py-10": "h-177 w-20  bg-gray-100 flex flex-col justify-between py-10"}`}>
        <div className="flex flex-col justify-center items-center  gap-10">
          <AiOutlineMenu  className="text-2xl " onClick={ ()=>setSide(!side)}/>
        <div className="flex justify-center items-center gap-3">
          <LuPlus  className="text-2xl bg-gray-200  "/>
          {side? <p>New Chat</p>: null}
        </div>
        {side? <p>Recent</p>: null}
        </div>
         <div className=" flex flex-col justify-center items-center gap-5"> 
        <div className="flex items-center gap-2 px-2">
          <IoMdHelpCircleOutline  className="text-2xl"/>
          {side? <p>Help</p>: null}
        </div>
        <div className="flex items-center gap-2 px-2">
          <AiOutlineInteraction  className="text-2xl"/>
          {side?<p>Activity</p>:null}
        </div>
        <div className="flex items-center gap-2 px-2">
          <IoSettingsOutline className="text-2xl" />
          {side? <p>Acitivity</p>: null }
        </div>

      </div>
        </div>
    </div>
    
    </>
  )
}

export default Sidebar
