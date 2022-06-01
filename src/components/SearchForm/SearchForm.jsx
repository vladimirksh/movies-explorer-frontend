import React from "react";
import "./SearchForm.css";
import iconSearch from "../../images/iconSearch.svg";
import find from "../../images/find.svg";

function SearchForm({
  searcQuery,
  handleChangeSearcQuery,
  handleSearc,
  isCheckedBox,
  handlerCheckBox,
}) {
  return (
    <form className="search-form" onSubmit={handleSearc}>
      <div className="search-form__container">
        <div className="search-form__input-container">
          <img
            src={iconSearch}
            alt="Лупа"
            className="search-form__input-icon"
          />
          <input
            className="search-form__input"
            onChange={handleChangeSearcQuery}
            value={searcQuery}
            type="text"
            placeholder="Фильм"
          />
          <button className="search-form__button">
            <img alt="поиск" src={find} className="search-form__find-img" />
          </button>
        </div>
        <div className="search-form__checkbox-container">
          <input
            className="search-form__checkbox"
            type="checkbox"
            checked={isCheckedBox}
            onChange={handlerCheckBox}
          />
          <p className="search-form__checkbox-text">Короткометражки</p>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
