import React, { useEffect, useState } from "react";
import LeftNavigation from "../../shared/LeftNavigation";
import Footer from "../../shared/Footer";
import ChefBanner from "./ChefBanner";
import RecipeDetailsCard from "./RecipeDetailsCard";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  // Getting single chef's data through loader
  const chef = useLoaderData();
  const id = chef.id;

  //Getting all recipe data from server
  useEffect(() => {
    fetch("https://chef-recipe-hunter-ss-am-raju.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error.message));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => recipe.chef_id === id);
  return (
    <div className="w-[1615px] bg-[#002C41] h-full">
      <ChefBanner key={chef.id} chef={chef}></ChefBanner>
      <div>
        <Marquee
          speed={100}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[0, 44, 65]}
          gradientWidth={300}
        >
          <div className="mx-auto py-14 flex">
            {filteredRecipes.map((recipe) => (
              <RecipeDetailsCard key={recipe._id} recipe={recipe}></RecipeDetailsCard>
            ))}
          </div>
        </Marquee>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipes;
