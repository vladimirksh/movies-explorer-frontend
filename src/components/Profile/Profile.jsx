import "./Profile.css";
import React, { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({ signOut, handleUpdateUser }) {
  const { currentUser, userSavedMovies } = useContext(CurrentUserContext);
  const [newName, setNewName] = useState(currentUser.name);
  const [newEmail, setNewEmail] = useState(currentUser.email);
  const [formValid, setFormValid] = useState(false);
  const buttonClassName = `profile__button ${
    formValid ? "" : "profile__button_inactive"
  }`;

  function changeNewName(e) {
    setNewName(e.target.value);
  }

  function changeNewEmail(e) {
    setNewEmail(e.target.value);
  }

  useEffect(() => {
    if (
      (newName !== currentUser.name && newName.length >= 2) ||
      newEmail !== currentUser.email
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [newName, newEmail, currentUser.name, currentUser.email]);

  function handleSubmit() {
    if (formValid) {
      handleUpdateUser(newEmail, newName);
    }
  }

  return (
    <>
      <Header modification="header_client">
        <Navigation />
      </Header>
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
        <form className="profile__form">
          <div className="profile__container profile__container_name">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__input"
              id="name"
              defaultValue={currentUser.name}
              required
              onChange={changeNewName}
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
              defaultValue={currentUser.email}
              required
              onChange={changeNewEmail}
            />
          </div>
        </form>
        <div className="profile__settings">
          <button className={buttonClassName} onClick={handleSubmit}>
            Редактировать
          </button>
          <button className="profile__button" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
