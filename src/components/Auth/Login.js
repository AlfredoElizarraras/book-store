import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../Title';
import { userAuth } from '../../actions';
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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { type } = this.props;
    const {
      username,
      email,
      password,
    } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Title margin="1rem auto" />
          <Typography component="h2" variant="h5">
            {type === 'signup' ? 'Sign up' : 'Login'}
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
                  onChange={e => this.handleChange({ name: 'username', value: e.target.value })}
                  value={username}
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
                  onChange={e => this.handleChange({ name: 'email', value: e.target.value })}
                  value={email}
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
                onChange={e => this.handleChange({ name: 'email', value: e.target.value })}
                value={email}
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
              onChange={e => this.handleChange({ name: 'password', value: e.target.value })}
              value={password}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              className="submit"
            >
              { type === 'signup' ? 'Sign up' : 'Sign in' }
            </Button>
            <Grid container>
              <Grid item>
                {type === 'signup' ? (
                  <Link to="/login" variant="body2">
                    Do already have an account? Login
                  </Link>
                ) : (
                  <Link to="/sign-up" variant="body2">
                    Do not have an account? Sign Up
                  </Link>
                )}
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

Login.propTypes = {
  type: PropTypes.string,
  userAuth: PropTypes.func.isRequired,
};

Login.defaultProps = {
  type: 'login',
};

export default connect(null, { userAuth })(Login);
