import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    isAuth: false,
    newTodoValue: '',
    todos: [],
    itemLefts: 0
};

const addTodo = (state, action) => {
    const todos = [
        ...state.todos,
        { id: action.todo.id, title: action.todo.title, completed: false }
    ];

    return updateObject(state, { newTodoValue: '', todos });
};

const deleteTodo = (state, action) => {
    const todos= [];
    state.todos.map(todo => {
        if (todo.id !== action.id) {
            todos.push(todo);
        }
    });
    return updateObject(state, {todos});
};

const setNewTodos = (state, action) => {
    return updateObject(state, {newTodoValue: action.value,todos: state.todos})
};

const toggleCompleted = (state, action) => {
    return state;
};

const setLeftItems = (state, action) => {
    let itemOrItems = '';
    const itemLeftsCount = Object.keys(action.res.data).length;
    if (itemLeftsCount > 1) {
        itemOrItems = 's';
    }

    const itemLefts = itemLeftsCount + ' item' + itemOrItems + ' left';
    return updateObject(state, {itemLefts: itemLefts})
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_TODOS:
            return updateObject(state, {todos: action.todos})
        case actionType.SET_NEW_TODO_VALUE:
            return setNewTodos(state, action);
        case actionType.ADD_TODO:
            return addTodo(state, action);
        case actionType.DELETE_TODO:
            return deleteTodo(state, action);
        case actionType.NEW_TODO_VALUE:
            return updateObject(state, {newTodoValue: ''});
        case actionType.SET_TOGGLE_COMPLETED:
            return toggleCompleted(state, action);
        case actionType.SET_ITEM_LEFTS:
            return setLeftItems(state, action);
        default:
            return state;
    }
};

export default reducer;