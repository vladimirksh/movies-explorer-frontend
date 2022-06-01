import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link to="/main" className="header__logo">
      <img alt="Логотип" src={logo} />
    </Link>
  );
}

export default Logo;
