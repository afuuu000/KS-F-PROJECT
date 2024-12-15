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
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {

  const [showLogin, setShowLogin]=useState(false)
  return (
    
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app w-[80%] m-auto ">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
