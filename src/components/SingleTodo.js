import React from 'react';

export default class SingleTodo extends React.Component {
    render() {
        return (
            <li>
                <input
                    data-id={this.props.todoId}
                    checked={this.props.isDone}
                    onChange={() => this.props.archiveTodo(this.props.todoId)}
                    type="checkbox"/>
                <label>{this.props.text}{this.props.isDone? " - DONE": ""}</label>
                <button
                    data-id={this.props.todoId}
                    onClick={() => this.props.removeTodo(this.props.todoId)}>
                        Delete
                </button>
            </li>
        );
    }
}
