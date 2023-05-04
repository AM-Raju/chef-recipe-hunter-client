import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaInstagram, FaRegUserCircle, FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import use_flag from "../assets/use_flag.png";

const LeftNavigation = () => {
  const { user, logOut, loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
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
        <div className="flex mt-16 mx-auto w-28 gap-3 ">
          <img className="w-7 h-7" src={use_flag} alt="" />
          {user ? (
            <>
              <img
                className="rounded-full w-7 h-7 border-2 hover:border-[#fd6656]"
                src={user.photoURL}
                alt=""
                title={user.displayName}
                referrerPolicy="no-referrer"
              />
            </>
          ) : (
            <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
          )}

          <FaInstagram className="text-3xl hover:text-[#fd6656]"></FaInstagram>
        </div>
        {!user && (
          <NavLink to="/register">
            <button className="px-5 py-2  bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-52  mt-4 text-lg font-semibold tracking-wider">
              Register
            </button>
          </NavLink>
        )}

        {!user ? (
          <NavLink to="/login">
            <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-52 mt-4 text-lg font-semibold tracking-wider block">
              Login
            </button>
          </NavLink>
        ) : (
          <button
            onClick={handleSignOut}
            className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-52 mt-4 text-lg font-semibold tracking-wider"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default LeftNavigation;
