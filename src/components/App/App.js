import React, { useState, useEffect } from "react";
import './App.css';
import {
  Route,
  Switch,
} from "react-router-dom";
import Main from "../Main/Main";
import NoFound from "../NoFound/NoFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

const message = false;
function closeAllPopups() {
  setIsInfoTooltipOpen(false);
}
  return (
    <div className="page">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/signin">
            <Login/>
          </Route>
          <Route path="/signup">
            <Register/>
          </Route>
          <Route path='*'>
            <NoFound />
          </Route>
        </Switch>
        <InfoTooltip  
        isOpen={isInfoTooltipOpen}
        message={message}
        onClose={closeAllPopups} />
    </div>
);
}
export default App;

