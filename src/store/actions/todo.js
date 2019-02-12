import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const addTodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        todo: todo
    }
};

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
};

export const newTodoValue = (event) => {
    return {
        type: actionTypes.SET_NEW_TODO_VALUE,
        value: event.target.value
    }
};

export const setTodos = (todos) => {
    return {
        type: actionTypes.SET_TODOS,
        todos: todos
    }
};

export const initTodos = () => {
    return dispatch => {
        axios.get("todos.json").then(todos => {
            let allTodos = [];

            for (var key in todos.data) {
                allTodos.push({ id: key, title: todos.data[key]["title"], completed: todos.data[key]['completed'] });
            }

            dispatch(setTodos(allTodos));
            dispatch(getItemLefts());
        });
    }
};

export const setNewTodos = (event) => {
    if (event.key === "Enter") {
        const todoTitle = event.target.value;
        return dispatch => {
            axios
                .post("todos.json", {title: todoTitle, completed: false})
                .then(res => {
                    const todo = {id: res.data.name, title: todoTitle, completed: false};
                    dispatch(addTodo(todo));
                })
                .catch(error => console.log(error));
        }
    }
    return dispatch => {};
};

export const removeTodo = (id) => {
  return dispatch => {
      axios
          .delete("todos/" + id + ".json")
          .then(() => {
              dispatch(deleteTodo(id))
          })
          .catch(error => console.log(error));
  }
};

export const toggleCompleted = (id, completed) => {
    return {
        type: actionTypes.SET_TOGGLE_COMPLETED,
        id: id,
        completed
    }
};

export const setToggleCompleted = (id, completed) => {
    return dispatch => {
        axios.patch('todos/' + id + '.json', {completed: !completed})
            .then(res => {
                dispatch(toggleCompleted(id, completed))
                dispatch(getItemLefts())
            })
            .catch(error => console.log(error));
    }
};

export const clearCompletedRec = () => {
    return dispatch => {
        axios.get('todos.json')
            .then(todos => {
                for (var key in todos.data) {
                    if (todos.data[key]['completed']) {
                        axios
                            .delete("todos/" + key + ".json")
                            .then(() => {
                                dispatch(initTodos());
                            })
                            .catch(error => console.log(error));
                    }
                }
            })
            .catch(error => console.log(error));
    }
};

export const editTodo = () => {
    return {
        type: actionTypes.EDIT_TODO
    }
};

export const updateTodo = (id, title) => {
    return dispatch => {
        axios
            .put('todos/' + id + '.json', {title})
            .then(() => dispatch(editTodo()))
            .catch(error => console.log(error));
    };
};

export const setItemLefts = (res) => {
    return {
        type: actionTypes.SET_ITEM_LEFTS,
        res: res
    }
};

export const getItemLefts = () => {
    return dispatch => {
        axios.get('todos.json?orderBy="completed"&equalTo=false')
            .then(res => {
                dispatch(setItemLefts(res))
            })
            .catch(error => console.log(error));
    }
};

export const updateFilterTodo = (type) => {
    return dispatch => {
        let filterUrl = '';
        switch (type) {
            case 'completed':
                filterUrl = '?orderBy="completed"&equalTo=true';
                break;
            case 'active':
                filterUrl = '?orderBy="completed"&equalTo=false';
                break;
            default:
        }
        axios.get('todos.json' + filterUrl).then(todos => {
            let allTodos = [];

            for (var key in todos.data) {
                allTodos.push({ id: key, title: todos.data[key]["title"], completed: todos.data[key]['completed'] });
            }

            dispatch(setTodos(allTodos));

        }).catch(error => console.log(error));
    };
};