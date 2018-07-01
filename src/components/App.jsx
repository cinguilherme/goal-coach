import React, { Component } from 'react';

import { connect } from 'react-redux';

import { firebaseapp } from '../firebase';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompletedGoals from './CompletedGoals';

class App extends Component {

    signOut() {
        console.log('sign out');
        firebaseapp.auth().signOut();
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>

                <h3>Goal Coach</h3>

                <AddGoal />
                <hr />

                <h4>Goals</h4>
                <GoalList />
                <hr />

                <h4>Completed Goals</h4>
                <CompletedGoals />
                <hr />

                <button className="btn btn-danger"
                    onClick={() => this.signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null)(App);