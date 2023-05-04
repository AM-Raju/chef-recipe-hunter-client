import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const RecipeDetailsCard = ({ recipe }) => {
  const { _id, recipe_name, recipe_img, ingredients, instructions, rating } = recipe;

  const [showFavBtn, setShowFavBtn] = useState(true);

  const showToast = () => {
    toast.success("Recipe added to your favorite");
    // alert("show toast");
    setShowFavBtn(false);
  };

  return (
    <div className="flex items-center ml-10 w-[900px] relative">
      <img className="w-64 h-96 rounded" src={recipe_img} alt="" />
      <div className="text-white border-t-2 border-r-2 border-b-2 py-8 pl-20 pr-10 relative right-8">
        <h3 className="text-2xl font-semibold">{recipe_name}</h3>
        <div className="mt-3">
          <h4 className="text-xl mb-2">Ingredients:</h4>
          <ol className="list-decimal grid grid-cols-3 ml-8 gap-y-3 w-[500px]">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
        </div>
        <div className="my-3">
          <h4 className="text-xl py-3">Cooking Method:</h4>
          <p>
            {instructions.length < 250 ? (
              <>{instructions}</>
            ) : (
              <>
                {instructions.slice(0, 250)}... <button>Read More</button>
              </>
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="pt-4 text-lg">Rating: {rating}/5</p>
          {showFavBtn && (
            <button onClick={showToast} className=" text-5xl text-[#fd6656] right-10 top-4 ">
              <FaStar></FaStar>
            </button>
          )}
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default RecipeDetailsCard;
