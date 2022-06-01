import "./Login.css";
import { withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Login({
  handleLogin,
  handleBlur,
  email,
  password,
  emailDirty,
  passwordDirty,
  emailError,
  passwordError,
  handleChangeEmail,
  handleChangePassword,
}) {
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError === "" && passwordError === "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailError, passwordError]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    handleLogin(email, password);
  }

  return (
    <>
      <Header modification="header_auth">
        <h2 className="header__title">Рады видеть!</h2>
      </Header>
      <Form
        handleSubmit={handleSubmit}
        textButton="Войти"
        caption="Еще не зарегестрированы?"
        pathLink="/signup"
        textLink="Регистрация"
        formValid={formValid}
      >
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="email">
            E-mail
            <input
              type="email"
              className="form__input"
              id="email"
              name="email"
              required={true}
              onChange={handleChangeEmail}
              onBlur={handleBlur}
              value={email}
              pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            />
            {emailDirty && emailError && (
              <span className="form__error">{emailError}</span>
            )}
          </label>

          <label className="form__label" htmlFor="password">
            Пароль
            <input
              type="password"
              className="form__input form__input_error"
              id="password"
              name="password"
              required={true}
              minLength={4}
              onChange={handleChangePassword}
              onBlur={handleBlur}
              value={password}
            />
            {passwordDirty && passwordError && (
              <span className="form__error">{passwordError}</span>
            )}
          </label>
        </fieldset>
      </Form>
    </>
  );
}

export default withRouter(Login);
