import React from "react";
import styles from "../Styles_Folder/Everyday_Recipes.module.css";
import Recipe from "./Recipe_Component";
import Olivie from "../Pictures/Олів'є.jpg";
import Shuba from "../Pictures/Оселедець під шубою.jpeg";
import Sharlotka from "../Pictures/Шарлотка.jpg";
import Deruny from "../Pictures/Деруни.jpg";
import Kachka from "../Pictures/Качка по-пекінськи.jpg";
import Mlyntsi from "../Pictures/Млинці.jpeg";

import Footer from "./Footer";
import Recipe_List from "./Recipes_List_Component";
function EveryDay_Map_Function(recipes) {
  return recipes
    .filter((recipe) => recipe.everyday == 1)
    .map((recipe) => (
      <Recipe
        Image={recipe.image}
        Name={recipe.name}
        Time={recipe.time}
        Difficulty={recipe.difficulty}
      />
    ));
}
const Everyday_Recipes = (props) => {
  return (
    <>
      <Recipe_List
        Category={EveryDay_Map_Function(props.Data)}
        Text="Популярні рецепти"
      />
      <Footer />
    </>
  );
};

export default Everyday_Recipes;
