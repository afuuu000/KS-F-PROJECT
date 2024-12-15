import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utlity/Animation";
import { FadeRight } from "../../utlity/Animation";
import { FadeUp } from "../../utlity/Animation";

export default function AppDownload() {
  return (
    <div
      className="app-download m-[auto_auto] mt-[100px] text-[max(3vw_20px)] text-center "
      id="app-download"
    >
      <motion.p
        variants={FadeUp(0.4)}
        animate="hidden"
        whileInView="visible"
        className="font-medium text-3xl"
      >
        For Better Experience Download <br /> Tomato App
      </motion.p>
      <div className="app-platforms flex justify-center gap-[max(2vw_10px)] mt-[40px]">
        <motion.img
          variants={FadeRight(0.7)}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          src={assets.play_store}
          className="w-[max(30vw_120px)] max-w-[150px] cursor-pointer mr-4"
          alt="play-store"
        />
        <motion.img
          variants={FadeLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.1 }}
          src={assets.app_store}
          className="w-[max(30vw_120px) max-w-[150px] cursor-pointer"
          alt="app-store"
        />
      </div>
    </div>
  );
}
