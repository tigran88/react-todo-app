import React from 'react';
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink> |
            <NavLink to="/todos" activeClassName="active">Todos</NavLink> |
            <NavLink to="/sign-in" activeClassName="active" exact>Sign In</NavLink> |
            <NavLink to="/sign-up" activeClassName="active" exact>Sign Up</NavLink>
        </nav>
    )
};

export default navbar;