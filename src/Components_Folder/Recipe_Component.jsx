import React from "react";
import styles from "../Styles_Folder/Recipe.module.css";
import Liner from "../Pictures/line-xl-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import transliterateUkrainianToLatin from "./Tramsliteration";


const Recipe = (props) => {

  return (
    <div className={styles.Recipe_Container}>
      <NavLink className={styles.Link} to = {transliterateUkrainianToLatin(props.Name)}>
        <img src={props.Image} className={styles.Image_Style}></img>
        <div>
          <h1 className={styles.Name_Style}>{props.Name}</h1>
        </div>
        <div className={styles.Time_Diff}>
          <div className={styles.Time}>
            {" "}
            <ion-icon name="time-outline" class={styles.Time_Icon}></ion-icon>
            <h1 className={styles.Time_Text}>{props.Time} хв.</h1>
          </div>
          <div>
            <img src={Liner} className= {styles.Liner}width="35px"></img>
          </div>
          <div className={styles.Difficulty}>
            <ion-icon name="star-outline" class={styles.Time_Icon}></ion-icon>
            <h1 className={styles.Time_Text}>{props.Difficulty}</h1>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Recipe;
