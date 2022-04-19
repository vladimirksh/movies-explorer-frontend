import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
    <section className="about" id="aboutproject">
      <h3 className="about__title">О проекте</h3>

      <div className="about__table-columns">
        <h3 className="about__table-subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about__table-subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about__table-text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about__table-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className="about__diagram-columns">
        <div className="about__diagram-subtitle about__diagram-subtitle_backend">
          1 неделя
        </div>
        <div className="about__diagram-subtitle">4 недели</div>
        <p className="about__diagram-text">Back-end</p>
        <p className="about__diagram-text">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
