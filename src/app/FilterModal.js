import React, { useState, useEffect, Component } from 'react'

export default class FilterModal extends Component {
    //Initiates application-wide variables
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className="modal fade" id="filterModal" tabIndex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}