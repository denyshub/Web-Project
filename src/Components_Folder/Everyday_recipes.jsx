import React from "react";
import Recipe from "./Recipe_Component";


import Footer from "./Footer";
import Recipe_List from "./Recipes_List_Component";

function EveryDay_Map_Function(data) {
  const recipes = data?.data; // Access the 'data' property

  if (!Array.isArray(recipes)) {
    console.error("Recipes is not an array:", recipes);
    return [];
  }

  return recipes
    .filter((recipe) => recipe?.attributes?.everyday === true)
    .map((recipe) => (
      <Recipe
        key={recipe.id}
        Image={recipe?.attributes?.image?.data?.attributes?.url}
        Name={recipe?.attributes?.name}
        Time={recipe?.attributes?.time}
        Difficulty={recipe?.attributes?.difficulty}
      />
    ));
}

const Everyday_Recipes = ({ Data, Label }) => {
  return (
    <>
      <Recipe_List
        Category={EveryDay_Map_Function(Data)}
        Text={Label}
        StyleName="Everyday_Text_Main"
      />
    </>
  );
};

export default Everyday_Recipes;
