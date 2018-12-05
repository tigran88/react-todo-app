import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navbar.css';

const navbar = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav__link" activeClassName="nav--active"  exact>Home</NavLink>
            <NavLink to="/todos" className="nav__link" activeClassName="nav--active">Todos</NavLink>
            <NavLink to="/sign-in" className="nav__link" activeClassName="nav--active" exact>Sign In</NavLink>
            <NavLink to="/sign-up" className="nav__link" activeClassName="nav--active" exact>Sign Up</NavLink>
        </nav>
    )
};

export default navbar;