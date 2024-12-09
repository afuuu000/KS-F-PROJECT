import React, { useContext } from "react";
import { StoreAuthContext } from "../Context/StoreAuthContext";
import FoodItem from "./FoodItem";


export default function FoodDisplay() {
  let { food_list } = useContext(StoreAuthContext);
  return (
    <div className="food-display mt-[30px]">
      <h2 className="text-[max(2vw,24px)] font-medium">Top Dishes Near You</h2>
      <div className="food-list">
        {food_list.map((item, index)=> {
            return(
                <FoodItem key={index} dataValue={item}/>
            )
        })}
      </div>
    </div>
  );
}
