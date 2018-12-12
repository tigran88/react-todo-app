import React from 'react';

import './Todo.css';

const todo = (props) => {
    return (
        <div className="todo">
            <input type="checkbox" className="todo__checkbox" defaultChecked={props.todo.completed} />
            <div className="todo__name">{props.todo.title}</div>
            <div className="todo__delete" onClick={() => props.deleteTodo(props.todo.id)}>&times;</div>
        </div>
    );
}

export default todo;