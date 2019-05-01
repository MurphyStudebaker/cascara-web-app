import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ContributeForm from './contribute/ContributeForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
