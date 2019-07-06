import React, {Component} from 'react';
import CoffeeCard from './CoffeeCard';
import api from '../utils/api'
import SearchForm from './SearchForm'
import FilterModal from './FilterModal'

import swirl from '../swirl.svg'
import Reactotron from 'reactotron-react-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Database extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            coffeehouses: [],
            loading: true,
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
                <div className="loader h-100">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : (
            <div>
                <div className="foam mb-0 pt-5 pb-5">
                    <div className="container mb-0">
                        <h1 className="title mb-0 pt-5"> Find your new home away from home </h1>
                        <SearchForm filter={this.filterByNeighborhood}/>
                    </div>
                </div>
                <div className="vw-100 mw-100">
                    <img className="mt-0 align-top w-100" src={swirl} alt=""/>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <h5 className="mt-5">Staff Picks in Los Angeles </h5>
                        {/*
                        <button className="d-flex justify-content-end btn btn-outline-primary pb-0" data-toggle="modal" data-target="#filterModal">
                            <FontAwesomeIcon icon="filter" className="pb-0"/>
                        </button>
                        <FilterModal />*/}
                    </div>
                    <div className="card-deck">
                        {this.state.coffeehouses.map(coffeehouse => <CoffeeCard {...coffeehouse} />)}
                    </div>
                </div>
            </div>
            )
        );
    }
}