import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import use_flag from "../../assets/use_flag.png";
import { FaBars, FaWindowClose } from "react-icons/fa";

const TopNavigation = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div className="bg-[#011D29] lg:hidden text-white min-w-72 py-3 pl-3">
      <div className="text-3xl">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold text-[#fd6656] tracking-wider">FOOD Lab</h2>
          <div className="flex mt-1 gap-3 mr-6 ">
            <img className="w-7 h-7" src={use_flag} alt="" />
            {user ? (
              <>
                <img
                  className="rounded-full w-8 h-8 border-2 hover:border-[#fd6656]"
                  src={user.photoURL}
                  alt=""
                  title={user.displayName}
                  referrerPolicy="no-referrer"
                />
              </>
            ) : (
              <FaRegUserCircle className="text-3xl"></FaRegUserCircle>
            )}
            {/* bar icon */}
            {showMenu ? (
              <FaBars
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              ></FaBars>
            ) : (
              <FaWindowClose
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              ></FaWindowClose>
            )}
          </div>
        </div>
      </div>
      {/* Shown and Hidden Menu section */}
      <div className={`px-10 ${showMenu ? "hidden" : ""}`}>
        <nav className="flex gap-3 mt-2 ml-7">
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

        {!user && (
          <NavLink to="/register">
            <button className="px-5 m-7 py-2  bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-64  mt-4 text-lg font-semibold tracking-wider">
              Register
            </button>
          </NavLink>
        )}

        {!user ? (
          <NavLink to="/login">
            <button className="px-5 ml-7 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-64 text-lg font-semibold tracking-wider">
              Login
            </button>
          </NavLink>
        ) : (
          <button
            onClick={handleSignOut}
            className="px-5 ml-7 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-64 text-lg mt-4 font-semibold tracking-wider"
          >
            Sign Out
          </button>
        )}

        {/* <NavLink to="/login">
      <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider">
        Login
      </button>
    </NavLink> */}
      </div>
    </div>
  );
};

export default TopNavigation;
