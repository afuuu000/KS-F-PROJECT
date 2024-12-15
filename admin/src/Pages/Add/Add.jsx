import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

export default function Add() {
    const url="http://localhost:4000"
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response=await axios.post(`${url}/api/food/add`,formData)
    if (response.data.success) {
        setData({
            name: "",
            description: "",
            price: "",
            category: "Salad",
          })
          setImage(false)
          toast.success(response.data.message)
    } else {
        toast.error(response.data.message)
    }
  };

  return (
    <div className="add w-[30%] mt-[50px] text-[16px] text-[#6d6d6d]">
      <form className="flex-column gap-5 " onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-column">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-[120px]"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-column w-[max(40%_280px)]">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-[10px] border-solid border-[#a9a9a9] border"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-column w-[max(40%_280px)]">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-[10px] border-solid border-[#a9a9a9] border"
            name="description"
            rows="6"
            placeholder="Write Content Here"
            required
          ></textarea>
        </div>
        <div className="add-category-price flex gap-8">
          <div className="add-category flex-column">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              className="max-w-[120px] p-[10px] border-solid border-[#a9a9a9] border"
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-column">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-[10px] border-solid border-[#a9a9a9] border"
              type="Number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
