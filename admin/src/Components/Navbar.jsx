import React from 'react'
import {assets} from "../assets/assets"
export default function Navbar() {
  return (
    <div className='navbar flex justify-between items-center p-[8px_4%]'>
        <img className='logo w-[max(10%_80px)]' src={assets.logo} alt="logo" />
        <img className='profile w-[40px]' src={assets.profile_image} alt="" />
    </div>
  )
}
