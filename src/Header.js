import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import logo from './cascara_icon_100px.svg'


export default class Header extends Component {
  render() {
    return (
      <nav className="container navbar">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top mr-1"/>
          Cascara
        </Link>
        <div className="nav-links">
          <Link to="/about" className="mr-2"> About </Link>
          <a href="https://www.instagram.com/getcascara/">
          <FontAwesomeIcon icon={['fab','instagram']} size={70}/>
          </a>
        </div>
      </nav>
    );
  }
}
