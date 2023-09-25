import React from "react";
import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home  from "./Components_Folder/Home";
import Pershi from "./Components_Folder/Pershi";
import Drugi from "./Components_Folder/Drugi";
import Deserty from "./Components_Folder/Deserts"
import Contacts from "./Components_Folder/Contacts";
import Recipe_Page from "./Components_Folder/Recipe_Page";
import transliterateUkrainianToLatin from "./Components_Folder/Tramsliteration";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Home Data = {props.Data}/>}></Route>
      <Route path="/pershi-stravy" element={<Pershi />}></Route>
      <Route path="/drugi-stravy" element={<Drugi />}></Route>
      <Route path="/deserty" element={<Deserty />}></Route>
      <Route path="/contacty" element={<Recipe_Page />}></Route>
      {props.Data.map((Recipe) => (
          <Route
            exact path={transliterateUkrainianToLatin(Recipe.name)}
            element={<Recipe_Page  id = {Recipe.id} Name = {Recipe.name} Image = {Recipe.image} Ingredients = {Recipe.ingredients} Steps ={Recipe.steps} />}
          />
        ))}
    </Routes>
  );
}

export default App;
