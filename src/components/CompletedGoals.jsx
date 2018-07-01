import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completedGoalRef } from '../firebase';


import { setCompleteGoals } from '../actions';

class CompletedGoals extends Component {

    componentDidMount() {

        completedGoalRef.on('value', snap => {
            let completedGoals = [];

            snap.forEach(completedGoal => {
                const { email, title } = completedGoal.val();
                completedGoals.push({ email, title });
            })
            this.props.setCompleteGoals(completedGoals);
        });

    }

    clearAllCompleted() {
        completedGoalRef.set([]);
    }

    render() {
        return (
            <div>
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        const { title, email } = completeGoal;
                        return (
                            <div key={index}>
                                <strong>{title} </strong>
                                <span> completed by <em>{email}</em></span>
                            </div>
                        )
                    })
                }

                <button 
                    className="btn btn-danger"
                    onClick={() => this.clearAllCompleted()} >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeGoals } = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleteGoals })(CompletedGoals);