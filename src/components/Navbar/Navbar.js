import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navbar.css';

const navbar = (props) => {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav__link" activeClassName="nav--active"  exact>Home</NavLink>
            {props.isAuth ? (
                <>
                    <NavLink to="/todos" className="nav__link" activeClassName="nav--active">Todos</NavLink>
                    <NavLink to="/logout" className="nav__link" activeClassName="nav--active">Logout</NavLink>
                </>) : (
                <>
                    <NavLink to="/sign-in" className="nav__link" activeClassName="nav--active" exact>Sign In</NavLink>
                    <NavLink to="/sign-up" className="nav__link" activeClassName="nav--active" exact>Sign Up</NavLink>
                </>
            )}
        </nav>
    )
};

export default navbar;