import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="header h-[34vw] m-[30px_auto] relative overflow-hidden">
      <motion.div
        className="header-contents absolute flex flex-col items-start gap-[15px] max-w-[50%] bottom-[10%] left-[6vw]"
        initial={{ x: "1", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration:3}}
      >
        <h1 className="font-medium text-white text-[max(4.5vw,22px)]">
          Order your favourite food here
        </h1>
        <p className="text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="font-medium text-[#747474] p-[10px_23px] bg-white text-[max(10px,13px)] rounded-[50px]"
        >
          View Menu
        </motion.button>
      </motion.div>
    </div>
  );
}
