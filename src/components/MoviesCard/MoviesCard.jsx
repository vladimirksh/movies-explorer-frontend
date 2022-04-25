import "./MoviesCard.css";
import React from "react";

function MoviesCard({ movie, isRemovable = false }) {
  return (
    <li className="card">
      <img className="card__image" src={movie.image} alt={movie.title} />
      <div className="card__signature">
        <p className="card__title">{movie.title}</p>
        {!movie.isSaved && <button className="card__button_save" />}
        {movie.isSaved && isRemovable && (
          <button className="card__button_remove" />
        )}
        {movie.isSaved && !isRemovable && (
          <button className="card__button-like" />
        )}
      </div>
      <p className="card__duration">{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
