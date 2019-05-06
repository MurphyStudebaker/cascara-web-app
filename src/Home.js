import React, {Component} from 'react';
import IconBlock from './IconBlock';
import EmailForm from './EmailForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="foam">
          <section className="section split-screen pb-l">
            <h1 className="title"> 
              We're documenting every coffeehouse in Los Angeles.
            </h1>
            <Link className="button" to="/contribute"> Help us out! </Link>
          </section>
          <section>
            <h1 className="title">
              Detailed filters to find exactly what you're looking for.
            </h1>
            <ul className="filters">
              <li>☕ Organic Coffee </li>
              <li>🔌 Plenty of Outlets </li>
              <li>🥐 Pastries </li>
              <li>🥑 Real Food </li>
              <li>🌞 Outdoor Seating </li>
              <li>✨ Atmosphere Filters </li>
              <li>🐶 Pet Friendly </li> 
              <li>🔥 Roastery </li>
              <li>🙋 Friendly Baristas </li>
              <li>🎸 Live Music </li>
            </ul>
          </section>
          <section>
            <h1 className="title"> Own a coffeehouse? Let's talk. </h1>
            <EmailForm />
            <div class="spacer"></div>
          </section>
        </div>
      </div>
    );
  }
}
