import React, {Component} from 'react';
import Reactotron from 'reactotron-react-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CoffeeCard = ({name, streetAddress, city, coffeeScore, wifiScore, amenities, atmosphere, outletDesc, parking, photo, neighborhood, state, coffeeCost}) => (
    <div className="card m-2">
        <img className="card-img-top" src="https://www.discovercentralma.org/default/assets/Image/cake%20shop%20cafe/cafe1sm.png" alt="Photo of coffeehouse" />
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 className="card-subtitle text-muted mb-2"> {neighborhood} </h5>
            <div className="chip-group">
                <span className="badge badge-light p-2 m-1">{amenities[0]}</span>    
                <span className="badge badge-light p-2 m-1">{amenities[1]}</span>    
                <span className="badge badge-light p-2 m-1">{amenities[2]}</span>                
            </div>
        </div>   
    </div>
);

export default CoffeeCard; 