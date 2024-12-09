import React from "react";
import { menu_list } from "../assets/assets";
import { useState } from "react";

export default function Menu() {
    const [category, setCategory]=useState("All")
  return (
    <div className="menu flex flex-col gap-5" id="menu">
      <h1 className="menu-heading text-[#262626] font-medium text-[28px]">Explore Our Menu</h1>
      <p className="menu-text text-[#808080] max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to to satisfy your cravings and elevate your dining
        experience, one delicious meal at a time.
      </p>
      <div className="menu-list flex justify-between items-center gap-8 text-center overflow-x-scroll m-[20px_0px]">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-list-item">
              <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[delay_0.2s] ${category===item.menu_name ? "change" : ""}`} src={item.menu_image} alt="" />
              <p className="mt-3 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="m-[10px_0px] bg-[#e2e2e2] h-[1px] rounded-none"/>
    </div>

  );
}
