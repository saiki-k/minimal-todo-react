import React from 'react';

export default class SingleTodo extends React.Component {
    render() {
        return (
            <li className={this.props.isDone? "done": ""}>
                <input
                    checked={this.props.isDone}
                    onChange={() => this.props.completeTodo(this.props.todoId)}
                    type="checkbox"/>
                <label>{this.props.text}</label>
                <button onClick={() => this.props.removeTodo(this.props.todoId)}>
                        Delete
                </button>
            </li>
        );
    }
}
