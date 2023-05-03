import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaRegUserCircle, FaUser } from "react-icons/fa";

const LeftNavigation = () => {
  return (
    <div className="bg-[#011D29] text-white min-w-72 min-h-screen hidden lg:block">
      <div className="py-8 px-10">
        <h2 className="text-4xl font-bold text-[#fd6656] tracking-wider">FOOD Lab</h2>
        <nav className="flex flex-col mt-10">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/chefs/flch1"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
          >
            Blog
          </NavLink>
        </nav>
        <div className="flex mt-16 mx-auto w-20 gap-3">
          <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
          <FaInstagram className="text-3xl"></FaInstagram>
        </div>
        <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider">
          Register
        </button>
        <NavLink to="/login">
          <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNavigation;
