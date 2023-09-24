import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles_Folder/Main_Food_Menu.module.css"
const Food_Menu = (props) => {
  return <div className={styles.Photo_Text_Container}>
   
    <Link to = {props.Link} className={styles.Food_Text}>{props.Food_Name}<img src = {props.Food_Photo}></img></Link>
  </div>
}

export default Food_Menu