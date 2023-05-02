import React from "react";
import { Outlet } from "react-router-dom";
import LeftNavigation from "../shared/LeftNavigation";

const Main = () => {
  return (
    <div className="flex">
      <div className="fixed">
        <LeftNavigation></LeftNavigation>
      </div>
      <div className="relative left-72">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
