import React, { Component } from 'react';

import { connect } from 'react-redux';

import { firebaseapp } from '../firebase';

import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {

    signOut() {
        console.log('sign out');
        firebaseapp.auth().signOut();
    }

    render() {
        return (
            <div style={{margin: '10px'}}>

                <h3>Goals</h3>

                <AddGoal />
                <GoalList />

                App from component

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