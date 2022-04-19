import React from "react";
import "./SearchForm.css";
import iconSearch from "../../images/iconSearch.svg";
import find from "../../images/find.svg";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <div className="search-form__input-container">
          <img
            src={iconSearch}
            alt="Лупа"
            className="search-form__input-icon"
          />
          <input className="search-form__input" placeholder="Фильм" required />
          <button className="search-form__button">
            <img alt="поиск" src={find} className="search-form__find-img" />
          </button>
        </div>
        <div className="search-form__checkbox-container">
          <input class="search-form__checkbox" type="checkbox" />
          <p className="search-form__checkbox-text">Короткометражки</p>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
