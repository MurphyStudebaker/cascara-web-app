import React from 'react'

export default class SelectableChip extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            category: props.category,
            text: props.text,
            selected: props.selected,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.state)
    }
    
    render () {
        const selectedStyle = {
            border: "2px solid #270f26"
        }

        const defaultStyle = {
            border: "0px"
        }

        console.log("rendering as " + (this.state.selected? "selected":"deselected"))

        return (
            <button onClick={this.handleClick} className="badge badge-light p-2 m-1" style={this.state.selected ? selectedStyle : defaultStyle}>
                {this.state.text}
            </button>
        )
    }
}    

