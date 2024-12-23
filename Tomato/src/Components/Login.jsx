import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { StoreAuthContext } from "../Context/StoreAuthContext";
import axios from "axios"

export default function Login({ setShowLogin }) {
  let { url,setToken } = useContext(StoreAuthContext);
  const [curState, setCurState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl=url;
    if (curState==="Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

     if (response.data.success) {
         setToken(response.data.token)
         localStorage.setItem("token",response.data.token)
         setShowLogin(false)
        } else {
          alert(response.data.message)
        }
  };

  return (
    <div className="login-popup absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <motion.form
        onSubmit={onLogin}
        initial={{ x: "1", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="login-popup-container place-self-center w-[max(23vw_30px)] text-[#808080] bg-white  gap-6 p-[25px_30px] rounded-[8px] text-[14px]"
      >
        <div className="login-popup-title flex justify-between items-center text-[black]">
          <h2 className="text-[24px] mb-4">{curState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            className="w-4 cursor-pointer"
            alt=""
          />
        </div>

        <div className="login-popup-inputs flex flex-col gap-5">
          {curState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="border-none p-[10px] rounded text-[white] bg-[tomato] text-[15px] cursor-pointer mt-4 w-[100%]"
        >
          {curState === "SignUp" ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condition mt-4 items-start flex gap-2 ">
          <input className="mt-1" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {curState === "Login" ? (
          <p className="mt-3 text-black">
            Create a new account?{" "}
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurState("SignUp")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="mt-3 text-black">
            Already have an account?{" "}
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </motion.form>
    </div>
  );
}
