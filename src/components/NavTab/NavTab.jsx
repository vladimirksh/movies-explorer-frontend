import "./NavTab.css";
import React from "react";

function NavTab() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li>
          <a href="#aboutproject" className="navigation__link">
            О проекте
          </a>
        </li>
        <li>
          <a href="#techs" className="navigation__link">
            Технологии
          </a>
        </li>
        <li>
          <a href="#aboutme" className="navigation__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
