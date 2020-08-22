import React from 'react';
import './Styles/First.css';
import './Styles/Second.css'
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import Tools from './Components/Tools/Tools';
import SignUp from './Components/SignUp/SignUp';
import Courses from './Components/Courses/Courses';
import Web from './Components/Courses/Web/Web';
import AppDev from './Components/Courses/App/App';
import Game from './Components/Courses/Game/Game';
import Python from './Components/Courses/Python/Python';

function App() {
  return (
    <Router>
      <div>
        <Header/>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tools">
          <Tools/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/courses">
          <Courses/>
        </Route>
        <Route exact path="/python">
          <Python/>
        </Route>
        <Route exact path="/web">
          <Web/>
        </Route>
        <Route exact path="/app">
          <AppDev/>
        </Route>
        <Route exact path="/game">
          <Game/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
