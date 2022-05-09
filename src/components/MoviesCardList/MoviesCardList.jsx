import "./MoviesCardList.css";
import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  searcedMovies,
  isLoading,
  searcQuery = true,
  likeMovie,
  removeMovie,
}) {
  let [count, setCount] = useState(4);

  const newMov = searcedMovies.slice(0, count);

  function handelClick() {
    setCount((count += 4));
  }

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {!searcQuery && (
        <p className="movies__find-error">Нужно ввести ключевое слово</p>
      )}
      {searcedMovies.length === 0 && (
        <p className="movies__find-error">Ничего не найдено</p>
      )}
      {!isLoading && (
        <ul className="movies__list">
          {newMov.map((movie) => (
            <MoviesCard
              movie={movie}
              searcedMovies={searcedMovies}
              key={movie.owner ? movie._id : movie.id}
              likeMovie={likeMovie}
              removeMovie={removeMovie}
            />
          ))}
        </ul>
      )}

      {newMov.length > 3 && !isLoading && (
        <button className="movies__more-button" onClick={handelClick}>
          Еще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
