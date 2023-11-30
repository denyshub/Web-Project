import React, { useState, useEffect } from "react";
import Everyday_Recipes from "./Everyday_recipes";
import Recipe from "./Recipe_Component";
import styles from "../Styles_Folder/Everyday_Recipes.module.css"
import Recipe_List from "./Recipes_List_Component";
const Search_Results = ({ Data, Name }) => {
  const array = Data?.data || [];
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    // Filter recipes based on the Name prop
    const filteredByName = Name
      ? array.filter((recipe) =>
          recipe?.attributes?.name.toLowerCase().includes(Name.toLowerCase())
        )
      : [];

    setFilteredRecipes(filteredByName);
  }, [Data, Name]);
  return (

      <div className={styles.Margin_Top}>
        <Recipe_List
          Category={filteredRecipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              Image={recipe?.attributes?.image?.data?.attributes?.url}
              Name={recipe?.attributes?.name}
              Time={recipe?.attributes?.time}
              Difficulty={recipe?.attributes?.difficulty}
            />
          ))}
          Text={`Резултати пошуку:`}
          StyleName="Everyday_Text_Search"
        />
      </div>

  );
};

export default Search_Results;
