import React, { Component } from 'react'

export default class FilterModal extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            atmosphereOptions: [
                {name: "Option 1", selected: false},
                {name: "Option 2", selected: false}],
        }
        this.handleChipSelect = this.handleChipSelect.bind(this)
    }

    handleChipSelect() {

    }

    render () {
        return (
            <div className="modal fade" id="filterModal" tabIndex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Coffee Filters</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Atmosphere</h3>
                    <div>
                        {this.state.atmosphereOptions.map(option => 
                        <button className="badge badge-light p-1" onClick={this.handleChipSelect}>
                        {option.name}</button> )}                
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Save filters</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}