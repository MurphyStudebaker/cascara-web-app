import React, {Component} from 'react';

export default class Step1 extends React.Component {
    render () {
        //does not display if this is not the current step
        if (this.props.currentStep !== 1) {
            return null;
        }
        return (
            <div>
                <h2>General Information</h2>
                <input 
                    className="form-text-input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Coffeehouse Name"
                    value={this.props.name} 
                    onChange={this.props.handleChange}
                />
                <input 
                    className="form-text-input"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Street Address"
                    value={this.props.address} 
                    onChange={this.props.handleChange}
                />
                <input 
                    className="form-text-input"
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={this.props.city} 
                    onChange={this.props.handleChange}
                />
                <input 
                    className="form-text-input"
                    id="state"
                    name="state"
                    type="text"
                    placeholder="State"
                    value={this.props.name} 
                    onChange={this.props.handleChange}
                />
                <label className="checkbox-container">
                    Wifi is available to customers
                    <input 
                        type="checkbox"
                        name="wifi"
                        value="wifi"
                    />
                    <span class="checkmark"></span> 
                </label>
                <label className="checkbox-container">
                    Outlets are available to customers
                    <input 
                        type="checkbox"
                        name="outlets"
                        value="outlets"
                    />
                    <span class="checkmark"></span> 
                </label> 

                <input 
                    className="form-text-input"
                    id="outletDesc"
                    name="outlet description"
                    type="text"
                    placeholder="Where are the outlets located?"
                    value={this.props.outletDesc} 
                    onChange={this.props.handleChange}
                />
            </div>

        ); 
    }
}