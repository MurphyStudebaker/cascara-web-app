import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faWifi } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import EmbeddedForm from './contribute/EmbeddedForm';
import Database from './database/Database';

library.add(fab, faCoffee, faWifi)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/contribute/" component={EmbeddedForm} />
          <Route path="/app/" component={Database} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
