import "./Main.css";
import React from "react";
import Header from "../Header/Header";
import AuthMenu from "../AuthMenu/AuthMenu";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header modification="header_main">
        <AuthMenu />
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe>
        <Portfolio />
      </AboutMe>
      <Footer />
    </>
  );
}

export default Main;
