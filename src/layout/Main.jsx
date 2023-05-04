import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftNavigation from "../shared/LeftNavigation";
import TopNavigation from "../pages/home/TopNavigation";

const Main = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <LeftNavigation></LeftNavigation>
      </div>
      <div className="relative lg:left-72">
        <TopNavigation></TopNavigation>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
