import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';
import App from '../App';

const Auth = ({ user }) => (
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

          user && user.token
            ? <App />
            : <Redirect to="/login" />

        )}
      />
    </Switch>
  </Router>
);

Auth.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }),
};

Auth.defaultProps = {
  user: null,
};

export default connect(state => ({ user: state.user }))(Auth);
