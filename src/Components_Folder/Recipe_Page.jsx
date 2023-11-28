import React, { useState, useEffect } from "react";
import styles from "../Styles_Folder/Recipe_Page.module.css";
import Ingr_Icon from "../Pictures/ingr-icon.svg";
import Lines from "../Pictures/lines.svg";
import Line from "../Pictures/Line_page.svg";
import GetLabel from "./GetLabel";
const Recipe_Page = (props) => {
  const stepsArray = props.Steps.split(";");
  const [stepStatus, setStepStatus] = useState(stepsArray.map(() => false));

  const ingredientsArray = props.Ingredients.split(";");

  function Checked_Label(index) {
    setStepStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = !prevStatus[index];
      return updatedStatus;
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Прокручуємо до верху сторінки при завантаженні цієї сторінки
  }, []);
const Label1 = GetLabel(24)
const Label2 = GetLabel(25)
  return (
    <div>
      <div className={styles.Underlined_Name}>
        <div className={styles.Food_Name}>
          <h1>{props.Name}</h1>
        </div>
        <div className={styles.Line}>
          <img src={Lines} width="400px" className={styles.Line}></img>
        </div>
      </div>
      <div className={styles.Image_Ingredients_Box}>
        <div className={styles.Image_Box}>
          <img
            src={`http://localhost:1337${props.Image}`}
            className={styles.Main_Image_Style}
            alt={props.Name}
          ></img>
        </div>
        <div className={styles.Ingredients}>
          <div className={styles.Ing_Header}>
            <img src={Ingr_Icon} width="60px" alt="Ingredients Icon"></img>
            <p>{Label1}</p>
          </div>
          <div className={styles.Ing_List}>
            {ingredientsArray.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.Additional_Info_Container}>
        <div className={styles.Additional_Title}>{Label2}</div>
        <div className={styles.Additional_Text}>
          {" "}
          <p>{props.Additional}</p>
        </div>
      </div>
      <div className={styles.Steps_Text}>
        <h1>Кроки</h1>
      </div>
      <div className={styles.Line}>
        <img src={Line} width="400px" className={styles.Line}></img>
      </div>
      <div className={styles.Steps_Box}>
        <div className={styles.Steps_Container}>
          {stepsArray.map((step, index) => (
            <div
              className={
                stepStatus[index]
                  ? styles.Step_Boarder_Done
                  : styles.Step_Boarder
              }
              key={index}
            >
              <div className={styles.IsDone}>
                <h1 className={styles.step_label}>Крок {index + 1}</h1>
                <button
                  onClick={() => Checked_Label(index)}
                  className={
                    stepStatus[index]
                      ? styles.Check_Label
                      : styles.Not_Checked_Label
                  }
                >
                  <h2>{stepStatus[index] ? "Виконано" : "Не виконано"}</h2>
                </button>
              </div>
              <p className={styles.step_description}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe_Page;
