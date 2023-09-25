import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Components_Folder/Header";
import { BrowserRouter } from "react-router-dom";
import {Recipes} from './state'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />, <App Data = {Recipes.Data}/>
  </BrowserRouter>
);
