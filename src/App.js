import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faWifi } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Database from './app/Database';
import CoffeehousePage from './app/CoffeehousePage'
import SearchResults from './app/SearchResults'

library.add(fab, faCoffee, faWifi)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Database} />
          <Route path="/about" component={Home} />
          <Route path="/search/:id" component={SearchResults} />
          <Route path="/:id" component={CoffeehousePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
