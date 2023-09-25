import React, { useState, useEffect } from "react";
import styles from "../Styles_Folder/Recipe_Page.module.css";
import test_image from "../Pictures/Деруни.jpg";
import Ingr_Icon from "../Pictures/ingr-icon.svg";
import Lines from "../Pictures/lines.svg";
import Line from "../Pictures/Line_page.svg";


const Recipe_Page = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Прокручуємо до верху сторінки при завантаженні цієї сторінки
  }, []);

  const ingredientsString = props.Ingredients;
  const ingredientsArray = ingredientsString.split(";");

  const stepsString = props.Steps;
  const stepssArray = stepsString.split(";");


  const [stepStatus, setStepStatus] = useState(stepssArray.map(() => false));

  function Checked_Label(index) {
    setStepStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = !prevStatus[index];
      return updatedStatus;
    });
  }

  return (
    <div>
      <div className={styles.Underlined_Name}>
        <div className={styles.Food_Name}>
          <h1>{props.Name}</h1>{" "}
        </div>
        <div className={styles.Line}>
          <img src={Lines} width="400px" className={styles.Line}></img>
        </div>
      </div>
      <div className={styles.Image_Ingredients_Box}>
        <div className={styles.Image_Box}>
          <img src={props.Image} className={styles.Main_Image_Style}></img>
        </div>
        <div className={styles.Ingredients}>
          <div className={styles.Ing_Header}>
            <img src={Ingr_Icon} width="60px"></img>
            <p>Інгрідієнти</p>
          </div>

          <div className={styles.Ing_List}>
            {ingredientsArray.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
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
          {stepssArray.map((step, index) => (
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
