import React, { Component } from 'react';

class GoalItem extends Component {

    render() {
        const { title, email } = this.props.goal;
        return (
            <div
                style={{ margin: '10px' }}>
                <strong> {title} </strong>
                <span> from <em>{email}</em>  </span>
            </div>
        )
    }
}

export default GoalItem;