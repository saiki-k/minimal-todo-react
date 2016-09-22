import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class SingleTodo extends React.Component {
    render() {
        return (
            <li class={this.props.isDone? "done": ""}>
                <input
                    checked={this.props.isDone}
                    onChange={() => this.props.completeTodo(this.props.todoId)}
                    type="checkbox"/>
                <label>{this.props.text}</label>
                <button
                    onClick={() => this.props.removeTodo(this.props.todoId)}>
                        Delete
                </button>
            </li>
        );
    }
}
