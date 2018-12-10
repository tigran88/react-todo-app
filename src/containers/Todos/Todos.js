import React, { Component } from "react";

import Todo from "../../components/Todos/Todo/Todo";
import TodoNew from "../../components/Todos/TodoNew/TodoNew";

import './Todos.css';

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <TodoNew />
        <Todo />
      </div>
    );
  }
}

export default Todos;