import React, { useState, useEffect } from "react";
import styles from "../Styles_Folder/Header.module.css";
import Logo from "../Pictures/stir-fry.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import GetLabel from "./GetLabel";
const Header = ({ setQuery }) => {
  const Main = GetLabel(17);
  const Contacts = GetLabel(18);
  const Pershi = GetLabel(6);
  const Drugi = GetLabel(7);
  const Deserts = GetLabel(8);
  const Logo1 = GetLabel(22);
  const Logo2 = GetLabel(23);
  let navigate = useNavigate();
  let location = useLocation();
  const [query, setQuery1] = useState("");

  useEffect(() => {
    setSearch(0);
    setNavbar(0)
  }, [location]);
  const handleSearch = () => {
    // Pass the 'query' value to App.js
    setQuery(query);
    query ? navigate("/search-results") : setQuery(null);
    setQuery1("");
  };
  const [search, setSearch] = useState(0);
  const [navbar, setNavbar] = useState(0);

  return (
    <>
      <div className={styles.Header_Background}>
        <div className={styles.Logo_Container}>
          <img src={Logo} className={styles.Logo_Style}></img>
          <div className={styles.Logo_Text_Container}>
            <h1 className={styles.Logo_Text_Main}>{Logo1}</h1>
            <h2 className={styles.Logo_Text_Down}>{Logo2}</h2>
          </div>
        </div>
        <div className={styles.Buttons_Container}>
          <ul className={styles.Nav_Buttons}>
            <li>
              <NavLink
                to="/"
                className={
                  location.pathname === "/"
                    ? styles.ActiveLink
                    : styles.Link_Nav
                }
              >
                {Main}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pershi-stravy"
                className={
                  location.pathname === "/pershi-stravy"
                    ? styles.ActiveLink
                    : styles.Link_Nav
                }
              >
                {Pershi}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/drugi-stravy"
                className={
                  location.pathname === "/drugi-stravy"
                    ? styles.ActiveLink
                    : styles.Link_Nav
                }
              >
                {Drugi}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deserty"
                className={
                  location.pathname === "/deserty"
                    ? styles.ActiveLink
                    : styles.Link_Nav
                }
              >
                {Deserts}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.Contact_Search_Box}>
          <div className={styles.Contact_Container}>
            {" "}
            <NavLink
              className={
                location.pathname === "/contacty"
                  ? styles.ActiveLink
                  : styles.Link_Nav
              }
              to="/contacty"
            >
              {Contacts}
            </NavLink>
          </div>
          <div
            className={`${styles.Search_Container} ${
              search === 1 ? styles.active : styles.None
            }`}
          >
            <input
              type="text"
              value={query}
              placeholder="Пошук..."
              onKeyPress={(e) => {
                if (e.key === "Enter" && query) {
                  handleSearch();
                }
              }}
              onChange={(e) => setQuery1(e.target.value)}
              className={styles.Input_Box}
            />
          </div>
          <div className={styles.Search_Box}>
            {" "}
            <button
              className={styles.SearchButton}
              onClick={() => {
                search ? setSearch(0) : setSearch(1);
              }}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div className={styles.MobileNav}>
            <button
              onClick={() => {
                setNavbar(navbar ? 0 : 1);
              }}
              className={styles.Mob_Nav_Button}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.Navbar_Mobile} ${
          navbar === 1 ? styles.active : styles.None
        }`}
      >
        <div className={styles.Mob_Nav_Line}>
          <NavLink
            className={
              location.pathname === "/"
                ? styles.ActiveLink
                : styles.Link_Nav_Mob
            }
            to="/"
          >
            {Main}
          </NavLink>
        </div>
        <div className={styles.Mob_Nav_Line}>
          <NavLink
            className={
              location.pathname === "/pershi-stravy"
                ? styles.ActiveLink
                : styles.Link_Nav_Mob
            }
            to="/pershi-stravy"
          >
            {Pershi}
          </NavLink>
        </div>
        <div className={styles.Mob_Nav_Line}>
          <NavLink
            className={
              location.pathname === "/drugi-stravy"
                ? styles.ActiveLink
                : styles.Link_Nav_Mob
            }
            to="/drugi-stravy"
          >
            {Drugi}
          </NavLink>
        </div>
        <div className={styles.Mob_Nav_Line}>
          <NavLink
            className={
              location.pathname === "/deserty"
                ? styles.ActiveLink
                : styles.Link_Nav_Mob
            }
            to="/deserty"
          >
            {Deserts}
          </NavLink>
        </div>
        <div className={styles.Mob_Nav_Line}>
          <NavLink
            className={
              location.pathname === "/contacty"
                ? styles.ActiveLink
                : styles.Link_Nav_Mob
            }
            to="/contacty"
          >
            {Contacts}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
