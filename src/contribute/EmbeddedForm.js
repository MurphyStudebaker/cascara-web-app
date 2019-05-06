import React, {Component} from 'react';

export default class EmbeddedForm extends Component {
    render () {
        return (
            <iframe class="airtable-embed" 
                src="https://airtable.com/embed/shrla8kqNLofvZ8Yq?backgroundColor=yellow" 
                frameborder="0" 
                onmousewheel="" 
                width="100%" height="1000" />
        );
    }
}