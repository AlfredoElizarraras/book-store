import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {
  Link,
  Redirect,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Title from '../Title';
import './index.css';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" to="/">
      BookStore
    </Link>
    {' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const Login = ({ type }) => {
  const handleOnClick = () => (
    <Redirect to="/" />
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Title margin="1rem auto" />
        <Typography component="h2" variant="h5">
          {type === 'signup' ? 'Sign up' : 'Login' }
        </Typography>
        <form className="form" noValidate>
          {type === 'signup' ? (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </>
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={handleOnClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              {
                type === 'signup'
                  ? (
                    <Link to="/login" variant="body2">
                      Do already have an account? Login
                    </Link>
                  )
                  : (
                    <Link to="/sign-up" variant="body2">
                      Do not have an account? Sign Up
                    </Link>
                  )
              }
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

Login.propTypes = {
  type: PropTypes.string,
};

Login.defaultProps = {
  type: 'login',
};

export default Login;
