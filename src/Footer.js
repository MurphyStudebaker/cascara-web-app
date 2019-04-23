import React, {Component} from 'react';
import EmailForm from './EmailForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Facebook } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className="content">
          <p> Cascara |   
            <a href="mailto:hello@getcascara.com">hello@getcascara.com </a>
          </p>
        </div>
      </footer>
    )
  }
}