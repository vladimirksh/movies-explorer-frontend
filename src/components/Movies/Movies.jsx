import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/allMovies";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const loading = false;

function Movies() {
  return (
    <>
      <Header modification="header_client">
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList movies={moviesList} />
      <Footer />
      {loading && <Preloader />}
    </>
  );
}

export default Movies;
