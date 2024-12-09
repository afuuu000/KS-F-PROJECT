import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export default function FoodItem({ dataValue }) {
  return (
    <motion.div
      initial={{ x: "1", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 3 }}
      className="food-item w-[100%] m-auto rounded-[15px] "
    >
      <div className="item-image">
        <img
          className=" w-[100%] rounded-[15px_15px_0px_0px]"
          src={dataValue.image}
          alt=""
        />
      </div>
      <div className="item-info p-5">
        <div className="name-rating flex justify-between items-center mb-[10px]">
          <p className="font-medium text-[20px]">{dataValue.name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[12px]">{dataValue.description}</p>
      <p className="text-[tomato] text-[22px] font-medium m-[10px_0px]">${dataValue.price}</p>.
      </div>
      
    </motion.div>
  );
}
