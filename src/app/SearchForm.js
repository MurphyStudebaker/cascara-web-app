import React from 'react';


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

        event.preventDefault();
    }

    filterByNeighborhood = (searchText) => {
        api.search({search: searchText})
        .then(response => {
            //console.log("response: " + response);
            //this.setState({ coffeehouses: response });
        }).catch(err=> {
            console.log(err);
        });
    }

    render() {
        return (
            <form className="form-inline pt-3 mb-5" onSubmit={}>
                <input className="form-control w-75 mr-2 mb-5" type="search" name="search" placeholder="Search by name or neighborhood" value={this.state.value} onChange={this.handleChange}/>
                <input className="btn btn-primary mb-5" type="submit" value="Submit" />
            </form>
        );
    }
}