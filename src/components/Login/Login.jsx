import "./Login.css";
import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Login() {
  return (
    <>
      <Header modification="header_auth">
        <h2 className="header__title">Рады видеть!</h2>
      </Header>
      <Form
        textButton="Войти"
        caption="Еще не зарегестрированы?"
        pathLink="/signup"
        textLink="Регистрация"
      >
        <fieldset className="form__fieldset">
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
          />
        </fieldset>
      </Form>
    </>
  );
}

export default Login;
