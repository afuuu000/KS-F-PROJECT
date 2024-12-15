import React, { useState } from "react";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import FoodDisplay from "../../Components/FoodDisplay";
import AppDownload from "../../Components/AppDownload";

export default function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}
