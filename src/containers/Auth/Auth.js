import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorNotFound from '../../components/ErrorNotFound/ErrorNotFound';
import axios from 'axios';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
        this.state = {
            isAuth: false
        }
    }

    signIn(email, password) {
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAoMTAGEJASZF8KVCuO65xZcvWyR_Vy-W0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .then((response) => {
                this.props.history.push('/todos');
                this.setState('isAuth', true);
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    signUp(email, password) {
        // let selft = this;
        // axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAoMTAGEJASZF8KVCuO65xZcvWyR_Vy-W0',
        //     {
        //         email: email,
        //         password: password,
        //         returnSecureToken: true
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error.response);
        //         selft.error = error;
        //     });
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