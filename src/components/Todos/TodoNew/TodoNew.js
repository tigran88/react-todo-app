import React from "react";

import "./TodoNew.css";

const todoNew = props => {
  return (
    <div className="todo-new">
      <input
        onKeyUp={props.addTodo}
        className="todo-new__input"
        placeholder="Add Todo"
        value={props.todoValue}
        onChange={props.onTodoValueChange}
      />
    </div>
  );
};

export default todoNew;
