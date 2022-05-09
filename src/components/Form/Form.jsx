import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Form.css";

function Form({
  children,
  caption = "",
  textButton,
  pathLink,
  textLink,
  handleSubmit,
  formValid,
}) {
  const buttonClassName = `form__submit-button ${
    formValid ? "" : "form__submit-button_inactive"
  }`;

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
      <button className={buttonClassName}>{textButton}</button>
      <p className="form__caption">
        {caption}
        <Link to={pathLink} className="form__link">
          {textLink}
        </Link>
      </p>
    </form>
  );
}

export default withRouter(Form);
