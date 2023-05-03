import React from "react";
import banner from "../../assets/banner_bg.jpg";
import { FaHeart } from "react-icons/fa";

const ChefBanner = ({ chef }) => {
  const { id, name, picture, banner, shortBio, likes, numberOfRecipes, experience } = chef;
  return (
    <div>
      <div
        className="
       bg-cover text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-10  pt-16 pb-16 bg-gradient-to-r from-[#011D29] opacity-95 flex items-center">
          <div className="w-72 border-r-2">
            <img className="rounded-full w-36 h-36 mx-auto" src={picture} alt="" />

            <div className="text-center mt-5">
              <h4 className="text-2xl font-semibold">{name}</h4>
              <p className="py-1">{experience} Years of experience</p>
              <p className="py-1">Number of recipes {numberOfRecipes}</p>
              <div className="flex gap-2 justify-center items-center">
                <FaHeart className="text-red-500" />
                <p>{likes}</p>
              </div>
            </div>
          </div>
          <div className="w-[500px] pl-10">
            <h3 className="text-3xl font-semibold mb-5">Bio</h3>
            <p>{shortBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
