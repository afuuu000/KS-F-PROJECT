import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import StoreAuthContextProvider from "./Context/StoreAuthContext";

function App() {
  return (
    <>
      <StoreAuthContextProvider>
        <div className="app w-[80%] m-auto ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<PlaceOrder />}></Route>
          </Routes>
        </div>
      </StoreAuthContextProvider>
    </>
  );
}

export default App;
