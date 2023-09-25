import React from "react";
import Everyday_Recipes from "./Everyday_recipes";
import styles from "../Styles_Folder/Home.module.css";
import Food_Menu from "./Main_Food_Menu";
import First from "../Pictures/Перші страви.jpg";
import Second from "../Pictures/Другі страви.jpg";
import Desert from "../Pictures/Десерти.jpg";
import Background from "../Pictures/background.jpg";
import Under_Image_Menu from "./Under_Image_Menu";
import Lines from "../Pictures/lines.svg";
import Liner_Black from "../Pictures/Line 2.svg";
const Home = (props) => {
  return (
    <div className={styles.Text_Menu_Aligner}>
      <div>
        <img className={styles.Background_Image} src={Background}></img>
      </div>
      <div className={styles.Main_Text_Container}>
        <div className={styles.Main_Text}>
          <h1>Рецепти перших і других страв, а також десертів.</h1>
        </div>
        <div className={styles.Secondary_Text}>
          <h1>
            Безліч ідей, що приготувати на сніданок, обід чи вечерю. Дивіться,
            надихайтеся, готуйте.
          </h1>
        </div>
      </div>
      <div className={styles.Question_Box}>
        <h1>Що приготуємо сьогодні?</h1>
      </div>
      <div className={styles.Lines_Container}>
        <img src={Lines} width="400px"></img>
      </div>
      <div className={styles.Food_Menu}>
        <Food_Menu
          Food_Photo={First}
          Food_Name="Перші страви"
          Link="/pershi-stravy"
        />
        <Food_Menu
          Food_Photo={Second}
          Food_Name="Другі страви"
          Link="/drugi-stravy"
        />
        <Food_Menu Food_Photo={Desert} Food_Name="Десерти" Link="/deserty" />
      </div>
      <Under_Image_Menu />
      {/* <div className={styles.Liner_Black}>
        <img src={Liner_Black} width="101%"></img>
      </div> */}
      <Everyday_Recipes Data = {props.Data}/>
    </div>
  );
};

export default Home;
