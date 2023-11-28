import React, { useState, useEffect } from "react";
import Recipe from "./Recipe_Component";
import Recipe_List from "./Recipes_List_Component";
import styles from "../Styles_Folder/Template_Category.module.css";
import GetLabel from "./GetLabel";

function SetCategory(recipes, category) {
  const array = recipes?.data || []; // Змінено з `recipes?. Data` на `recipes?.data`

  // console.log("cat", category);
  // console.log(array[0]?.attributes?.image?.data?.attributes?.url)
  return array.filter(
    (recipe) => recipe?.attributes?.category?.data?.id === category
  );
}
function filterRecipes(recipes, filterCriteria) {
  const sortedArray = [...recipes];
  switch (filterCriteria) {
    case "diff1":
      return sortedArray.filter(
        (recipe) => recipe?.attributes?.difficulty === "1"
      );
    case "diff2":
      return sortedArray.filter(
        (recipe) => recipe?.attributes?.difficulty === "2"
      );
    case "diff3":
      return sortedArray.filter(
        (recipe) => recipe?.attributes?.difficulty === "3"
      );
    case "diff4":
      return sortedArray.filter(
        (recipe) => recipe?.attributes?.difficulty === "4"
      );
    case "time30":
      return sortedArray.filter((recipe) => recipe?.attributes?.time < 30);
    case "time60":
      return sortedArray.filter((recipe) => recipe?.attributes?.time < 60);
    case "time120":
      return sortedArray.filter((recipe) => recipe?.attributes?.time < 120);

    default:
      return sortedArray;
  }
}

function sortRecipes(recipes, sortCriteria) {
  // Створюємо копію масиву, щоб уникнути модифікації оригінального масиву
  const sortedArray = [...recipes];
  console.log("sorting by" + sortCriteria);
  sortedArray.sort((a, b) => {
    switch (sortCriteria) {
      case "time1":
        return a?.attributes?.time - b?.attributes?.time;
      case "time2":
        return b?.attributes?.time - a?.attributes?.time;
      case "difficulty1":
        return a?.attributes?.difficulty - b?.attributes?.difficulty;
      case "difficulty2":
        return b?.attributes?.difficulty - a?.attributes?.difficulty;
      default:
        return 0;
    }
  });
  console.log(sortedArray);
  return sortedArray;
}

const FilteredRecipes = ({ Data, Category, Text }) => {
  const [filterCriteria, setFilterCriteria] = useState("default");
  const [sortCriteria, setSortCriteria] = useState("default");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [sortDropdown, setSortDropdown] = useState(0);
  const [filterDropdown, setFilterDropdown] = useState(0);

  useEffect(() => {
    // Reset filter and sort when category changes
    setFilterCriteria("default");
    setSortCriteria("default");
    setSortDropdown(0);
    setFilterDropdown(0);
  }, [Category]);

  useEffect(() => {
    const CatrgoryFood = SetCategory(Data, Category);
    // console.log("filted");
    // console.log(filtered);
    const sorted = sortRecipes(CatrgoryFood, sortCriteria);
    setFilteredRecipes(sorted);
    setFilterCriteria("default");
  }, [Data, Category, sortCriteria]);
  useEffect(() => {
    const CatrgoryFood = SetCategory(Data, Category);
    // console.log("filted");
    // console.log(filtered);

    const filtered = filterRecipes(CatrgoryFood, filterCriteria);
    setFilteredRecipes(filtered);
    setSortCriteria("default");
  }, [Data, Category, filterCriteria]);
  console.log(filterCriteria);
  const Food_Label = GetLabel(Text);
  return (
    <>
      <div className={styles.Buttons_Div}>
        <div className={styles.Sort_Dropdown_Container}>
          <button
            className={styles.Buttons}
            onClick={() =>
              setSortDropdown((prevSort) => (prevSort === 0 ? 1 : 0))
            }
          >
            {" "}
            Сортувати{" "}
          </button>
          <div
            className={`${styles.Dropdown_Div} ${
              sortDropdown === 1 ? styles.active : styles.None
            }`}
          >
            {" "}
            <div className={styles.Dropdown_Column}>
              <div className={styles.Label_Drop}>
                <h4>За складністю</h4>
              </div>
              <button
                onClick={() => setSortCriteria("difficulty2")}
                className={styles.Dropdown_Buttons}
              >
                Спадання
              </button>
              <button
                onClick={() => setSortCriteria("difficulty1")}
                className={styles.Dropdown_Buttons}
              >
                Зростання
              </button>
            </div>
            <div className={styles.Dropdown_Column}>
              <div className={styles.Label_Drop}>
                <h4>За Часом</h4>
              </div>
              <button
                onClick={() => setSortCriteria("time2")}
                className={styles.Dropdown_Buttons}
              >
                Спадання
              </button>
              <button
                onClick={() => setSortCriteria("time1")}
                className={styles.Dropdown_Buttons}
              >
                Зростання
              </button>
            </div>{" "}
          </div>
        </div>

        <div className={styles.Sort_Dropdown_Container}>
          <button
            className={styles.Buttons}
            onClick={() =>
              setFilterDropdown((prevSort) => (prevSort === 0 ? 1 : 0))
            }
          >
            {" "}
            Фільтрувати{" "}
          </button>{" "}
          <div
            className={`${styles.Dropdown_Div} ${
              filterDropdown === 1 ? styles.active : styles.None
            }`}
          >
            <div className={styles.Dropdown_Column}>
              <div className={styles.Label_Drop}>
                <h4>Складність</h4>
              </div>
              <button
                onClick={() => setFilterCriteria("diff1")}
                className={styles.Dropdown_Buttons}
              >
                Легко
              </button>
              <button
                onClick={() => setFilterCriteria("diff2")}
                className={styles.Dropdown_Buttons}
              >
                Середнє
              </button>
              <button
                onClick={() => setFilterCriteria("diff3")}
                className={styles.Dropdown_Buttons}
              >
                Помірно
              </button>
              <button
                onClick={() => setFilterCriteria("diff4")}
                className={styles.Dropdown_Buttons}
              >
                Складно
              </button>
            </div>
            <div className={styles.Dropdown_Column}>
              <div className={styles.Label_Drop}>
                <h4>Час</h4>
              </div>
              <button
                onClick={() => setFilterCriteria("time30")}
                className={styles.Dropdown_Buttons}
              >
                &lt;30 хв
              </button>
              <button
                onClick={() => setFilterCriteria("time60")}
                className={styles.Dropdown_Buttons}
              >
                &lt;60 хв
              </button>
              <button
                onClick={() => setFilterCriteria("time120")}
                className={styles.Dropdown_Buttons}
              >
                &lt;120 хв
              </button>
            </div>{" "}
          </div>
        </div>
      </div>

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
        Text={Food_Label}
        StyleName="Everyday_Text"
      />
    </>
  );
};

export default FilteredRecipes;
