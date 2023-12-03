import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Components_Folder/Header";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Components_Folder/Footer"
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>
);
