import React, { useEffect, useState } from "react";
import LeftNavigation from "../../shared/LeftNavigation";
import Footer from "../../shared/Footer";
import ChefBanner from "./ChefBanner";
import RecipeDetailsCard from "./RecipeDetailsCard";
import Marquee from "react-fast-marquee";

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
      <div>
        <Marquee
          speed={100}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[0, 44, 65]}
          gradientWidth={300}
        >
          <div className="mx-auto py-14 flex">
            <RecipeDetailsCard></RecipeDetailsCard>
            <RecipeDetailsCard></RecipeDetailsCard>
            <RecipeDetailsCard></RecipeDetailsCard>
          </div>
        </Marquee>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipes;
