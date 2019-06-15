import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends Component {
  /*
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  */
  render() {
    return (
      <div className="container navbar">
        <div className="navbar-brand">
          <h4> ☕  CASCARA </h4>
        </div>
        <div className="nav-links">
          <a href="https://www.instagram.com/getcascara/">
          <FontAwesomeIcon icon={['fab','instagram']} size={70}/>
          </a>
        </div>
      </div>
    );
  }
}
