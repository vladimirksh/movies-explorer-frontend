import "./Register.css";
import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Register() {
  return (
    <>
      <Header modification="header_auth">
        <h2 className="header__title">Добро пожаловать!</h2>
      </Header>
      <Form
        textButton="Зарегистрироваться"
        caption="Уже зарегистрированы?"
        pathLink="/signin"
        textLink="Войти"
      >
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            className="form__input"
            id="name"
            required
            minLength={2}
            maxLength={30}
            defaultValue="Владимир"
          />
          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            className="form__input"
            id="email"
            required
            defaultValue="pochta@yandex.ru"
          />
          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            className="form__input form__input_error"
            id="password"
            required
            defaultValue="12345"
          />
          <span className="form__error">Что-то пошло не так</span>
        </fieldset>
      </Form>
    </>
  );
}

export default Register;
