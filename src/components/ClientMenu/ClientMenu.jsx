import "./ClientMenu.css";
import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.svg";

function ClientMenu() {
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
            <button className="menu__button">
              <img className="menu__account-icon" src={icon} alt="профиль" />
              Аккаунт
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ClientMenu;
