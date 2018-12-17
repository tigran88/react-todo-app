import React, { Component } from "react";

import axios from "../../axios";

import Todo from "../../components/Todos/Todo/Todo";
import TodoNew from "../../components/Todos/TodoNew/TodoNew";

import "./Todos.css";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
        newTodoValue: '',
        todos: []
    };

    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.toggleCompletedChange = this.toggleCompletedChange.bind(this);
    this.newTodoValueChangeHandler = this.newTodoValueChangeHandler.bind(this);
    this.editTodoHandle = this.editTodoHandle.bind(this);
  }

  componentDidMount() {
    axios.get("todos.json").then(todos => {
      let allTodos = [];

      for (var key in todos.data) {
        allTodos.push({ id: key, title: todos.data[key]["title"], completed: todos.data[key]['completed'] });
      }

      this.setState({ todos: allTodos });
    });
  }

  newTodoValueChangeHandler(event) {
      this.setState({newTodoValue: event.target.value});
  }

  addTodoHandler(event) {
    let todos = [...this.state.todos];
    if (event.key === "Enter") {
      const todoTitle = event.target.value;
      axios
        .post("todos.json", { title: todoTitle, completed: false })
        .then(res => {
          todos.push({ id: res.data.name, title: todoTitle, completed: false });
          this.setState({newTodoValue: ''});
          this.setState({ todos: todos });
        })
        .catch(error => console.log(error));
    }
  }

    toggleCompletedChange(id, completed) {
        axios.patch('todos/' + id + '.json', {completed: !completed})
            .then(res => {
                const todos = [];
                this.state.todos.map(todo => {
                    if (todo.id == id) {
                        todo.completed = !todo.completed;
                    }
                    todos.push(todo);
                });
                this.setState({todos: todos});
            })
            .catch(error => console.log(error));
    }

    editTodoHandle(id, title) {
      axios
          .put('todos/' + id + '.json', {title})
          .then(() => console.log('Todo successfully updated!'))
          .catch(error => console.log(error));
    }

  deleteTodoHandler(id) {
    axios
      .delete("todos/" + id + ".json")
      .then(() => {
        const todos= [];
        this.state.todos.map(todo => {
          if (todo.id !== id) {
            todos.push(todo);
          }
        });
        this.setState({todos: todos});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <TodoNew addTodo={this.addTodoHandler}
                 todoValue={this.state.newTodoValue}
                 onTodoValueChange={this.newTodoValueChangeHandler}/>
        {this.state.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              edit={this.editTodoHandle}
              deleteTodo={this.deleteTodoHandler}
              onToggleCompletedChange={this.toggleCompletedChange}
            />
          );
        })}
      </div>
    );
  }
}

export default Todos;