import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="main container">
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout;