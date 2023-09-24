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
let Food_List = [Olivie, Sharlotka, Shuba, Deruny, Kachka];
const Everyday_Recipes = () => {
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
          <Recipe Image={Sharlotka} Name="Шарлотка" Time = '30' Difficulty= 'Середнє'/>
          <Recipe Image={Deruny} Name="Деруни" Time = '10' Difficulty= 'Легко'/>
          <Recipe Image={Kachka} Name="Качка по-пекінськи" Time = '40' Difficulty= 'Середнє'/>
          <Recipe Image={Olivie} Name="Олів'є" Time = '15' Difficulty= 'Легко'/>
          <Recipe Image={Shuba} Name="Оселедець під шубою" Time = '45' Difficulty= 'Середнє'/>
          <Recipe Image={Mlyntsi} Name="Млинці" Time = '3' Difficulty= 'Легко'/>
        </div>
      </div>
    </div>
  );
};

export default Everyday_Recipes;
