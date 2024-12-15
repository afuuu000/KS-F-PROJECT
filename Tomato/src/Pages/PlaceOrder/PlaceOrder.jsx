import React from "react";
import { useContext } from "react";
import { StoreAuthContext } from "../../Context/StoreAuthContext";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreAuthContext);
  return (
    <form className="place-order flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-[40%] max-w-[max(30%_500px)]">
        <p className="title text-[30px] font-semibold mb-[60px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right w-[40%] max-w-[max(40%_500px)] ">
        <div className="cart-total  flex flex-col gap-5">
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
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 3}
              </b>
            </div>
          </div>
          <button className="border-none text-white bg-[tomato] w-[40%] p-[12px_0px] rounded cursor-pointer mt-6">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}
