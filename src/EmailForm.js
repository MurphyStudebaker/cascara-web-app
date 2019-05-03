import React, {Component} from 'react';

export default class EmailForm extends Component {
    render () {
        return (
            <form className="email-input" name="coffeehouse-owner" method="POST">
                <input type="hidden" name="form-name" value="coffeehouse-owner"/>
                <input className="text-input" type="email" name="email" id="exampleEmail" placeholder="Email" />
                <button className="submit-button button" type="submit">Submit</button>
            </form>
        );
    }
}
