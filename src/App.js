import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import EmbeddedForm from './contribute/EmbeddedForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/contribute" component={EmbeddedForm} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
