import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faWifi, faFilter } from '@fortawesome/free-solid-svg-icons'
import netlifyIdentity from 'netlify-identity-widget'

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Database from './app/Database';
import CoffeehousePage from './app/CoffeehousePage'
import SearchResults from './app/SearchResults'
import Profile from './app/Profile'

library.add(fab, faCoffee, faWifi, faFilter)

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/app">Public Page</Link>
          </li>
          <li>
            <Link to="/user">Protected Page</Link>
          </li>
        </ul>
        <Route path="/app" component={Database} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/user" component={Profile} />
      </div>
    </Router>
  );
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    netlifyAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            netlifyAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        netlifyAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
export default AuthExample;

/**
 * <div className="d-flex flex-column min-vh-100">
        <div className="flex-shrink-0">
          <Header isAuthenticated={this.state.isAuthenticated} login={this.authenticate} logout={this.signout}/>
          <Switch>
            <Route exact path="/" component={Database} />
            <Route path="/about" component={Home} />
            <Route path="/search/:id" component={SearchResults} />
            <Route path="/:id" component={CoffeehousePage} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
 */