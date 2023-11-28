import React from "react";
import Salad_Icon from "../Pictures/salad-icon.svg";
import Snack_Icon from "../Pictures/snack-icon.svg";
import Backing_Icon from "../Pictures/backing-icon.svg";
import Drinks_Icon from "../Pictures/drinks-icon.svg";
import Sauces_Icon from "../Pictures/sauces-icon.svg";
import styles from "../Styles_Folder/Under_Image_Menu.module.css";
import { NavLink } from "react-router-dom";
import GetLabel from "./GetLabel";
const Food_Icon = (props) => {
  return (
    <div className={styles.Underlined_Div}>
      {" "}
      <NavLink to={props.Link} className={styles.Menu_Link_Style}>
        <img src={props.Image} className={styles.Icon_Size}></img>{" "}
        <h1 className={styles.Menu_Text}>{props.Text}</h1>
      </NavLink>
    </div>
  );
};

const Under_Image_Menu = (props) => {
  const Label1 = GetLabel(12)
  const Label2 = GetLabel(11)
  const Label3 = GetLabel(13)
  const Label4 = GetLabel(10)
  const Label5 = GetLabel(9)
  return (
    <div className={styles.Under_Image_Menu}>
      <h1 className={styles.Other_Categoties}>{props.Label}</h1>
      <div className={styles.Menu_Horizontal_Aligner}>
        <div className={styles.Border_Box}>
          <Food_Icon Image={Drinks_Icon} Text={Label1} Link="/napoi" />
          <Food_Icon Image={Salad_Icon} Text={Label3} Link="/salaty" />
          <Food_Icon Image={Snack_Icon} Text={Label2} Link="/sneky" />
          <Food_Icon Image={Backing_Icon} Text={Label4} Link="/vypichka" />
          <Food_Icon Image={Sauces_Icon} Text={Label5} Link="/sousy" />
        </div>
      </div>
    </div>
  );
};

export default Under_Image_Menu;
