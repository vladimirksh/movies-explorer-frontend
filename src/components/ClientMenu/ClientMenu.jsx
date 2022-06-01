import "./ClientMenu.css";
import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.svg";
import iconBlack from "../../images/icon-black.svg";

function ClientMenu() {
  const location = window.location.pathname;
  const classNameButton = `menu__button ${
    location === "/main" ? "menu__button_green" : "menu__button_black"
  }`;
  const iconSrc = location === "/main" ? iconBlack : icon;

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            to="/movies"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/saved-movies"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Сохранённые Фильмы
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/profile">
            <button className={classNameButton}>
              <img className="menu__account-icon" src={iconSrc} alt="профиль" />
              Аккаунт
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ClientMenu;
