export const MOVIES_URL = 'https://api.nomoreparties.co';


const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function getResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const getMoviesData = () => {
  if (headers.authorization !== "Bearer null") {
    return fetch(`${MOVIES_URL}/beatfilm-movies`, {
      method: "GET",
      headers: headers,
    }).then((res) => {
      return getResponse(res);
    });
  }
};

