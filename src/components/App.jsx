import React, { Component } from 'react';

import { connect } from 'react-redux';

import { firebaseapp } from '../firebase';

class App extends Component {

    signOut(){
        console.log('sign out');
        firebaseapp.auth().signOut();
    }

    render(){
        return(
            <div>App from component

                <button className="btn btn-danger"
                    onClick={() => this.signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);