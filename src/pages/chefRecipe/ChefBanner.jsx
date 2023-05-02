import React from "react";
import banner from "../../assets/banner_bg.jpg";

const ChefBanner = () => {
  return (
    <div>
      <div
        className="
       bg-cover text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-7xl font-bold text-center pt-36 pb-36 bg-gradient-to-t from-[#011D29] opacity-95">
          <h2 className="tracking-wider">Change Your Taste</h2>
          <h2 className="pt-8 tracking-wider">
            with <span className="text-[#fd6656]"> BESTs</span>
          </h2>
          <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-fit mt-4 text-lg font-semibold tracking-wider">
            Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
