import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { StoreAuthContext } from "../Context/StoreAuthContext";

const FoodItem=({ dataValue })=> {
  let {cartItems, addToCart, removeFromCart} = useContext(StoreAuthContext);
  return (
    <motion.div
      initial={{ x: "1", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 3 }}
      className="food-item w-[100%] m-auto rounded-[15px] "
    >
      <div className="item-image relative ">
        <img
          className=" w-[100%] rounded-[15px_15px_0px_0px]"
          src={dataValue.image}
          alt="item-image"
        />
        {!cartItems[dataValue._id] ? (
          <img
            onClick={() => addToCart(dataValue._id)}
            className="add absolute w-[40px] bottom-4 right-4 cursor-pointer rounded-[50%]"
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter absolute bottom-4 right-4 flex items-center gap-3 p-[6px] rounded-[50px] bg-white">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(dataValue._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[dataValue._id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(dataValue._id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="item-info p-5">
        <div className="name-rating flex justify-between items-center mb-[10px]">
          <p className="font-medium text-[20px]">{dataValue.name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[12px]">{dataValue.description}</p>
        <p className="text-[tomato] text-[22px] font-medium m-[10px_0px]">
          ${dataValue.price}
        </p>
        .
      </div>
    </motion.div>
  );
}

export default FoodItem