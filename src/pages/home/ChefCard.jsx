import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const { id, name, picture, likes, numberOfRecipes, experience } = chef;
  return (
    <div className="w-[258px] bg-[#225a74] h-[379px] rounded text-center text-white">
      <div className=" w-40 mx-auto my-5">
        <LazyLoad width={160} height={160} threshold={0.95}>
          <img className="border-2 border-[#fd6656] rounded-full" src={picture} alt="" />
        </LazyLoad>
      </div>
      <h3 className="text-xl">{name}</h3>
      <p>{experience} Years Cooking experience</p>
      <p>{numberOfRecipes} Recipes</p>
      <div className="flex justify-center gap-2 items-center">
        <FaHeart className="text-red-500" />
        <p>{likes}</p>
      </div>
      <Link to={`/chefs/${id}`}>
        <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-fit mt-4 text-lg font-semibold tracking-wider">
          View Recipe
        </button>
      </Link>
    </div>
  );
};

export default ChefCard;
