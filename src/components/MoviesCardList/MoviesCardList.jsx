import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isRemovable }) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies.map((movie, index) => (
          <MoviesCard movie={movie} key={index} isRemovable={isRemovable} />
        ))}
      </ul>
      {movies.length > 8 && (
        <button className="movies__more-button">Еще</button>
      )}
    </section>
  );
}

export default MoviesCardList;
