import React, { Component } from 'react';

import { completedGoalRef } from '../firebase';

class CompletedGoals extends Component {

    componentDidMount() {

        completedGoalRef.on('value', snap => {
            let completedGoals = [];

            snap.forEach(completedGoal => {
                const { email, title } = completedGoal.val();
                completedGoals.push({ email, title });
            })

            console.log('completed goals so far', completedGoals);
        });

    }

    render() {
        return (
            <div>
                completed goals
            </div>
        )
    }
}

export default CompletedGoals;