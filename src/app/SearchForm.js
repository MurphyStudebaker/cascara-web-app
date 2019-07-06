import React from 'react'
import api from '../utils/api.js'
import { Link } from 'react-router-dom'

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.filter(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline pt-3" onSubmit={this.handleSubmit}>
                <input className="form-control w-75 mr-2 mb-5" type="search" name="search" placeholder="Search by neighborhood" value={this.state.value} onChange={this.handleChange}/>
                <Link to={"/search/"+this.state.value}><input className="btn btn-primary mb-5" type="submit" value="Submit" /></Link>
            </form>
        );
    }
}