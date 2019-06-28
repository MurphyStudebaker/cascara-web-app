import React, { useState, useEffect, Component } from 'react'
import api from '../utils/api.js'

export class CoffeehousePage extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            currentCoffeehouse: { 
                name: 'Coffee',
            },
            loading: true,
        };
    }

    //Runs after everything loads
    componentDidMount() {
        console.log("Fetching...")
        api.fetchWithId(this.state.id).then(response => {
            this.setState({ currentCoffeehouse: response, loading: false})
            console.log("Loading: "+ this.state.currentCoffeehouse.name)
        }).catch(err => {
            console.log(err)
        })
    }

    render () {
        return this.state.loading ? (
            <div>Loading...</div>
        ) : (
            <h1>I am {this.state.currentCoffeehouse.name} </h1>
        )
    }
}

export default CoffeehousePage