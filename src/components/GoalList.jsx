import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goalRef } from '../firebase';

import { setGoals } from '../actions';

import GoalItem from './GoalItem';

class GoalList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

        goalRef.on('value', snap => {

            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                const key = goal.key;
                goals.push({ email, title, key});
            });
            console.log('goals', goals);
            this.props.setGoals(goals);
        })
    }

    render() {
        console.log('this.props.goals', this.props.goals);
        return (
            <div>
                {
                    this.props.goals.map((goal, index) => {
                        return(
                            <GoalItem key={index} goal={goal} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    };
}

export default connect(mapStateToProps, { setGoals })(GoalList);