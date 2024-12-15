import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="Footer text-[#d9d9d9] bg-[#323232] flex items-start gap-5 p-[20px_8vw] pt-[80px] mt-[100px]" id="footer">
        <div className="footer-Content w-[100%] grid gap-[80px]">
          <div className="footer-content-right flex-row items-start gap-5">
            <img className="mb-3" src={assets.logo} alt="" />
            <p>
              Welcome to Tomato, where every dish tells the story of
              fresh, sun-ripened tomatoes! Our restaurant is dedicated to
              crafting flavorful meals inspired by the rich, vibrant taste of
              tomatoes. Tomato where every bite is a burst of sunshine!{" "}
            </p>
            <div className=" flex justify-start mt-4 items-center gap-4 w-[40px] mr-4">
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="hover:bg-[#136AFF] hover:rounded-full"
                src={assets.facebook_icon}
                alt=""
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="hover:bg-[#1C9CEA] hover:rounded-full"
                src={assets.twitter_icon}
                alt=""
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="hover:bg-[#0077B5] hover:rounded-full"
                src={assets.linkedin_icon}
                alt=""
              />
            </div>
          </div>
          <div className="footer-content-center flex flex-col items-start gap-5">
            <h2 className="text-white text-2xl">COMPANY</h2>
            <ul className="list-none mb-3 cursor-pointer">
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                Home
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                About Us
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                Delivery
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                Privacy policy
              </motion.li>
            </ul>
          </div>
          <div className="footer-content-left flex flex-col items-start gap-5">
            <h2 className="text-white text-2xl">GET IN TOUCH</h2>
            <ul className="list-none mb-3 cursor-pointer">
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                +1-234-456-789
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                contact@tomato.com
              </motion.li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright ">
          Copyright 2024 © Tomato.com - All Right Reserved.
        </p>
      </div>
    </>
  );
}
