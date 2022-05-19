import "./Main.css";
import React from "react";
import Header from "../Header/Header";
import AuthMenu from "../AuthMenu/AuthMenu";
import Navigation from "../Navigation/Navigation";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ loggedIn }) {
  return (
    <>
      <Header modification="header_main">
        {loggedIn ? <Navigation /> : <AuthMenu />}
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
