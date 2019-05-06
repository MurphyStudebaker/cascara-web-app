import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div className="navbar">
        <div className="brand">
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
