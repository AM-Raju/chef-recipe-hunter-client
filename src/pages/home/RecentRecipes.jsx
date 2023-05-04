import React from "react";
import recipe_1 from "../../assets/recent_recipe_1.jpg";
import recipe_2 from "../../assets/recent_recipe_2.jpg";
import recipe_3 from "../../assets/recent_recipe_3.jpg";
import recipe_4 from "../../assets/recent_recipe_4.jpg";

const RecentRecipes = () => {
  return (
    <div className="lg:h-96 grid lg:grid-cols-4">
      {/* Recent recipe text */}
      <div className=" bg-[#225a74] p-6 lg:p-0 flex justify-center items-center">
        <div className="border-2 border-[#fd6656] h-80 w-80 relative">
          <div className="absolute border-2 border-[#011D29] top-2 hover:-top-3 hover:-right-3 duration-500 right-2 h-80 w-80 flex justify-center items-center text-white hover:text-[#fd6656]">
            <h3 className="text-5xl font-semibold">
              Recent <br /> Recipes
            </h3>
          </div>
        </div>
      </div>
      {/* Recipe block */}
      <div className=" bg-[#225a74] col-span-3 ">
        <div className="bg-[#002C41] lg:h-[352px] mt-4 pl-14 lg:pl-0 lg:flex justify-evenly">
          {/* New recipe 1 */}
          <div className="p-6 mb-6 lg:mb-0 border-l-2 border-r-2 hover:border-[#fd6656] duration-200 w-64 text-white hover:text-[#fd6656] text-center">
            <img className="rounded" src={recipe_1} alt="" />
            <h4 className="text-2xl mt-7 tracking-wider">Steak Pizzaiola</h4>
            <p>Rating: 4.6/5</p>
          </div>
          {/* New recipe 2 */}
          <div className="p-6 hidden lg:block border-l-2 border-r-2 hover:border-[#fd6656] duration-200 w-64 text-white hover:text-[#fd6656] text-center">
            <h4 className="text-2xl  tracking-wider">Creamy Pudding</h4>
            <p className="mb-7">Rating: 4.8/5</p>
            <img src={recipe_2} alt="" />
          </div>
          {/* New recipe 3 */}
          <div className="p-6 border-l-2 border-r-2 hover:border-[#fd6656] duration-200 w-64 text-white hover:text-[#fd6656] text-center">
            <img className="rounded" src={recipe_3} alt="" />
            <h4 className="text-2xl mt-7 tracking-wider">Egg Masala</h4>
            <p>Rating: 4.7/5</p>
          </div>
          {/* New recipe 4 */}
          <div className="p-6 hidden lg:block border-l-2 border-r-2 hover:border-[#fd6656] duration-200 w-64 text-white hover:text-[#fd6656] text-center">
            <h4 className="text-2xl  tracking-wider">Fruit Yogurt</h4>
            <p className="mb-7">Rating: 5.0/5</p>
            <img src={recipe_4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRecipes;
