import React, {Component} from 'react';
import EmailForm from '../EmailForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="foam">
          <section className="container py-5">
            <h1 className="title pt-5"> 
              We're documenting every coffeehouse in Los Angeles.
            </h1>
            <Link className="btn btn-lg btn-primary mt-3" to="/contribute"> Help us out! </Link>
          </section>
          <section className="container py-5">
            <h1 className="title">
              Detailed filters to find exactly what you're looking for.
            </h1>
            <ul className="filters pt-3">
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
          <section className="container py-5">
            <h1 className="title"> Own a coffeehouse? Let's talk. </h1>
            <EmailForm />
            <div class="spacer"></div>
          </section>
        </div>
      </div>
    );
  }
}
