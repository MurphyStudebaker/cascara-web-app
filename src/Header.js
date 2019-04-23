import React, {Component} from 'react';

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
      </div>
    );
  }
}
