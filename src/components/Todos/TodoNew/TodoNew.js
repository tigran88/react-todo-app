import React from 'react';

import './TodoNew.css';

const todoNew = () => {
    return (
        <div className="todo-new">
            <input className="todo-new__input" placeholder="Add Todo" />
        </div>
    );
}

export default todoNew;