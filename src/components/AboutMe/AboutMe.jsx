import "./AboutMe.css";
import React from "react";
import photo from "../../images/photo.jpg";
import { twitter, github } from "../../utils/links";

function AboutMe({ children }) {
  return (
    <section className="about-me" id="aboutme">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__columns">
        <div className="about-me__info">
          <div className="about-me__text-info">
            <h3 className="about-me__name">Владимир</h3>
            <p className="about-me__report">Фронтенд-разработчик, 26 лет</p>
            <p className="about-me__description">
              Я родился и живу в Москве, учился в МГУПП на кафедре «Технологии
              бродильных производств и виноделие». Свободное время предпочитаю
              проводить за изучением английского языка или игре на гитаре. Год
              назад начал кодить. Раньше работал в пищевой промышленности.
              Прошел курс по веб-разработке в Яндекс.Практикум для
              трудоустройства в новой сфере деятельности.
            </p>
          </div>
          <ul className="about-me__list">
            <li className="about-me__list-item">
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="about-me__link"
                href={twitter}
              >
                Twitter
              </a>
            </li>
            <li className="about-me__list-item">
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="about-me__link"
                href={github}
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <img className="about-me__image" src={photo} alt="Фото студента" />
      </div>
      {children}
    </section>
  );
}

export default AboutMe;
