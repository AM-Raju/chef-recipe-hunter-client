import React from "react";

const RecipeDetailsCard = ({ recipe }) => {
  const { recipe_name, recipe_img, ingredients, instructions, rating } = recipe;
  return (
    <div className="flex items-center ml-10 w-[900px]">
      <img className="w-64 h-96 rounded" src={recipe_img} alt="" />
      <div className="text-white border-t-2 border-r-2 border-b-2 py-8 pl-20 pr-10 relative right-8">
        <h3 className="text-2xl font-semibold">{recipe_name}</h3>
        <div className="mt-3">
          <h4 className="text-xl">Ingredients:</h4>
          <ol className="list-decimal grid grid-cols-3 ml-8 w-[500px]">
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ol>
        </div>
        <div className="my-3">
          <h4 className="text-xl">Cooking Method:</h4>
          <p>{instructions}</p>
        </div>
        <p>Rating: {rating}/5</p>
      </div>
    </div>
  );
};

export default RecipeDetailsCard;
