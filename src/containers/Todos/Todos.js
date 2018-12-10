import React, { Component } from 'react';

import Todo from '../../components/Todos/Todo/Todo';
import TodoNew from '../../components/Todos/TodoNew/TodoNew';

class Todos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.isAuth ? 'login' : 'no login'}
                Todos
                test
                <TodoNew />
                <Todo />

            </div>
        )
    }
}

export default Todos;