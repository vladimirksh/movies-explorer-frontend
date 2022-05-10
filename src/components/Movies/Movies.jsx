import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  searcedMovies,
  searcQuery,
  handleChangeSearcQuery,
  handleSearc,
  isCheckedBox,
  handlerCheckBox,
  isLoading,
  likeMovie,
  removeMovie,
  searcQueryLength,
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
        isLoading={isLoading}
        likeMovie={likeMovie}
        removeMovie={removeMovie}
        searcQueryLength={searcQueryLength}
      />
      <Footer />
    </>
  );
}

export default Movies;
