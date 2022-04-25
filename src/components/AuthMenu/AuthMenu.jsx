import "./AuthMenu.css";
import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
  return (
    <ul className="auth-nav">
      <li className="auth-nav__item">
        <Link to="/signup" className="auth-nav__link">
          Регистрация
        </Link>
      </li>
      <li className="auth-nav__item">
        <Link to="/signin">
          <button className="auth-nav__button">Войти</button>
        </Link>
      </li>
    </ul>
  );
}

export default AuthMenu;
