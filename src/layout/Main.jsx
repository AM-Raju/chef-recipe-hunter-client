import React from "react";
import { Outlet } from "react-router-dom";
import LeftNavigation from "../shared/LeftNavigation";

const Main = () => {
  return (
    <div className="flex">
      <LeftNavigation></LeftNavigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
