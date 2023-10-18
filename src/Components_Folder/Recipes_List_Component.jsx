import React from "react";
import styles from "../Styles_Folder/Everyday_Recipes.module.css";
import Line from "../Pictures/Line 1.svg";

const Recipe_List = (props) => {

  return (
    <>
      <div className={styles.EveryDay_Container_Aligner}>
        <div className={styles.EveryDay_Container}>
          <div className={styles.Everyday_Text_Aligner}>
            <h1 className={styles.Everyday_Text}>{props.Text}</h1>
            <div className={styles.Line_Container}>
              <img src={Line} width="200px" className={styles.Line}></img>
            </div>
          </div>
          <div className={styles.Recipes_Container}>
            {props.Category}
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Recipe_List;