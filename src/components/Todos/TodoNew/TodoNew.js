import React from "react";

import "./TodoNew.css";

const todoNew = props => {
  return (
    <div className="todo-new">
      <input
        onKeyUp={props.addTodo}
        className="todo-new__input"
        placeholder="Add Todo"
      />
    </div>
  );
};

export default todoNew;
