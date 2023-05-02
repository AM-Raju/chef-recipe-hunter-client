import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefCard from "./ChefCard";
import RecentRecipes from "./RecentRecipes";
import Brands from "./Brands";

const Home = () => {
  // State for chefs
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
      {/* Homepage Banner section */}
      <Banner></Banner>
      {/* Homepage Chefs card section */}
      <div className="grid grid-cols-6 gap-3 pt-2 pb-2">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
      {/* Homepage recent recipes section */}
      <div className="my-20">
        <RecentRecipes></RecentRecipes>
      </div>
      <div className="my-20">
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
