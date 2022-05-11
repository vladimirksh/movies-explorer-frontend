import { MOVIES_URL } from "./MoviesApi";
export const BASE_URL = 'api.movies.vkashankov.nomoredomains.xyz';

function getResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const register = ( email, password, name ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name
    })
  })
  .then((res) => {
    return getResponse(res)
  })
};

export const authorize = ( email, password ) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    return getResponse(res)
  })
};

export const getUserData = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }})
    .then((res) => {
      return getResponse(res)
    })
}

export const patchUserData = (email, name, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
      name: name
    })
})
    .then((res) => {
      return getResponse(res)
    })
}

export const getSavedMovie = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
})
    .then((res) => {
      return getResponse(res)
    })
}

export const postMovie = (movie, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_URL + movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `${MOVIES_URL + movie.image.url}`,
      movieId: movie.id,
    })
})
    .then((res) => {
      return getResponse(res)
    })
}

export const deleteMovie = (filmId, token) => {
  return fetch(`${BASE_URL}/movies/${filmId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
})
    .then((res) => {
      return getResponse(res)
    })
}