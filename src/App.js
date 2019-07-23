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
import logo from './cascara_icon_100px.svg'
import ls from 'local-storage'

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
        <Header />
        <Route exact path="/" component={Database} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/user" component={Profile} />
        <Route path="/about" component={Home} />
        <Route path="/search/:id" component={SearchResults} />
        <Route path="/coffeehouse/:id" component={CoffeehousePage} />
        <Footer />
      </div>
    </Router>
  );
}

const netlifyAuth = {
  isAuthenticated: ls.get('isAuthenticated') || false,
  user: ls.get('user') || null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      ls.set('user', user)
      callback(user);
    });
    ls.set('isAuthenticated', true)
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
    ls.set('isAuthenticated', false)
    ls.set('user', null)
  }
};

const Header = withRouter(
  ({ history }) =>
    <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top mr-1"/>
            Cascara
        </Link>      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/about" className="mr-2 nav-link"> About </Link>
            </li>
            <li class="nav-item">
              <a href="https://www.instagram.com/getcascara/" className="nav-link">
                <FontAwesomeIcon icon={['fab','instagram']} size={70}/>
              </a>            
            </li>
            <li>
              {
                netlifyAuth.isAuthenticated ? (
                  <button className="btn btn-primary"
                    onClick={() => {
                      netlifyAuth.signout(() => history.push('/'));
                    }}
                  >
                    Sign out
                  </button>
              ) : (
                <div>
                  <button className="btn btn-primary"
                    onClick={() => {
                      netlifyAuth.authenticate(() => history.push('/'));
                    }}
                  >
                    Login
                  </button>
                </div>
              )

              }
            </li>
          </ul>
        </div>
      </nav>
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
        <p>This page is restricted to registered users.</p>
        <button onClick={this.login}>Log In</button>
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