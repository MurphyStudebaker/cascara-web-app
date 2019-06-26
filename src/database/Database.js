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
            <div className="foam">
                <div className="container pt-5 search">
                    <h4 className="pt-5 title"> Find your new home away from home</h4>
                    <form className="form-inline pt-3 mb-5" name="coffeehouse-owner" method="POST">
                        <input className="form-control w-75 mr-2 mb-5" type="search" name="search" placeholder="Search by name or neighborhood" />
                        <button className="btn btn-primary mb-5">Search</button>
                    </form>
                </div>
                <div className="container mt-5">
                    <h5 className="">Staff Picks in Los Angeles </h5>
                    <div className="card-deck">
                        {this.state.coffeehouses.map(coffeehouse => <CoffeeCard {...coffeehouse} />)}
                    </div>
                </div>
            </div>
        );
    }
}