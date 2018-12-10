import React from 'react';

import './Todo.css';

const todo = () => {
    return (
        <div className="todo">
            <input type="checkbox" className="todo__checkbox"  />
            <div className="todo__name">todo</div>
            <div className="todo__delete">&times;</div>
        </div>
    );
}

export default todo;