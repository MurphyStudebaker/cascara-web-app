import React, {Component} from 'react';
import Reactotron from 'reactotron-react-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import DefaultPhoto from './cascara-default-house.png'

const CoffeeCard = ({id, img, name, streetAddress, city, coffeeScore, wifiScore, amenities, atmosphere, outletDesc, parking, photo, neighborhood, state, coffeeCost}) => (
    <Link to={"/coffeehouse/" + id} className="card m-2">
        <img className="card-img-top" src={img} alt="Photo of coffeehouse" />
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 className="card-subtitle text-muted mb-2"> {neighborhood} </h5>
            <div className="chip-group">
                <span className="badge badge-light p-2 m-1">{amenities[0]}</span>    
                <span className="badge badge-light p-2 m-1">{amenities[1]}</span>    
                <span className="badge badge-light p-2 m-1">{amenities[2]}</span>                
            </div>
        </div>   
    </Link>
);

export default CoffeeCard; 