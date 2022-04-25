import "./Navigation.css";
import React, { useState, useEffect } from "react";
import ClientMenu from "../ClientMenu/ClientMenu";
import MobileClientMenu from "../MobileClientMenu/MobileClientMenu";

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function updateWindowSize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  });

  return <>{windowWidth > 768 ? <ClientMenu /> : <MobileClientMenu />}</>;
}

export default Navigation;
