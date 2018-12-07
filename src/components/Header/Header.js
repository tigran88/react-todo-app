import React from 'react';

import './Header.css';
import Navbar from './../Navbar/Navbar';

const header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">Logo</div>
                <Navbar isAuth={props.isAuth} />
            </div>
        </header>
    )
};

export default header;