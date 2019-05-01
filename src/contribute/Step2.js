import React, {Component} from 'react';

export default class Step2 extends React.Component {
    render () {
        //does not display if this is not the current step
        if (this.props.currentStep !== 2) {
            return null;
        }
        return (
            <div>
                <h2> Coffeehouse Amenities </h2>
                <p> Select all that apply </p>
                <div className="form-group amenities">
                <label className="chip-container">
                    🐶 Pet Friendly 
                    <input
                        className="chip" 
                        type="checkbox"
                        name="pet friendly"
                        value="petFriendly"
                    /> 
                </label>
                <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> ☕ Organic Coffee <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🥐 Pastries <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🥑 Real Food <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🌞 Outdoor Seating <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🔥 Roastery <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🙋 Friendly Baristas <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🎸 Live Music <br/>
                <input 
                    type="checkbox"
                    name="pet friendly"
                    value="petFriendly"
                /> 🐶 Pet Friendly <br/>                
                
                </div>

                <div className="form-group atmosphere">
                    <h3> Atmosphere </h3>
                    <p> Select all that apply </p>

                    <input 
                        type="checkbox"
                        name="study space"
                        value="study space"
                    /> Study Space <br/>
                    <input 
                        type="checkbox"
                        name="cozy"
                        value="cozy"
                    /> Cozy <br/>
                    <input 
                        type="checkbox"
                        name="minimalist"
                        value="minimalist"
                    /> Minimalist <br/>
                    <input 
                        type="checkbox"
                        name="industrial"
                        value="industrial"
                    /> Industrial <br/>
                    <input 
                        type="checkbox"
                        name="bohemian"
                        value="bohemian"
                    /> Bohemian <br/>
                </div>
            </div>
        ); 
    }
}