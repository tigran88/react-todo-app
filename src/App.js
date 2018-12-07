import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import AuthService from './containers/Auth/services/AuthService';

const Home = lazy(() => import('./containers/Home/Home'));
const Todos = lazy(() => import('./containers/Todos/Todos'));
const Auth = lazy(() => import('./containers/Auth/Auth'));
const ErrorNotFound = lazy(() => import('./components/ErrorNotFound/ErrorNotFound'));

class App extends Component {
    constructor(props) {
        super(props);
        this.auth = new AuthService();
    }

    render() {
        return (
            <Layout isAuth={this.auth.isAuth()}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' render={() => <Home isAuth={this.auth.isAuth()}/>} exact/>
                        <Route path='/todos' render={
                            this.auth.isAuth() ?
                                () => <Todos isAuth={this.auth.isAuth()}/>
                                :
                                () => <Redirect to={{pathname: '/'}}/>
                        } />
                        <Route path="/logout" render={(history) => this.auth.logout(history)} />
                        <Route path='/:auth' component={Auth} />
                        <Route component={ ErrorNotFound } />
                    </Switch>
                </Suspense>
            </Layout>
        );
    }
}

export default App;
