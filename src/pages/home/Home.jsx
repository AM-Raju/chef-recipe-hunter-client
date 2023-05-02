import React from "react";
import Banner from "./Banner";
import ChefCard from "./ChefCard";

const Home = () => {
  return (
    <div className="w-[1632px]">
      <Banner></Banner>
      <div className="grid grid-cols-6 gap-3 pt-2 pb-2 bg-slate-500">
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
      </div>
    </div>
  );
};

export default Home;
