import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaRegUserCircle, FaUser } from "react-icons/fa";

const LeftNavigation = () => {
  return (
    <div className="bg-[#011D29] text-white min-w-72 min-h-screen hidden lg:block">
      <div className="py-8 px-10">
        <h2 className="text-4xl font-bold text-[#fd6656] tracking-wider">FOOD Lab</h2>
        <nav className="flex flex-col mt-10">
          <Link className="py-4 border-b font-semibold text-lg hover:border-[#fd6656] transition-all duration-500 tracking-wider">
            Home
          </Link>
          <Link
            to="/recipe"
            className="py-4 border-b font-semibold text-lg hover:border-[#fd6656] transition-all duration-500 tracking-wider"
          >
            Recipes
          </Link>
          <Link className="py-4 border-b font-semibold text-lg hover:border-[#fd6656] transition-all duration-500 tracking-wider">
            About
          </Link>
          <Link className="py-4 border-b font-semibold text-lg hover:border-[#fd6656] transition-all duration-500 tracking-wider">
            Blog
          </Link>
          <Link className="py-4 border-b font-semibold text-lg hover:border-[#fd6656] transition-all duration-500 tracking-wider">
            Contact
          </Link>
        </nav>
        <div className="flex mt-16 mx-auto w-20 gap-3">
          <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
          <FaInstagram className="text-3xl"></FaInstagram>
        </div>
        <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider">
          Register
        </button>
        <Link to="/login">
          <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftNavigation;
