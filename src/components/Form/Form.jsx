import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({ children, caption = "", textButton, pathLink, textLink }) {
  return (
    <form className="form">
      {children}
      <button className="form__submit-button">{textButton}</button>
      <p className="form__caption">
        {caption}
        <Link to={pathLink} className="form__link">
          {textLink}
        </Link>
      </p>
    </form>
  );
}

export default Form;
