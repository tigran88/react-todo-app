import React from 'react';

import './Filters.css';

const filters = (prpos) => {
    return (
        <div className="todo-filters">
            <div className="todo-filters__letf-item">1 item left</div>
            <button className="todo-filters__all">All</button>
            <button className="todo-filters__active">Active</button>
            <button className="todo-filters__completed">Completed</button>
            <button className="todo-filters__clear-completed">Clear Completed</button>
        </div>
    )
};

export default filters;