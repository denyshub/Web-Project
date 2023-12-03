import React from "react";
import styles from "../Styles_Folder/Everyday_Recipes.module.css";
import Line from "../Pictures/Line 1.svg";

const Recipe_List = (props) => {
  return (
    <>
        <div className={styles.Everyday_Text_Aligner}>
        <h1 className={styles[props.StyleName]}>{props.Text}</h1>
        <div className={styles.Line_Container}>
          <img src={Line} width="200px" className={styles.Line}></img>
        </div>
      </div>
      <div className={styles.Center_Aligner}>
        <div
          className={`${styles.Recipes_Container} ${styles.evenly} ${styles.start}`}
        >
          {props.Category}
        </div>
      </div>
    </>
  );
};

export default Recipe_List;
