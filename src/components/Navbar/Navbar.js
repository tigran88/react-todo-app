import React from 'react';
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink> |
            <NavLink to="/todos" activeClassName="active">Todos</NavLink>
        </nav>
    )
};

export default navbar;