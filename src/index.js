import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { logUser } from './actions';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseapp } from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
const store = createStore(reducer);

firebaseapp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has authed', user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        console.log('not');
        browserHistory.push('/signin');
    }
})


ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>, document.getElementById('root')
)

