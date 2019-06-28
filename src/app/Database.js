import React, {Component} from 'react';
import CoffeeCard from './CoffeeCard';
import api from '../utils/api'

import Reactotron from 'reactotron-react-js'

export default class Database extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            coffeehouses: [],
        };
    }

    //Runs after everything loads
    componentDidMount() {
        api.readAll().then(response => {
            this.setState({ coffeehouses: response });
        }).catch(err => {
            console.log(err);
        });
    }

    render () {
        return (
                <div className="container mt-5">
                    <h5 className="">Staff Picks in Los Angeles </h5>
                    <div className="card-deck">
                        {this.state.coffeehouses.map(coffeehouse => <CoffeeCard {...coffeehouse} />)}
                    </div>
                </div>
        );
    }
}