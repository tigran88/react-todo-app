import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            title: '',
            defaultValue: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount() {
        this.setState({
            title: this.props.todo.title,
            defaultValue: this.props.todo.title
        });
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            this.setState({
                editMode: false,
                title: this.state.defaultValue
            })
        }
    };

    handleChangeMode() {
        this.setState({editMode: true});
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleEdit(event) {
        if(event.key === 'Enter') {
            const title = event.target.value;
            this.props.edit(this.props.todo.id, title);
            this.setState({
                editMode: false,
                defaultValue: title
            });
        }
    }

    render() {
        return (
            <div className="todo">
                <input type="checkbox"
                       className="todo__checkbox"
                       defaultChecked={this.props.todo.completed}
                       onChange={() => this.props.onToggleCompletedChange(this.props.todo.id, this.props.todo.completed)} />
                <div className={this.state.editMode ? 'editMode' : ''} ref={node => this.node = node}  >
                    <input className="todo__edit-input"
                           type="text"
                           value={this.state.title}
                           onChange={this.handleTitleChange}
                           onKeyUp={this.handleEdit} />
                    <div className="todo__title" onDoubleClick={this.handleChangeMode.bind(this)}>
                        {this.state.title}
                    </div>
                </div>
                <div className="todo__delete"
                     onClick={() => this.props.deleteTodo(this.props.todo.id)}>&times;</div>
            </div>
        );
    }
}

export default Todo;
