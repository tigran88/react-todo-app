import React, { Component } from 'react';

class Todos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.isAuth ? 'login' : 'no login'}
                Todos
            </div>
        )
    }
}

export default Todos;