import React, {Component} from 'react';
import Outlet from './outlet.jpg';

export default class IconBlock extends Component {
    render () {
      return (
        <div className="icon-block">
          <div className="ib-img">
            <img href={Outlet}/>
          </div>
          <div className="ib-txt">
            <h3 className="subtitle"> { this.props.title } </h3>
            <p> { this.props.subtitle } </p>
          </div>
        </div>
      );
  }
}
