import React, { Component } from 'react';

import { Link } from 'react-router'

import { firebaseapp } from '../firebase';

class SignUp extends Component {

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

    singUp() {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseapp.auth().createUserWithEmailAndPassword(email, password).catch(error => {
            console.log('error', error);
            this.setState({ error });
        });
    }

    render() {
        return (
            <div className="form-inline" style={{ margin: '5%' }}>
                <h2>Sign Up</h2>
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
                        type="button" onClick={() => this.singUp()}>
                        Sing Up
                    </button>

                    <div>
                        {this.state.error.message}
                    </div>
                    <div>
                        <Link to={'/signin'}>Already a suer? Sign In instead</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;