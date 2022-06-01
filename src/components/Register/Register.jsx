import "./Register.css";
import { withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Register({
  handleRegister,
  handleBlur,
  name,
  email,
  password,
  nameDirty,
  emailDirty,
  passwordDirty,
  nameError,
  emailError,
  passwordError,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
}) {
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError === "" && emailError === "" && passwordError === "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameError, emailError, passwordError]);

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(email, password, name);
  }

  return (
    <>
      <Header modification="header_auth">
        <h2 className="header__title">Добро пожаловать!</h2>
      </Header>
      <Form
        handleSubmit={handleSubmit}
        textButton="Зарегистрироваться"
        caption="Уже зарегистрированы?"
        pathLink="/signin"
        textLink="Войти"
        formValid={formValid}
      >
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="name">
            Имя
            <input
              className="form__input"
              id="name"
              name="name"
              required={true}
              minLength={2}
              maxLength={30}
              onChange={handleChangeName}
              onBlur={handleBlur}
              value={name}
              pattern="^[а-яА-ЯЁё\s\-]+$"
            />
            {nameDirty && nameError && (
              <span className="form__error">{nameError}</span>
            )}
          </label>

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

export default withRouter(Register);
