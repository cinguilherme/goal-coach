import React, { Component } from 'react';

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

export default App;