import React, {Component} from 'react';

export default class EmailForm extends Component {
    render () {
        return (
            <form className="email-input netlify">
              <input className="text-input" type="email" name="email" id="exampleEmail" placeholder="Email" />
              <button className="submit-button button">Submit</button>
            </form>
        );
    }
}
