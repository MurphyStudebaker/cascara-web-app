import React, {Component} from 'react';
import CoffeeCard from './CoffeeCard';
import api from '../utils/api'
import SearchForm from './SearchForm'

import Reactotron from 'reactotron-react-js'

export default class Database extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            coffeehouses: [],
            loading: true,
            results: false,
            resultTerm: '',
        };
    }

    //Runs after everything loads
    componentDidMount() {
        this.fetchAll()
    }

    fetchAll() {
        api.readAll().then(response => {
            this.setState({ coffeehouses: response, loading: false });
        }).catch(err => {
            console.log(err);
        });
    }

    render () {
        return (
            this.state.loading ? (
                <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : (
            <div>
                <div className="foam">
                    <div className="container pt-5">
                        <h1 className="title pt-3"> Find your new home away from home </h1>
                        <SearchForm filter={this.filterByNeighborhood}/>
                    </div>
                </div>
                <div className="container">
                    <h5 className="">Staff Picks in Los Angeles </h5>
                    <div className="card-deck">
                        {this.state.coffeehouses.map(coffeehouse => <CoffeeCard {...coffeehouse} />)}
                    </div>
                </div>
            </div>
            )
        );
    }
}