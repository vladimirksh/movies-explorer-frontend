import React from "react";
import "./ProfileForm.css";
import { NavLink } from "react-router-dom";

function ProfileForm() {
  const userName = "Владимир";

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${userName}`}</h2>
      <form className="profile__form">
        <div className="profile__container profile__container_name">
          <label className="profile__label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            id="name"
            defaultValue={userName}
            required
          />
        </div>
        <div className="profile__container profile__container_email">
          <label className="profile__label" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            className="profile__input"
            id="email"
            defaultValue="pochta@yandex.ru"
            required
          />
        </div>
      </form>
      <div className="profile__settings">
        <button className="profile__button">Редактировать</button>
        <NavLink to="/signin" className="profile__link">
          Выйти из аккаунта
        </NavLink>
      </div>
    </section>
  );
}

export default ProfileForm;
