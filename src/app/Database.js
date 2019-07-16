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
            filters: [
                {text: "Cozy", category: "atmosphere", selected:false},
                {text: "Patio", category: "atmosphere", selected:false},
                {text: "Bohemian", category: "atmosphere", selected:false},
                {text: "European", category: "atmosphere", selected:false},
                {text: "Industrial", category: "atmosphere", selected:false},
                {text: "Minimalist", category: "atmosphere", selected:false},
                {text: "Study Space", category: "atmosphere", selected:false},
                {text: "Classy", category: "atmosphere", selected:false},
                {text: "Artsy", category: "atmosphere", selected:false},
                {text: "☕ Organic Coffee", category: "amenities", selected:false},
                {text: "🌞 Outdoor Seating", category: "amenities", selected:false},
                {text: "🌱 Vegan Milks", category: "amenities", selected:false},
                {text: "🎸 Live Music", category: "amenities", selected:false},
                {text: "🐶 Pet Friendly", category: "amenities", selected:false},
                {text: "🔥 Roastery", category: "amenities", selected:false},
                {text: "🥐 Pastries", category: "amenities", selected:false},
                {text: "🥑 Real Food", category: "amenities", selected:false},
                {text: "🙋 Friendly Baristas", category: "amenities", selected:false},
                {text: "🌙 Open Late", category: "amenities", selected:false},

            ],
            filtersSelected: 0,
        }

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.fetchFilteredResults = this.fetchFilteredResults.bind(this);
    }

    //Runs after everything loads
    componentDidMount() {
        if(this.state.filtersSelected === 0) {
            console.log("fetching all")
            this.fetchAll()
        }
    }

    handleFilterClick(object) {
        object.selected = !object.selected
        var index = this.state.filters.findIndex(
            o => o.text === object.text
        )
        let newOptions = [...this.state.filters.slice(0, index), object, ...this.state.filters.slice(index +1)]
        this.setState({
            filters: newOptions
        })
        object.selected ? (this.setState({filtersSelected: this.state.filtersSelected+1})
        ) : (this.setState({filtersSelected: this.state.filtersSelected-1}))
    }

    fetchFilteredResults() {
        this.setState({loading: true})
        api.filter(this.state.filters).then(response => {
            this.setState({ coffeehouses: response, loading: false})
        }).catch(err => {
            console.log(err)
        })
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
                    <div className="d-flex justify-content-between mt-5">
                        <h5 className="">Staff Picks in Los Angeles </h5>
                        <button className="d-flex justify-content-end btn btn-outline-primary py-0" data-toggle="modal" data-target="#filterModal">
                            <FontAwesomeIcon icon="filter" className="pb-0"/>
                        </button>
                        <FilterModal options={this.state.filters} handleClick={this.handleFilterClick} handleClose={this.fetchFilteredResults}/>
                    </div>
                    {
                        this.state.loading ? (
                            <div className="loader h-100">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        ) : (
                            <div className="card-deck">
                                {this.state.coffeehouses.length > 0 ? (this.state.coffeehouses.map(coffeehouse => <CoffeeCard {...coffeehouse}/>)) :
                                <p>No results match your criteria.</p>}
                            </div> )
                    }
                    
                </div>
            </div>
        )
    }
}