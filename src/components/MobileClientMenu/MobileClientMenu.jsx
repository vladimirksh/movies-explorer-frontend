import "./MobileClientMenu.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.svg";

function MobileClientMenu() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div
        className="burger-button"
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <span
          className={
            menuActive
              ? "burger-button__top-line_active"
              : "burger-button__top-line"
          }
        />
        <span
          className={
            menuActive
              ? "burger-button__mid-line_active"
              : "burger-button__mid-line"
          }
        />
        <span
          className={
            menuActive
              ? "burger-button__bot-line_active"
              : "burger-button__bot-line"
          }
        />
      </div>
      <div className={menuActive ? "mobile-menu_active" : "mobile-menu"}>
        <div
          className="mobile-menu__blur"
          onClick={() => {
            setMenuActive(false);
          }}
        ></div>
        <div className="mobile-menu__container">
          <nav className="mobile-menu__nav">
            <li className="mobile-menu__nav-item">
              <NavLink
                to="/"
                exact
                className="mobile-menu__nav-link"
                activeClassName="mobile-menu__nav-link_active"
              >
                Главная
              </NavLink>
            </li>
            <li className="mobile-menu__nav-item">
              <NavLink
                to="/movies"
                className="mobile-menu__nav-link"
                activeClassName="mobile-menu__nav-link_active"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="mobile-menu__nav-item">
              <NavLink
                to="/saved-movies"
                className="mobile-menu__nav-link"
                activeClassName="mobile-menu__nav-link_active"
              >
                Сохранённые Фильмы
              </NavLink>
            </li>
          </nav>
          <NavLink to="/profile">
            <button className="menu__button">
              <img className="menu__account-icon" src={icon} alt="профиль" />
              Аккаунт
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileClientMenu;
