import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorNotFound from '../../components/ErrorNotFound/ErrorNotFound';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

class Auth extends Component {

    constructor(props) {
        super(props);
    }

    signIn(email, password) {
        console.log(email);
        console.log(password);
    }

    signUp(email, password) {
        console.log(email);
        console.log(password);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/sign-in' render={() => (<SignIn signIn={this.signIn.bind(this)} />)} />
                    <Route path='/sign-up' render={() => (<SignUp signUp={this.signUp.bind(this)} />)} />
                    <Route component={ ErrorNotFound } />
                </Switch>
            </div>
        )
    }
}

export default Auth;