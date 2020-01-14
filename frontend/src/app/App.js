import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import './App.css';

import AddUser from '../authentication/AddUser';
import Board from '../board/Board';
import Project from '../project/Project';
import Login from '../authentication/Login';
import Team from '../team/Team';
import Bug from '../bug/Bug.js';

import State from '../global-state';

class App extends Component {
  render() {
    console.log('Is user loggedIn: ' + State.isLoggedIn());

    // if (!State.isLoggedIn()) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/boards'} className="nav-link">Board</Link></li>
            <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
            <li><Link to={'/teams'} className="nav-link">Teams</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={AddUser} />
                <Route path='/boards' component={Bug} />
              <Route exact path="/" render={() => (
                !State.isLoggedIn() ? (
                  <Redirect to="/login"/>
                ) : (
                  <Board/>
                )
              )}/>

              <Route exact path="/projects" render={() => (
                !State.isLoggedIn() ? (
                  <Redirect to="/login"/>
                ) : (
                  <Project/>
                )
              )}/>

              <Route exact path="/boards" render={() => (
                !State.isLoggedIn() ? (
                  <Redirect to="/login"/>
                ) : (
                  <Board />
                )
              )}/>

              <Route exact path="/teams" render={() => (
                !State.isLoggedIn() ? (
                  <Redirect to="/login"/>
                ) : (
                  <Team />
                )
              )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
