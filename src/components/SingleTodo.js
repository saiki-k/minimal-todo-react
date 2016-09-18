import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class SingleTodo extends React.Component {
    render() {
        return (
            <li>
                <input
                    checked={this.props.isDone}
                    onChange={() => this.props.archiveToggleTodo(this.props.todoId)}
                    type="checkbox"/>
                <label>{this.props.text}{this.props.isDone? " - DONE": ""}</label>
                <button
                    onClick={() => this.props.removeTodo(this.props.todoId)}>
                        Delete
                </button>
            </li>
        );
    }
}
