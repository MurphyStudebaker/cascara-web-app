import React, { Component } from 'react'
import SelectableChip from './SelectableChip'

export default class FilterModal extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            selections: [],
        }
        this.updateSelections = this.updateSelections.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getFilterOptions = this.getFilterOptions.bind(this);
    }

    updateSelections() {
        console.log("SAVING SELECTIONS")
    }

    handleClick(object) {
        this.props.handleClick(object);
    }

    getFilterOptions(category) {
        return this.state.options.filter(
            (option) => {
                return option.category === category;
            }
        )
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
                    <h3>Good For</h3>
                    <div>
                        {
                            this.getFilterOptions("goodFor").map((option, i) => 
                            <SelectableChip key={i} index={i} text={option.text} category="goodFor" selected={option.selected} handleClick={this.handleClick}/> )
                        }                
                    </div>
                    <h3>Amenities</h3>
                    <div>
                        {
                            this.getFilterOptions("amenities").map((option, i) => 
                            <SelectableChip key={i} index={i} text={option.text} category="amenities" selected={option.selected} handleClick={this.handleClick}/> )
                        }                
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onClick={this.props.handleClose} data-dismiss="modal">Save filters</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}