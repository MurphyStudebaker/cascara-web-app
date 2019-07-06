import React, {Component} from 'react';
import EmailForm from './EmailForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Facebook } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component {
  render () {
    return (
      <footer className="footer bg-light mt-auto py-3">
        <div className="container text-center">
          <p className="text-muted"> © 2019 Cascara |   
            <a href="mailto:hello@getcascara.com"> hello@getcascara.com </a>
          </p>
        </div>
      </footer>
    )
  }
}