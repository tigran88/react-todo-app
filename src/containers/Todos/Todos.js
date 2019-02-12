import React, { Component } from "react";
import { connect } from 'react-redux';

import Todo from "../../components/Todos/Todo/Todo";
import TodoNew from "../../components/Todos/TodoNew/TodoNew";
import Filters from '../../components/Todos/Filters/Filters';
import * as todoActions from '../../store/actions/index';
import "./Todos.css";

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.onInitTodos();
  }

  render() {
    return (
      <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <TodoNew addTodo={this.props.onTodoAdded}
                 todoValue={this.props.newTodoValue}
                 onTodoValueChange={this.props.onSetNewTodoValue}/>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              edit={this.props.onUpdateTodo}
              deleteTodo={this.props.onTodoDeleted}
              onToggleCompletedChange={this.props.onToggleCompleted}
            />
          );
        })}
        <Filters
            leftItems={this.props.itemLefts}
            filterTodo={this.props.onUpdateFilterTodo}
            clearCompleted={this.props.onClearCompleted} />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todo.todos,
        newTodoValue: state.todo.newTodoValue,
        itemLefts: state.todo.itemLefts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTodos: () => dispatch(todoActions.initTodos()),
        onSetNewTodoValue: (value) => dispatch(todoActions.newTodoValue(value)),
        onTodoAdded: (event) => dispatch(todoActions.setNewTodos(event)),
        onTodoDeleted: (todoId) => dispatch(todoActions.removeTodo(todoId)),
        onToggleCompleted: ((id, completed) => dispatch(todoActions.setToggleCompleted(id, completed))),
        onClearCompleted: (() => dispatch(todoActions.clearCompletedRec())),
        onUpdateTodo: ((id, title) => dispatch(todoActions.updateTodo(id, title))),
        onUpdateFilterTodo: ((type) => dispatch(todoActions.updateFilterTodo(type)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);