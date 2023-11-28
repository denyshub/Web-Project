import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles_Folder/Contacts.module.css";
import Line from "../Pictures/Line 2.svg";
import Line1 from "../Pictures/Line 3.svg";
import GetLabel from "./GetLabel";
const Contacts = () => {
  const Label1 = GetLabel(14)
  const Label2 = GetLabel(15)
  const Label3 = GetLabel(16)
  return (
    <div className={styles.Page_Aligner}>
      <div className={styles.Suggest_Text}>
        <h1>{Label1}</h1>
        <h2>{Label2}</h2>
       
       
      </div>
      <div className={styles.Div}>
        <div className={styles.Line_Aligner}>
          <div className={styles.Socials_Text}>
            <h2> {Label3}</h2>
          </div>
        </div>
        <div className={styles.Icons_Menu}>
          <div className={styles.Border_Socials}>
            <NavLink to = '/' className={styles.Soicals_Link}> <ion-icon name="logo-instagram"></ion-icon></NavLink>
            <NavLink to = '/' className={styles.Soicals_Link}> <ion-icon name="logo-facebook"></ion-icon></NavLink>
            <NavLink to = '/' className={styles.Soicals_Link}> <ion-icon name="mail-outline"></ion-icon></NavLink>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
