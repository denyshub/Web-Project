import React from "react";
import styles from "../Styles_Folder/Everyday_Recipes.module.css";
import Recipe from "./Recipe_Component";
import Olivie from "../Pictures/Олів'є.jpg";
import Shuba from "../Pictures/Оселедець під шубою.jpeg";
import Sharlotka from "../Pictures/Шарлотка.jpg";
import Deruny from "../Pictures/Деруни.jpg";
import Kachka from "../Pictures/Качка по-пекінськи.jpg";
import Mlyntsi from "../Pictures/Млинці.jpeg";
import Line from "../Pictures/Line 1.svg";

function EveryDay_Map_Function(recipes){
return  recipes.filter(recipe => recipe.everyday == 1).map((recipe) => (
  <Recipe Image={recipe.image} Name={recipe.name} Time = {recipe.time} Difficulty= {recipe.difficulty}/>
));

}
const Everyday_Recipes = (props) => {
  debugger
  return (
    <div className={styles.EveryDay_Container_Aligner}>
      <div className={styles.EveryDay_Container}>
        <div className={styles.Everyday_Text_Aligner}>
          <h1 className={styles.Everyday_Text}>Рецепти на кожен день</h1>
          <div className={styles.Line_Container}>
            <img src={Line} width="400px" className={styles.Line}></img>
          </div>
        </div>
        <div className={styles.Recipes_Container}>

        {EveryDay_Map_Function(props.Data)}
        </div>
      </div>
    </div>
  );
};

export default Everyday_Recipes;
