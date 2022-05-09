import "./MoviesCard.css";
import React, { useState, useContext, useEffect } from "react";
import { MOVIES_URL } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function MoviesCard({ movie, likeMovie, removeMovie }) {
  const durationHours = Math.floor(movie.duration / 60);
  const durationMinutes = movie.duration - durationHours * 60;
  const durationString = durationHours
    ? `${durationHours}ч ${durationMinutes}м`
    : `${durationMinutes}мин`;

  const { userSavedMovies } = useContext(CurrentUserContext);
  let userSavedMoviesId = userSavedMovies.map((i) => i.movieId);
  const [isSaved, setIsSaved] = useState();

  function handleClick() {
    window.open(movie.trailerLink);
  }

  function handelLikeMovie() {
    likeMovie(movie);
  }

  function handelRemoveMovie() {
    removeMovie(movie);
  }

  useEffect(() => {
    if (userSavedMoviesId && userSavedMoviesId.includes(movie.id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [userSavedMoviesId, movie.id]);

  return (
    <li className="card">
      <img
        className="card__image"
        src={movie.owner ? movie.image : MOVIES_URL + movie.image.url}
        alt={movie.nameRU}
        onClick={handleClick}
      />
      <div className="card__signature">
        <p className="card__title">{movie.nameRU}</p>

        {!movie.owner && !isSaved && (
          <button className="card__button-like" onClick={handelLikeMovie} />
        )}

        {!movie.owner && isSaved && (
          <button
            className="card__button-like_active"
            onClick={handelRemoveMovie}
          />
        )}

        {movie.owner && (
          <button className="card__button_remove" onClick={handelRemoveMovie} />
        )}
      </div>
      <p className="card__duration">{durationString}</p>
    </li>
  );
}

export default MoviesCard;
