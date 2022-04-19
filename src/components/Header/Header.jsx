import "./Header.css";
import React from "react";
import Logo from "../Logo/Logo";

function Header({ children, modification = "" }) {
  return (
    <header className={`header ${modification}`}>
      <Logo />
      {children}
    </header>
  );
}

export default Header;
