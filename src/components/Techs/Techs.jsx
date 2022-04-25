import "./Techs.css";
import React from "react";

const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

function Techs() {
  return (
    <section className="techs" id="techs">
      <h3 className="techs__title">Технологии</h3>
      <div className="techs__container">
        <h4 className="techs__container-title">7 Технологий</h4>
        <p className="techs__container-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          {techs.map((tech, index) => (
            <li className="techs__list-item" key={index}>
              <div className="techs__list-tech">{tech}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;
