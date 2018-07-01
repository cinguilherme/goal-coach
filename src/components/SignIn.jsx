import React, { Component } from 'react';

import { Link } from 'react-router';

import { firebaseapp } from '../firebase';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        const { email, password } = this.state;
        console.log(email, password);
        firebaseapp.auth().signInWithEmailAndPassword(email, password).catch(error => {
            this.setState({ error });
        })
    }

    render() {
        return (
            <div className="form-inline" style={{ margin: '5%' }}>
                <h2>Sign In</h2>
                <div className="form-group">

                    <input type="text" style={{ marginRight: '5px' }}
                        className="form-control"
                        placeholder="email@email.com"
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />

                    <input type="password" style={{ marginRight: '5px' }}
                        className="form-control"
                        placeholder="password"
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />

                    <button className="btn btn-primary"
                        type="button" onClick={() => this.signIn()}>
                        Sing In
                    </button>

                    <div>
                        {this.state.error.message}
                    </div>
                    <div>
                        <Link to={'/signup'}>Sign Up instead</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;