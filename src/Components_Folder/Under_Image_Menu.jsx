import React from "react";
import Salad_Icon from "../Pictures/salad-icon.svg";
import Snack_Icon from "../Pictures/snack-icon.svg";
import Backing_Icon from "../Pictures/backing-icon.svg";
import Drinks_Icon from "../Pictures/drinks-icon.svg"
import Sauces_Icon from "../Pictures/sauces-icon.svg"
import styles from "../Styles_Folder/Under_Image_Menu.module.css";
import { NavLink } from "react-router-dom";
const Food_Icon = (props) => {
  return (
    <div className={styles.Underlined_Div}>
      {" "}
      <NavLink to = {props.Link} className={styles.Menu_Link_Style}>
        <img src={props.Image} width="150" height="150"></img>{" "}
        <h1 className={styles.Menu_Text}>{props.Text}</h1>
      </NavLink>
    </div>
  );
};

const Under_Image_Menu = () => {
  return (<>
 <h1 className={styles.Other_Categoties}>Інші категорії</h1>
    <div className={styles.Menu_Horizontal_Aligner}>
      <div className={styles.Border_Box}>
      <Food_Icon Image={Drinks_Icon} Text="Напої" Link = "/napoi"/>
      <Food_Icon Image={Salad_Icon} Text="Салати" Link = "/salaty"/>
      <Food_Icon Image={Snack_Icon} Text="Закуски" Link = "/sneky"/>
      <Food_Icon Image={Backing_Icon} Text="Випічка" Link = "/vypichka" />
      <Food_Icon Image={Sauces_Icon} Text="Соуси" Link = "/sousy" />
      </div>
    </div>
  </>
  );
};

export default Under_Image_Menu;
