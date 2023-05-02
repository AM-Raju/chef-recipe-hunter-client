import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center pb-16">
      <div className="text-white ">
        <h2 className="text-7xl font-bold mb-8 text-[#fd6656]">Food Lab</h2>
        <p className="my-2">The Ultimate Taste is Here</p>
        <p>
          <small>
            <span>&#169;</span> Food Lab, All right reserved
          </small>
        </p>
      </div>
      <div className="h-72 w-0.5 bg-white    "></div>
      <div>
        <button className=" py-4 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-80 mt-4 text-xl font-semibold text-white tracking-wider">
          Subscribe
        </button>
        <div className="text-center text-white pt-5">
          <p>Food Lab Ltd. & Fine dining,</p>
          <p>71 Madison Ave, New York, USA</p>
          <p className="text-xl">+39-055-123456,+39-066-666999</p>
          <p>query@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
