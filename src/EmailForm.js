import React, {Component} from 'react';

export default class EmailForm extends Component {
    render () {
        return (
            <form className="form-inline pt-3" name="coffeehouse-owner" method="POST">
                <input type="hidden" name="form-name" value="coffeehouse-owner"/>
                <input className="form-control mr-2" type="email" name="email" id="exampleEmail" placeholder="Email" />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}
