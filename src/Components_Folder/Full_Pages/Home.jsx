import React from "react";
import Everyday_Recipes from "../Everyday_recipes";
import styles from "../../Styles_Folder/Home.module.css";
import Food_Menu from "../Main_Food_Menu";
import First from "../../Pictures/Перші страви.jpg";
import Second from "../../Pictures/Другі страви.jpg";
import Desert from "../../Pictures/Десерти.jpg";
import Background from "../../Pictures/background.jpg";
import Under_Image_Menu from "../Under_Image_Menu";
import Lines from "../../Pictures/lines.svg";
import GetLabel from "../GetLabel";

const Home = ({ Data }) => {
  console.log(Data);
  const label1 = GetLabel(1);
  const label2 = GetLabel(2);
  const label3 = GetLabel(3);
  const label4 = GetLabel(4);
  const label5 = GetLabel(5);
  const Pershi = GetLabel(6);
  const Drugi = GetLabel(7);
  const Deserts = GetLabel(8);
  return (
    <>
      <div className={styles.Full_Home_Page}>
        <div className={styles.Text_Menu_Aligner}>
          <div className={styles.Test}>
            <img className={styles.Background_Image} src={Background}></img>
          </div>
          <div className={styles.Main_Text_Container}>
            <div className={styles.Main_Text}>
              <h1>{label1}</h1>
            </div>
            <div className={styles.Secondary_Text}>
              <h1>{label2}</h1>
            </div>
          </div>
          <div className={styles.Question_Box}>
            <h1>{label3}</h1>
          </div>
          <div className={styles.Lines_Container}>
            <img src={Lines} className={styles.Line}></img>
          </div>
          <div className={styles.Food_Menu}>
            <Food_Menu
              Food_Photo={First}
              Food_Name={Pershi}
              Link="/pershi-stravy"
            />
            <Food_Menu
              Food_Photo={Second}
              Food_Name={Drugi}
              Link="/drugi-stravy"
            />
            <Food_Menu
              Food_Photo={Desert}
              Food_Name={Deserts}
              Link="/deserty"
            />
          </div>
          <Under_Image_Menu Label={label4} />

          <Everyday_Recipes Data={Data} Label={label5} />
        </div>
      </div>
    </>
  );
};

export default Home;
