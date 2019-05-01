import React, {Component} from 'react';

export default class Step3 extends React.Component {
    render () {
        //does not display if this is not the current step
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <div>
                <p> Step 3 </p> 
                <button className="btn btn-success btn-block">Sign up</button>
            </div>
        ); 
    }
}