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
        console.log("CHANGE IN " + target.type)
        if (target.type === "select-multiple") {
            var options = target.options
            var value = []
            const name = target.name

            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value)
              }
            }

            this.setState({
                [name]: value
            });
            
        } else {
            const value = target.value;
            const name = target.name;
    
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        api.addCoffeeshop(
           this.state
        , netlifyIdentity.currentUser().id)
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
                                        <form className="pt-3" onSubmit={this.handleSubmit}>
                                            <div class="form-group">
                                                <label for="coffeeNameInput">Coffeehouse</label>
                                                <input onChange={this.handleChange} type="text" name="name" class="form-control" id="coffeeNameInput" />
                                            </div>
                                            <div class="form-group">
                                                <label for="">Street Address</label>
                                                <input onChange={this.handleChange} type="text" name="address" class="form-control" id="" placeholder=""/>
                                                <label for="">City</label>
                                                <input onChange={this.handleChange} type="text" name="city" class="form-control" id="" placeholder=""/>
                                                <label for="">State</label>
                                                <input onChange={this.handleChange} type="text" name="state" class="form-control" id="" placeholder=""/>
                                            </div>
                                            <div className="form-group">
                                            <label for="exampleFormControlSelect2">This place is good for: </label>
                                                <select multiple class="form-control" id="" name="goodFor" type="multiselect" onChange={this.handleChange}>
                                                    <option type="multiselect">Reading</option>
                                                    <option type="multiselect">Working</option>
                                                    <option type="multiselect">Meeting</option>
                                                    <option type="multiselect">Grab and Go</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="">Neighborhood</label>
                                                <input onChange={this.handleChange} type="text" name="neighborhood" class="form-control" id="" placeholder=""/>
                                            </div>
                                            <div className="form-group">
                                                <label for="">How many outlets are there and where are they located?</label>
                                                <textarea onChange={this.handleChange} class="form-control" id="" rows="3" name="outletDesc"></textarea>
                                                <label for="">What's the seating like?</label>
                                                <textarea onChange={this.handleChange} class="form-control" id="" rows="3" name="seatingDesc"></textarea>
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