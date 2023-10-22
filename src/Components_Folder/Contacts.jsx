import React from "react";
import styles from "../Styles_Folder/Contacts.module.css";
import Line from "../Pictures/Line 2.svg";
import Line1 from "../Pictures/Line 3.svg";
const Contacts = () => {
  return (
    <div className={styles.Page_Aligner}>
      <div className={styles.Suggest_Text}>
        <h1>Маєш пропозиції чи питання?</h1>
        <h2>Напиши нам!</h2>
       
        <img src ={Line1} className={styles.Lines1} ></img>
      </div>
      <div className={styles.Div}>
        <div className={styles.Line_Aligner}>
          <div className={styles.Socials_Text}>
            <h2> Наші контакти:</h2>
          </div>
        </div>
        <div className={styles.Icons_Menu}>
          <div className={styles.Border_Socials}>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="mail-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
