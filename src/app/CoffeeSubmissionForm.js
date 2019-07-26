import React from 'react'
import api from '../utils/api.js'
import { Link } from 'react-router-dom'
import netlifyIdentity from 'netlify-identity-widget';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            netlifyID: "",
            name: "",
            address: "",
            city: "",
            neighborhood: "",
            state: "",
            outletDesc: "",
            seatingDesc: "",
            goodFor: [],
            amenities: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        api.addCoffeeshop({"name" : this.state.name}, netlifyIdentity.currentUser().id)
    }

    render() {
        return (
            <div class="modal fade" id="submissionModal" tabindex="-1" role="dialog" aria-labelledby="submissionModalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="submissionModalTitle">Submit a Coffeehouse</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    {
                        netlifyIdentity.currentUser() === null ? (
                            <div>
                                    <div class="modal-body">
                                        <p>You must log in to add a coffeehouse to our database.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Okay, I'll make an account</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div class="modal-body">
                                        <form className="form-inline pt-3" onSubmit={this.handleSubmit}>
                                            <div class="form-group">
                                                <label for="coffeeNameInput">Coffeehouse</label>
                                                <input onChange={this.handleChange} type="text" name="name" class="form-control" id="coffeeNameInput" placeholder="name@example.com"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Add Coffeehouse</button>
                                    </div>
                                </div>
                            )
                    }
                
                    </div>
                </div>
            </div>
            
        );
    }
}