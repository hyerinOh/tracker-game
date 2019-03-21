import React, { Component } from 'react';
import firebase from 'firebase';
import socketio from 'socket.io-client';
import {
  BrowserRouter as
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import SignInPage from './SignInPage';
import MatchingPage from './MatchingPage';

export default class App extends Component {
constructor(props) {
  super(props);
}
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={props => <SignInPage {...props} {...this.props} />}
          />
          <Route
            exact
            path='/matching'
            render={props => <MatchingPage {...props} {...this.props} />}
          />
          {/* <Route
            exact
            path='/game'
            render={props => }
          /> */}
        </Switch>
      </Router>
    )
  }
  
}