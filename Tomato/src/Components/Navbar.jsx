import React, { Profiler, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreAuthContext } from "../Context/StoreAuthContext";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreAuthContext);
  const navigate=useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  };

  return (
    <div className="navbar p-[20px_0px] flex justify-between items-center">
      <Link to="/">
        {" "}
        <img
          src={assets.logo}
          alt="This may not uploaded correctly"
          className="logo w-[150px]"
        />
      </Link>
      <ul className="navbar-menu gap-5 list-none text-[#49557e] flex text-[18px]">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right flex gap-10 items-center">
        <img className="lg:w-[22px]" src={assets.search_icon} alt="" />
        <div className="navbar-basket relative">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot absolute min-h-[10px] min-w-[10px] rounded-[5px] bg-[tomato] top-[-8px] right-[-7px]"
            }
          ></div>
        </div>
        {!token ? (
          <motion.button
            onClick={() => setShowLogin(true)}
            whileHover={{ scale: 1.1 }}
            className="bg-transparent text-[16px] text-[#49557e] border-[1px] border-[tomato] p-[10px_20px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition-all"
          >
            Sign In
          </motion.button>
        ) : (
          <div className="navbar-profile relative">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown absolute  z-[1] right-0 hidden top-8">
              <li className="flex cursor-pointer gap-2 items-center justify-center w-[70px] hover:text-[tomato]">
                <img className="w-[20px]" src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex cursor-pointer gap-2 items-center justify-center w-[70px] hover:text-[tomato] "
              >
                <img className="w-[20px]" src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
