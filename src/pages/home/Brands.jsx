import React from "react";
import brand_1 from "../../assets/brand_1.png";
import brand_2 from "../../assets/brand_2.png";
import brand_3 from "../../assets/brand_3.png";
import brand_4 from "../../assets/brand_4.png";
import brand_5 from "../../assets/brand_5.png";
import brand_6 from "../../assets/brand_6.png";

const Brands = () => {
  return (
    <div className="h-72 bg-[#225a74]">
      <h3 className="text-5xl font-semibold text-center pt-10 text-white">Chefs are From</h3>
      <div className="flex justify-around mt-5">
        <img className="grayscale hover:grayscale-0" src={brand_1} alt="" />
        <img className="grayscale hover:grayscale-0" src={brand_2} alt="" />
        <img className="grayscale hover:grayscale-0" src={brand_3} alt="" />
        <img className="grayscale hover:grayscale-0" src={brand_4} alt="" />
        <img className="grayscale hover:grayscale-0" src={brand_5} alt="" />
        <img className="grayscale hover:grayscale-0" src={brand_6} alt="" />
      </div>
    </div>
  );
};

export default Brands;
