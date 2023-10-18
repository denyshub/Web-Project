import React from "react";
import "./App.css";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./Components_Folder/Full_Pages/Home";
import Pershi from "./Components_Folder/Pershi";
import Drugi from "./Components_Folder/Drugi";
import Deserty from "./Components_Folder/Deserts";
import Contacts from "./Components_Folder/Contacts";
import Recipe_Page from "./Components_Folder/Recipe_Page";
import transliterateUkrainianToLatin from "./Components_Folder/Tramsliteration";
import Header from "./Components_Folder/Header";
import Category_Page from "./Components_Folder/Template_Catrgory_Page";
import Footer from "./Components_Folder/Footer";
function App(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home Data={props.Data} />}></Route>
        <Route
          path="/pershi-stravy"
          element={
            <Category_Page
              Data={props.Data}
              Category="Перші страви"
              Text="Перші страви"
            />
          }
        ></Route>
        <Route
          path="/drugi-stravy"
          element={
            <Category_Page
              Data={props.Data}
              Category="Другі страви"
              Text="Другі страви"
            />
          }
        ></Route>
        <Route
          path="/deserty"
          element={
            <Category_Page
              Data={props.Data}
              Category="Десерти"
              Text="Десерти"
            />
          }
        ></Route>
         <Route
          path="/salaty"
          element={
            <Category_Page
              Data={props.Data}
              Category="Салати"
              Text="Салати"
            />
          }
        ></Route>
         <Route
          path="/sousy"
          element={
            <Category_Page
              Data={props.Data}
              Category="Соуси"
              Text="Соуси"
            />
          }
        ></Route>
        <Route path="/contacty" element={<Recipe_Page />}></Route>
        {props.Data.map((Recipe) => (
          <Route
            exact
            path={"/recipe/" + transliterateUkrainianToLatin(Recipe.name)}
            element={
              <Recipe_Page
                id={Recipe.id}
                Name={Recipe.name}
                Image={Recipe.image}
                Ingredients={Recipe.ingredients}
                Steps={Recipe.steps}
                Additional={Recipe.additional}
              />
            }
          />
        ))}
      </Routes>
      
    </>
  );
}

export default App;
