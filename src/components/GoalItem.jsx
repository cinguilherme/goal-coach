import React, { Component } from 'react';

class GoalItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: props.key,
            title: props.title
        }
    }

    render() {
        
        return (
            <div key={this.state.key}>
                {this.state.title}
            </div>
        )
    }
}

export default GoalItem;