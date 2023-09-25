import React from "react";
import styles from "../Styles_Folder/Header.module.css";
import Logo from "../Pictures/stir-fry.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  return (
    <>
      <div className={styles.Header_Background}>
        <div className={styles.Logo_Container}>
          <img src={Logo} className={styles.Logo_Style}></img>
          <div className={styles.Logo_Text_Container}>
            <h1 className={styles.Logo_Text_Main}>Рецепти</h1>
            <h2 className={styles.Logo_Text_Down}>на кожен день</h2>
          </div>
        </div>
        <div className={styles.Buttons_Container}>
          <ul className={styles.Nav_Buttons}>
            <li>
             <NavLink to = '/' className={location.pathname === "/" ? styles.ActiveLink : styles.Link_Nav} >Головна</NavLink>
            </li>
            <li>
            <NavLink to = '/pershi-stravy'className={location.pathname === "/pershi-stravy" ? styles.ActiveLink : styles.Link_Nav}  >Перші страви</NavLink>
            </li>
            <li>
            <NavLink to = '/drugi-stravy'className={location.pathname === "/drugi-stravy" ? styles.ActiveLink : styles.Link_Nav}  >Другі страви</NavLink>
            </li>
            <li>
            <NavLink to = '/deserty' className={location.pathname === "/deserty" ? styles.ActiveLink : styles.Link_Nav}>Десерти</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.Contact_Search_Box}>
          <div className={styles.Contact_Container}>
            {" "}
            <NavLink className={location.pathname === "/contacty" ? styles.ActiveLink : styles.Link_Nav} to = '/contacty'>Контакти</NavLink>
          </div>
          <div className={styles.Search_Box}>
            {" "}
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
