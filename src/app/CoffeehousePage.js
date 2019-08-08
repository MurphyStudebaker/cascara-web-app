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

        this.getMapsURL = this.getMapsURL.bind(this)
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

    checkForDefault = data => {
        return data === "" || data === null ? (
          "No data available"
        ) : (
          data
        )
    }

    getMapsURL() {
        let address = this.state.currentCoffeehouse.address + ", " + this.state.currentCoffeehouse.city + ", " + this.state.currentCoffeehouse.state
        let URL = "https://www.google.com/maps/dir/?api=1&destination=" +
        encodeURIComponent(address)
        console.log("MAPS URL " + URL)
        return (URL)
    
    }


    render () {
        return this.state.loading ? (
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        ) : (
            <div>
            <img src={this.state.currentCoffeehouse.img} className="img-header"/>
            <div className="container">
                <h1 className="heading mt-5">{this.state.currentCoffeehouse.name}</h1>
                <h4 className="subheading text-muted mb-3">{this.state.currentCoffeehouse.neighborhood}</h4>

                <a className="btn btn-outline-primary btn-large btn-block" href={this.getMapsURL()}>Visit</a>
                
                <h4 className="mt-5">Details</h4>
                <table className="table table-borderless ml-0 pl-0">
                    <tbody>
                        <tr>
                            <th scope="row">Address</th>
                            <td>
                                {this.state.currentCoffeehouse.address + " " + 
                                this.state.currentCoffeehouse.city + ", " + 
                                this.state.currentCoffeehouse.state}
                        
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="row">Outlets</th>
                            <td>{this.checkForDefault(this.state.currentCoffeehouse.outletDesc)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Seating</th>
                            <td>{this.checkForDefault(this.state.currentCoffeehouse.seatingDesc)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Coffee Score</th>
                            <td>{this.state.currentCoffeehouse.coffeeScore}</td>
                        </tr>
                        <tr>
                            <th scope="row">Wifi Score</th>
                            <td>{this.state.currentCoffeehouse.wifiScore}</td>
                        </tr>
                        <tr>
                            <th scope="row">Good For</th>
                            <div>
                                {this.state.currentCoffeehouse.goodFor.map(entry => <td className="badge badge-light m-1">{entry}</td>)}
                            </div>
                        </tr>
                        <tr>
                            <th scope="row">Amenities</th>
                            <div>
                                {this.state.currentCoffeehouse.amenities.map(entry => <td className="badge badge-light m-1">{entry}</td>)}
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default CoffeehousePage