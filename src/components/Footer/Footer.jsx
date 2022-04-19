import React from "react";
import "./Footer.css";
import { twitter, github, praktikum } from "../../utils/links";

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className="footer__container">
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      <ul className="footer__list">
        <li className="footer__list-item">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={praktikum}
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__list-item">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={github}
            className="footer__link"
          >
            Github
          </a>
        </li>
        <li className="footer__list-item">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={twitter}
            className="footer__link"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
