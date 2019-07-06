import React, { useState, useEffect, Component } from 'react'
import api from '../utils/api.js'
import CoffeeCard from './CoffeeCard'


export default class SearchResults extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            searchResults: [],
            loading: true,
        };
    }

    //Runs after everything loads
    componentDidMount() {
        console.log("Fetching...")
        this.filterByNeighborhood(this.state.id)
    }

    filterByNeighborhood = (searchText) => {
        api.search({search: searchText, type: 'neighborhood'})
        .then(response => {
            //console.log("response: " + response);
            this.setState({ searchResults: response });
            this.setState({loading: false,})
        }).catch(err=> {
            console.log(err);
        });
    }

    render () {
        return this.state.loading ? (
            <div className="loader h-100">
                <span></span>
                <span></span>
                <span></span>
            </div>
        ) : (
            <div className="container mt-5">
                <h5 className=""> Search Results for {this.state.id} </h5>
                <div className="card-deck">
                    {this.state.searchResults.map(coffeehouse => <CoffeeCard {...coffeehouse} />)}
                </div>
            </div>
        )
    }
}