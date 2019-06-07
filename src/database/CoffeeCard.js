import React, {Component} from 'react';

const CoffeeCard = ({name, streetAddress, city, coffeeScore, wifiScore, amenities, atmosphere, outletDesc, parking, photo, neighborhood, state, coffeeCost}) => (
    <div className="card">
        <h3 className="card-title">
            {name}
        </h3>
        <p className="neighborhood"> {neighborhood} </p>    
    </div>
);

export default CoffeeCard; 