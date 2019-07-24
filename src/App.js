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

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-shrink-0">
        <Header />
        <Route exact path="/" component={Database} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/user/:id" component={Profile} />
        <Route path="/about" component={Home} />
        <Route path="/search/:id" component={SearchResults} />
        <Route path="/coffeehouse/:id" component={CoffeehousePage} />
        </div>
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
    <nav className="navbar navbar-light container flex-row">
          <div>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top mr-1"/>
                Cascara
            </Link> 
          </div>  
          <div> 
              {
                netlifyAuth.isAuthenticated ? (
                  <div class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {netlifyAuth.user.email}                   
                  </a>
                   <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className="ml-3 mt-2">
                      <Link to={"/user/"+ netlifyAuth.user.id}>
                      Profile
                      </Link>
                    </li>
                    <li className="ml-3 mt-2">
                      <button className="btn btn-primary"
                      onClick={() => {
                        netlifyAuth.signout(() => history.push('/'));
                      }}
                      >
                      Logout
                      </button>
                    </li>
                   </ul>
                 </div>
              ) : (
                  <button className="btn btn-primary ml-3"
                    onClick={() => {
                      netlifyAuth.authenticate(() => history.push('/'));
                    }}
                  >
                    Login
                  </button>
              )
              }
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

/** DISPLAYS IF ACCESS DENIED */
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
export default App;