import React, { Component } from 'react';

import { connect } from 'react-redux';

import { completedGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {

    compleGoal() {
        const { email } = this.props.user;
        const { title, key } = this.props.goal;

        console.log('email', email, 'title', title);
        goalRef.child(key).remove();
        completedGoalRef.push({ email, title, key });
    }

    render() {
        const { title, email } = this.props.goal;
        return (
            <div
                style={{ margin: '10px' }}>
                <strong> {title} </strong>
                <span> from <em>{email}</em>  </span>
                <button className="btn btn-sm btn-primary"
                    onClick={() => this.compleGoal()}>
                    Complete!
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);