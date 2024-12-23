import React, { useContext } from "react";
import { StoreAuthContext } from "../../Context/StoreAuthContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,addToCart,url } =
    useContext(StoreAuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="cart mt-[100px]">
        <div className="cart-items">
          <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[grey] text-[max(1vw_12px)] ">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove/Add</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw_12px)] m-[10px_0px] text-[black] ">
                    <img className="w-[50px]" src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p className="Total-am">${item.price * cartItems[item._id]}</p>
                    <div className="food-item-counter cart-counter bottom-4 right-4 flex items-center gap-3 p-[6px] rounded-[50px] bg-white">
                      <img
                        className="w-[30px]"
                        onClick={() => removeFromCart(item._id)}
                        src={assets.remove_icon_red}
                        alt=""
                      />
                      <p>{cartItems[item._id]}</p>
                      <img
                        className="w-[30px]"
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_green}
                        alt=""
                      />
                    </div>
                  </div>
                  <hr className="h-[1px] bg-[#e2e2e2] border-none" />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw_20px)]">
          <div className="cart-total flex-1 flex flex-col gap-5">
            <h2 className="text-[24px] font-medium">Cart Totals</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="m-[10px_0px]" />
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 3}</p>
              </div>
              <hr className="m-[10px_0px]" />
              <div className="cart-total-details  flex justify-between text-[#555]">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 3}
                </b>
              </div>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="cart-checkout-b border-none text-white bg-[tomato] w-[40%] p-[12px_0px] rounded cursor-pointer"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode flex-1 ml-12 ">
            <div>
              <p className="text-[#555]">
                If you have a promo code, Enter it here
              </p>
              <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="bg-transparent outline-none pl-3"
                />
                <button className="w-[max(10vw_150px)] p-[12px_5px] bg-black border-none text-white rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
