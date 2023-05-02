import React, { useEffect, useState } from "react";
import LeftNavigation from "../../shared/LeftNavigation";
import Footer from "../../shared/Footer";
import ChefBanner from "./ChefBanner";

const ChefRecipes = () => {
  const [chefs, setChefs] = useState([]);
  // Getting chefs data from server
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="w-[1615px] bg-[#002C41] h-full">
      <ChefBanner></ChefBanner>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipes;
