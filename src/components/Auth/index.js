import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './Login';
import App from '../App';

const isAuthenticated = false;

const Auth = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-up">
        <Login type="signup" />
      </Route>
      <Route
        exact
        path="/"
        render={() => (

          isAuthenticated
            ? <App />
            : <Redirect to="/login" />

        )}
      />
    </Switch>
  </Router>
);

export default Auth;
