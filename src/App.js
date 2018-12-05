import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';

const Home = lazy(() => import('./containers/Home/Home'));
const Todos = lazy(() => import('./containers/Todos/Todos'));
const Auth = lazy(() => import('./containers/Auth/Auth'));
const ErrorNotFound = lazy(() => import('./components/ErrorNotFound/ErrorNotFound'));

class App extends Component {
  render() {
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/todos' component={Todos} />
                    <Route path='/:auth' component={Auth} />
                    <Route component={ ErrorNotFound } />
                </Switch>
            </Suspense>
        </Layout>
    );
  }
}

export default App;
