import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import logo from './cascara_icon_100px.svg'


export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light container">
        <div className="">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top mr-1"/>
            Cascara
          </Link>      
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

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
          </ul>
        </div>
      </nav>
    );
  }
}
