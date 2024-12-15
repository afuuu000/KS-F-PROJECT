import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar w-[18%] min-h-[100vh] border border-solid border-[#a9a9a9] border-t-0 text-[max(1vw_10px)]'>
         <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-5">
            <NavLink to="/add" className="sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 p-[8px_10px] rounded-[3px_0px_0px_3px] cursor-pointer">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to="/list" className="sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 p-[8px_10px] rounded-[3px_0px_0px_3px] cursor-pointer">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to="/orders" className="sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 p-[8px_10px] rounded-[3px_0px_0px_3px] cursor-pointer">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
         </div>
    </div>
  )
}
