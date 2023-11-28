import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components_Folder/Full_Pages/Home";
import Category_Page from "./Components_Folder/Template_Catrgory_Page";
import Recipe_Page from "./Components_Folder/Recipe_Page";
import Header from "./Components_Folder/Header";
import Contacts from "./Components_Folder/Contacts";
import transliterateUkrainianToLatin from "./Components_Folder/Tramsliteration";
import useFetch from "./Components_Folder/API_Fetch";
import Search_Results from "./Components_Folder/Search_Results";
// http://localhost:1337/api/recipes?populate=*?sort[0]=name:acs
function App() {
  const [query, setQuery] = useState(''); 
console.log(query)
  const apiUrl = "http://localhost:1337/api/recipes?populate=*";

  const { loading, error, data } = useFetch(apiUrl);

  useEffect(() => {
    if (data) {
      console.log("Отримані дані з API:", data);
 
    }

    if (error) {
      console.error("Помилка отримання даних з API:", error);
    }
  }, [data, error]);

  return (
    <>
      <Header query={query} setQuery = {setQuery}/>
      <Routes>
        <Route path="/" element={<Home Data={data} />} />
        <Route
          path="/pershi-stravy"
          element={<Category_Page Data={data} Category={1} Text={6} />}
        />
        <Route
          path="/drugi-stravy"
          element={<Category_Page Data={data} Category={2} Text={7} />}
        />
        <Route
          path="/deserty"
          element={<Category_Page Data={data} Category={3} Text={8} />}
        />
        <Route
          path="/salaty"
          element={<Category_Page Data={data} Category={5} Text={13} />}
        />
        <Route
          path="/sousy"
          element={<Category_Page Data={data} Category={8} Text={9} />}
        />
         <Route
          path="/search-results"
          element={<Search_Results Data={data} Name = {query} />}
        />
        <Route path="/contacty" element={<Contacts />} />
        {data &&
          data.data.map((Recipe) => (
            <Route
              key={Recipe.id}
              exact
              path={
                "/recipe/" +
                transliterateUkrainianToLatin(Recipe.attributes.name)
              }
              element={
                <Recipe_Page
                  id={Recipe?.attributes?.key}
                  Name={Recipe?.attributes?.name}
                  Image={Recipe?.attributes?.image?.data?.attributes?.url}
                  Ingredients={Recipe?.attributes?.ingridients}
                  Steps={Recipe?.attributes?.steps}
                  Additional={Recipe?.attributes?.additional}
                />
              }
            />
          ))}
      </Routes>
    </>
  );
}

export default App;
