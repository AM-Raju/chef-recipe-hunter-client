import React from "react";

const RecipeDetailsCard = () => {
  return (
    <div className="flex items-center w-[900px]">
      <div className="w-64 h-96 bg-red-500">
        <img className="w-64" src="" alt="" />
      </div>
      <div className="text-white border-t-2 border-r-2 border-b-2 py-8 pl-20 pr-10 relative right-8">
        <h3 className="text-2xl font-semibold">Recipe Name</h3>
        <div className="mt-3">
          <h4 className="text-xl">Ingredients:</h4>
          <ol className="list-decimal grid grid-cols-3 ml-8 w-96">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ol>
        </div>
        <div className="my-3">
          <h4 className="text-xl">Cooking Method:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam repudiandae
            repellat voluptatem aliquam repellendus doloribus tempora qui, esse impedit et,
            exquaerat expedita neque itaque reprehenderit distinctio amet. Enim tempore iure ipsa
            ad, deleniti eos dolores distinctio eius, vel, tenetur amet atque! Est, similique
            voluptatem eligendi delectus reprehenderit possimus.
          </p>
        </div>
        <p>Rating: 4.5/5</p>
      </div>
    </div>
  );
};

export default RecipeDetailsCard;
