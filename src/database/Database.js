import React, {Component} from 'react';
import CoffeeCard from './CoffeeCard';

export default class Database extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        console.log("SOMETHING");
        this.state = {
            coffeehouses: [],
        };
    }

    //Runs after everything loads
    componentDidMount() {
        fetch('endpoint goes here eventually')
        .then((resp) => resp.json())
        .then(data => {
            console.log(data);
            this.setState({ coffeehouses: data.records});
        }).catch(err => {
            // Runs if there is an error fetching records from Airtable
            this.setState({coffeehouses: [
                {
                    name: "Error",
                    neighborhood: "Loading Data",
                },
            ]})
        });
    }

    render () {
        console.log("RETURN METHOD");
        return (
            <div className="card-deck">
                {this.state.coffeehouses.map(coffeehouse => <CoffeeCard {...coffeehouse} />)}
            </div>
        );
    }
}