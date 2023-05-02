import React from "react";
import chef from "../../assets/chefImage.jpg";
import { FaHeart } from "react-icons/fa";

const ChefCard = () => {
  return (
    <div className="w-[260px] bg-red-300 h-[379px] rounded text-center">
      <div className=" w-40 mx-auto my-5">
        <img className="border-2 border-[#fd6656] rounded-full" src={chef} alt="" />
      </div>
      <h3 className="text-xl">John Muller</h3>
      <p>20 Years of cooking</p>
      <p>10 Recipes</p>
      <div className="flex justify-center gap-2 items-center">
        <FaHeart className="text-red-500" />
        <p>500</p>
      </div>
      <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-fit mt-4 text-lg font-semibold tracking-wider">
        View Recipe
      </button>
    </div>
  );
};

export default ChefCard;
