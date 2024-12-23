import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function List({ url }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  
  const removeFood = async (foodID) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodID });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-column mt-[50px] w-[70%]">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] border border-solid border-[#cacaca] text-[13px] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] border border-solid border-[#cacaca] text-[13px]"
            >
              <img
                className="w-[50px]"
                src={`${url}/images/` + item.image}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p
                onClick={() => removeFood(item._id)}
                className="cursor-pointer"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
