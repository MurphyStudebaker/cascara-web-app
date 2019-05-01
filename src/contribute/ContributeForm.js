import React, {Component} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default class ContributeForm extends Component {
    constructor(props) {
        super(props);

        //set default values
        this.state = {
            currentStep: 1,
            name: '',
            address: '',
            city: '',
            state:'',
            wifi: 0,
            outlets: 0,
            outletDesc: '',
            amenities: [],
            atmosphere: []
        }

        this.handleChange = this.handleChange.bind(this);
        
        this._prev = this._prev.bind(this)
        this._next = this._next.bind(this)
    }

    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
    _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
    }

    handleChange(event) {
        const {name, value} = event.target; 
        this.setState({
            [name]: value
        });
    }

    //gather all of the input from state, send it wherever
    handleSubmit = event => {
        event.preventDefault()
        const { name } = this.state
        alert(`Thanks, ${name}`)
    }

    get previousButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if(currentStep !==1){
          return (
            <button 
              className="button btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        // ...else return nothing
        return null;
      }
      
    get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <3){
          return (
            <button 
              className="button btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        // ...else render nothing
        return null;
    }
    
    
    render () {
        return (
            <React.Fragment>
                <div className="foam">
                    <section className="section">
                        <h1> Contribute a Coffeehouse </h1>
                        <p>Step {this.state.currentStep} </p> 
            
                        <form onSubmit={this.handleSubmit}>
                            <Step1 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            name={this.state.name}
                            />
                            <Step2 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            username={this.state.username}
                            />
                            <Step3 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            password={this.state.password}
                            />       
                        </form>

                        {this.previousButton}
                        {this.nextButton}
                    </section>
                </div>
                <div className="spacer foam"></div>

            </React.Fragment>
        ); 
    }
}