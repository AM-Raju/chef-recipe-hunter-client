import React from "react";
import banner from "../../assets/banner_bg.jpg";
import { FaHeart } from "react-icons/fa";

const ChefBanner = () => {
  return (
    <div>
      <div
        className="
       bg-cover text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-10  pt-16 pb-16 bg-gradient-to-r from-[#011D29] opacity-95 flex items-center">
          <div className="w-72 border-r-2">
            <div className="bg-red-400 w-36 h-36 mx-auto rounded-full">
              <img src="" alt="" />
            </div>
            <div className="text-center mt-5">
              <h4 className="text-2xl font-semibold">John Muler</h4>
              <p className="py-1">8 Years of experience</p>
              <p className="py-1">Number of recipe 5</p>
              <div className="flex gap-2 justify-center items-center">
                <FaHeart className="text-red-500" />
                <p>500</p>
              </div>
            </div>
          </div>
          <div className="w-[500px] pl-10">
            <h3 className="text-3xl font-semibold mb-5">Bio</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, iste! Deserunt
              numquam illo id inventore vitae eligendi veritatis assumenda minus unde ratione modi
              libero, temporibus asperiores vero repudiandae a quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
