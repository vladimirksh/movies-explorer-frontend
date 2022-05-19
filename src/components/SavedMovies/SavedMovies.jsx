import "./SavedMovies.css";
import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  searcedMovies,
  searcQuery,
  handleChangeSearcQuery,
  handleSearc,
  isCheckedBox,
  handlerCheckBox,
  isLoading,
  removeMovie,
}) {
  return (
    <>
      <Header modification="header_client">
        <Navigation />
      </Header>
      <SearchForm
        searcQuery={searcQuery}
        handleChangeSearcQuery={handleChangeSearcQuery}
        handleSearc={handleSearc}
        isCheckedBox={isCheckedBox}
        handlerCheckBox={handlerCheckBox}
      />
      <MoviesCardList
        searcedMovies={searcedMovies}
        searcQuery={searcQuery}
        removeMovie={removeMovie}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
