import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} />
                <main className="main container">
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout;