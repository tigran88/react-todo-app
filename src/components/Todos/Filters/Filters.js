import React from 'react';

import './Filters.css';

const filters = (prpos) => {
    return (
        <div className="todo-filters">
            <div className="todo-filters__letf-item">{prpos.leftItems}</div>
            <button className="todo-filters__all" onClick={() => prpos.filterTodo('all')}>All</button>
            <button className="todo-filters__active" onClick={() => prpos.filterTodo('active')}>Activ</button>
            <button className="todo-filters__completed" onClick={() => prpos.filterTodo('completed')}>Completed</button>
            <button className="todo-filters__clear-completed" onClick={prpos.clearCompleted}>Clear Completed</button>
        </div>
    )
};

export default filters;