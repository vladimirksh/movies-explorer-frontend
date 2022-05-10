import React, { useState, useEffect } from "react";
import './App.css';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import Main from "../Main/Main";
import NoFound from "../NoFound/NoFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { register, authorize, getUserData, patchUserData, postMovie, getSavedMovie, deleteMovie } from "../../utils/MainApi.js";
import { getMoviesData } from "../../utils/MoviesApi.js";
import { CurrentUserContext } from "../../context/CurrentUserContext";


function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userSavedMovies, setUserSavedMovies] = useState([])
  const [searcedSaveMovies, setSearcedSaveMovies] = useState(userSavedMovies);

  //массив фильмов 
  const [movies, setMovies] = useState([]);
  
  //поисковый запрос и чебокс кароткометражек
  const [searcQuery, setSearcQuery] = useState("");
  const [searcQueryLength, setSearcQueryLength] = useState(null);
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [searcedMovies, setSearcedMovies] = useState(movies);

  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [message, setMessage] = useState(false);

  //состояния для имени логина и пароля
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //состояния для определения прикосновения инпутов
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  //состояние для ошибок
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  //отслеживаем изменения в поисковике
  useEffect(() => {
    setSearcQuery(searcQuery);
  }, [searcQuery]);
  
  function handleChangeSearcQuery (e) {
    setSearcQuery(e.target.value);
  };
  //отслеживаем изменения в поисковике

  //отслеживаем изменения в чекбоксе
  useEffect(() => {
    setIsCheckedBox(isCheckedBox);
  }, [isCheckedBox]);

  function handlerCheckBox() {
    setIsCheckedBox(!isCheckedBox);
  }
  //отслеживаем изменения в чекбоксе

  //Глобальный поиск
  useEffect(() => {
    setSearcedMovies(movies);
  }, [movies]);


  function handleSearc (e) {
    e.preventDefault();
    handleSeacrcMovies(movies, setSearcedMovies)
    setSearcQueryLength(searcQueryLength)
  };
  //Глобальный поиск

  //Поиск по сохраненым фильмам
  useEffect(() => {
    setSearcedSaveMovies(userSavedMovies);
  }, [userSavedMovies]);
  
  function handleSearcSavedMovie (e) {
    e.preventDefault();
    handleSeacrcMovies(userSavedMovies, setSearcedSaveMovies)
    setSearcQueryLength(searcQueryLength)
  };
  //Поиск по сохраненым фильмам

  //поиск
  async function handleSeacrcMovies (movies, filteredMovies) {
    setIsLoading(true);
    try {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          isCheckedBox ? 
          filteredMovies(movies.filter( movie => 
            (movie.duration <= 40) &&
            (movie.nameRU.toLowerCase().includes(searcQuery.toLowerCase()))
             && (movie.nameRU.toLowerCase().includes(searcQuery.toLowerCase()))
            ))
          :
          filteredMovies(movies.filter( movie => 
            (movie.nameRU.toLowerCase().includes(searcQuery.toLowerCase()))
             && (movie.nameRU.toLowerCase().includes(searcQuery.toLowerCase()))
            ))), 1000)
      });
      await promise;
      setIsLoading(false);
      setSearcQueryLength(searcQuery.length)
    } catch(err) {
      console.log(err);
    }
  }
  //поиск

    //получаем все фильмы и сохраняем
    useEffect(() => {
      getMoviesData()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          setMovies(JSON.parse(localStorage.getItem("movies")));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
          localStorage.removeItem("movies");
        });
    }, [currentUser]);
    //получаем все фильмы и сохраняем

  useEffect(() => {
    handleTokenCheck()
  }, []);

  function handleTokenCheck() {
    return new Promise((resolve, reject) => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        resolve(
          Promise.all([
            getUserData(jwt),
            getSavedMovie(jwt),
          ])
            .then((values) => {
              setCurrentUser(values[0]);
              setUserSavedMovies(values[1]);
            })
            .then((res) => {
              setLoggedIn(true);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      } else {
        reject("JWT is not actual");
      }
    });
  };

  function closeAllPopups() {
    setIsInfoTooltipOpen(false);
  };

  //меняем состояние посещения инпутов
  function handleBlur(e) {
    switch (e.target.name) {
      case `name`:
        setNameDirty(true);
        break;
      case `email`:
        setEmailDirty(true);
        break;
      case `password`:
        setPasswordDirty(true);
        break;
      default:// do nothing;
    }
  };
  //меняем состояние посещения инпутов

  //меняем состояние ошибок под инпутами
  function handleChangeName(e) {
    setName(e.target.value);
    if (!e.target.validity.valid) {
      setNameError(e.target.validationMessage);
    } else {
      setNameError("");
    }
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    if (!e.target.validity.valid) {
      setEmailError(e.target.validationMessage);
    } else {
      setEmailError("");
    }
  };

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (!e.target.validity.valid) {
      setPasswordError(e.target.validationMessage);
    } else {
      setPasswordError("");
    }
  };
  //меняем состояние ошибок под инпутами

  //регистрация авторизация выход
  function handleRegister( email, password, name ) {
    register( email, password, name )
      .then((data) => {
        setIsInfoTooltipOpen(true);
        if (data) {
          handleLogin(email, password);
          setMessage(true);
          setLoggedIn(true);
        }
      })
      .catch(() => {
        setMessage(false);
        setIsInfoTooltipOpen(true);
      });
  };

  function handleLogin( email, password ) {
    authorize( email, password )
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          history.push("/movies");
          Promise.all([
            getUserData(data.token),
            getSavedMovie(data.token),
          ])
            .then((values) => {
              console.log(values)
              setCurrentUser(values[0]);
              setUserSavedMovies(values[1]);
            })
            .then((res) => {
              setLoggedIn(true);
              history.push("/movies");
            })
            .catch((err) => {
              console.log(err);
            })
          return data;
        }
      })
      .catch((err) => console.log(err));
  };

  function signOut() {
    localStorage.removeItem("jwt");
    history.push("/signin");
  };
  //регистрация авторизация выход

  //обновление имени или почты пользователя
  function handleUpdateUser(email, name ) {
    const jwt = localStorage.getItem("jwt");
    patchUserData(email, name, jwt)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.log(err));
  };
  //обновление имени или почты пользователя

  //сохранение фильма
  function likeMovie( movie ) {
    const jwt = localStorage.getItem("jwt");
    postMovie(movie, jwt)
    .then((res) => {
      setUserSavedMovies([...userSavedMovies, res]);
    })
    .catch((err) => console.log(err));
  };
  //сохранение фильма

  //удаление фильма из сохранения
  function removeMovie(movie) {
    const isOwner = movie.owner === currentUser._id;
    let idLikedMovie = userSavedMovies.find(item => item.movieId === movie.id);

    if (isOwner || idLikedMovie._id) {
      deleteMovie(movie._id || idLikedMovie._id, localStorage.getItem("jwt"))
        .then(() => {
          setUserSavedMovies(userSavedMovies.filter((i) => i._id !== (movie._id || idLikedMovie._id)));
        })
        .catch((err) => console.log(err));
    }
  }
  //удаление фильма из сохранения

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{currentUser, userSavedMovies}}>

        <Switch>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            searcedMovies={searcedMovies}
            searcQuery={searcQuery}
            searcQueryLength={searcQueryLength}
            handleChangeSearcQuery={handleChangeSearcQuery}
            handleSearc={handleSearc}
            isCheckedBox={isCheckedBox}
            handlerCheckBox={handlerCheckBox}
            isLoading={isLoading}
            likeMovie={likeMovie}
            removeMovie={removeMovie}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            searcedMovies={searcedSaveMovies}
            searcQuery={searcQuery}
            searcQueryLength={searcQueryLength}
            handleChangeSearcQuery={handleChangeSearcQuery}
            handleSearc={handleSearcSavedMovie}
            isCheckedBox={isCheckedBox}
            handlerCheckBox={handlerCheckBox}
            isLoading={isLoading}

            removeMovie={removeMovie}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            signOut={signOut}
            handleUpdateUser={handleUpdateUser}
          />

          <Route path="/main">
            <Main/>
          </Route>
          
          <Route path="/signup">
            <Register
            handleRegister={handleRegister}
            handleBlur={handleBlur}
            name={name}
            email={email}
            password={password}
            nameDirty={nameDirty}
            emailDirty={emailDirty}
            passwordDirty={passwordDirty}
            nameError={nameError}
            emailError={emailError}
            passwordError={passwordError}
            handleChangeName={handleChangeName}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            />
          </Route>

          <Route path="/signin">
            <Login
            handleLogin={handleLogin}
            handleBlur={handleBlur}
            email={email}
            password={password}
            emailDirty={emailDirty}
            passwordDirty={passwordDirty}
            emailError={emailError}
            passwordError={passwordError}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            />
          </Route>

          <Route exact path="/">
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route>
          <Route path='*'>
            <NoFound />
          </Route>
        </Switch>

        <InfoTooltip  
        isOpen={isInfoTooltipOpen}
        message={message}
        onClose={closeAllPopups} />
      </CurrentUserContext.Provider>

    </div>
);
}
export default withRouter(App);

