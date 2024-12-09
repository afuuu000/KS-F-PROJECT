import React, { useState } from "react";
import {assets} from "../assets/assets"
import { motion } from "framer-motion";

export default function Navbar() {
const[menu, setMenu]=useState("Home")

  return (
    <div className="navbar p-[20px_0px] flex justify-between items-center">
      <img src={assets.logo} alt="This may not uploaded correctly" className="w-[150px]" />
      <ul className="navbar-menu gap-5 list-none text-[#49557e] flex text-[18px] " >
        <li onClick={()=>setMenu("Home")} className={menu === "Home" ? "active" : ""} >Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu === "Menu" ? "active" : ""} >Menu</li>
        <li onClick={()=>setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""} >Mobile-App</li>
        <li onClick={()=>setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""} >Contact Us</li>
      </ul>
      <div className="navbar-right flex gap-10 items-center ">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket relative">
            <img src={assets.basket_icon} alt="" />
            <div className="dot absolute min-h-[10px] min-w-[10px] rounded-[5px] bg-[tomato] top-[-8px] right-[-7px]"></div>
        </div>
        <motion.button whileHover={{scale:1.1}} className="bg-transparent text-[16px] text-[#49557e] border-[1px] border-[tomato] p-[10px_20px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition-all">Sign In</motion.button>
      </div>
    </div>
  );
}
