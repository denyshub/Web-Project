import React from "react";
import Recipe from "./Recipe_Component";
import Recipe_List from "./Recipes_List_Component";

function Stravy_Map(recipes, category) {
  return recipes
    .filter((recipe) => recipe.category == category)
    .map((recipe) => (
      <Recipe
        Image={recipe.image}
        Name={recipe.name}
        Time={recipe.time}
        Difficulty={recipe.difficulty}
      />
    ));
}

const Category_Page = (props) => {
  return (
    <>
      <Recipe_List
        Category={Stravy_Map(props.Data, props.Category)}
        Text={props.Text}
      />
    </>
  );
};

export default Category_Page;