import "./MoviesCardList.css";
import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  searcedMovies,
  isLoading,
  searcQuery,
  likeMovie,
  removeMovie,
  searcQueryLength,
}) {
  const location = window.location.pathname;
  const [renderedMoviesCount, setRenderedMoviesCount] = useState(0);
  const [showMoreMoviesCount, setShowMoreMoviesCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliceSercedMovies = searcedMovies.slice(0, renderedMoviesCount);

  let resizeTimeout = null;

  function updateWindowWidth() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => setWindowWidth(window.innerWidth), 1500);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  });

  useEffect(() => {
    if (location === "/movies") {
      if (windowWidth <= 480) {
        setRenderedMoviesCount(5);
        setShowMoreMoviesCount(2);
      } else if (windowWidth <= 768) {
        setRenderedMoviesCount(8);
        setShowMoreMoviesCount(2);
      } else if (windowWidth <= 1270) {
        setRenderedMoviesCount(9);
        setShowMoreMoviesCount(3);
      } else {
        setRenderedMoviesCount(12);
        setShowMoreMoviesCount(4);
      }
    } else {
      setRenderedMoviesCount(searcedMovies.length);
    }
  }, [windowWidth, location, searcedMovies.length]);

  function handleShowMoreMovies() {
    setRenderedMoviesCount(renderedMoviesCount + showMoreMoviesCount);
  }

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {searcQueryLength === 0 && (
        <p className="movies__find-error">Нужно ввести ключевое слово</p>
      )}
      {searcedMovies.length === 0 && (
        <p className="movies__find-error">Ничего не найдено</p>
      )}
      {!isLoading && searcQueryLength !== 0 && (
        <ul className="movies__list">
          {sliceSercedMovies.map((movie) => (
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

      {!isLoading &&
        searcedMovies.length > renderedMoviesCount &&
        searcQueryLength !== 0 && (
          <button
            className="movies__more-button"
            onClick={handleShowMoreMovies}
          >
            Еще
          </button>
        )}
    </section>
  );
}

export default MoviesCardList;
