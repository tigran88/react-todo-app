import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = lazy(() => import('../Home/Home'));
const Todos = lazy(() => import('../Todos/Todos'));
const ErrorNotFound = lazy(() => import('../../components/ErrorNotFound/ErrorNotFound'));

const layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' component={ Home } exact/>
                        <Route path='/todos' component={ Todos } />
                        <Route component={ErrorNotFound} />
                    </Switch>
                </Suspense>
            </main>
            <Footer />
        </>
    )
};

export default layout;