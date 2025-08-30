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
    <div className="hidden md:block">
        <div className={`${side? "h-40 h-177 w-40  bg-gray-100 flex flex-col justify-between py-10": "h-177 w-20  bg-gray-100 flex flex-col justify-between py-10"}`}>
        <div className="flex flex-col justify-center px-4  gap-10">
          <AiOutlineMenu  className="text-2xl ml-2" onClick={ ()=>setSide(!side)}/>
        <div className="flex p-2 bg-gray-200 justify-center items-center gap-3">
          <LuPlus  className="text-2xl bg-gray-200  "/>
          {side? <p>New Chat</p>: null}
        </div>
        {side? <p>Recent</p>: null}
        </div>
         <div className=" flex flex-col justify-center px-3 gap-5"> 
        <div className="flex hover:bg-gray-200 hover:p-2 hover:rounded-full hover:px-4 items-center gap-2 px-2">
          <IoMdHelpCircleOutline  className="text-2xl"/>
          {side? <p>Help</p>: null}
        </div>
        <div className="flex hover:bg-gray-200 hover:p-2 hover:rounded-full hover:px-4 items-center gap-2 px-2">
          <AiOutlineInteraction  className="text-2xl"/>
          {side?<p>Activity</p>:null}
        </div>
        <div className="flex hover:bg-gray-200 hover:p-2 hover:rounded-full hover:px-4 items-center gap-2 px-2">
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
