import React from 'react';
import VisibleTodoList from './VisibleTodoList';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.visibilityFilters = ["ALL_TODOS", "ACTIVE_TODOS", "COMPLETED_TODOS"];
        this.state = {
            todos: this.props.dataInterface.getAllTodos(),
            visibilityFilter: "ALL_TODOS"
        };
    }

    addTodo = () => {
        if (this._todoInputField.value) {
            this.props.dataInterface.addTodo(this._todoInputField.value);
            this.setState({todos: this.props.dataInterface.getAllTodos()});
            this._todoInputField.value = '';
        }
    }

    completeTodo = todoId => {
        this.props.dataInterface.completeTodo(todoId);
        this.setState({todos: this.props.dataInterface.getAllTodos()});
    }

    removeTodo = todoId => {
        this.props.dataInterface.removeTodo(todoId);
        this.setState({todos: this.props.dataInterface.getAllTodos()});
    }

    changeVisibilityFilter = visibilityFilter => {
        this.setState({visibilityFilter: visibilityFilter});
    }

    visibleTodos = () => {
        switch (this.state.visibilityFilter) {
            case "ALL_TODOS":
                return this.state.todos;
            case "ACTIVE_TODOS":
                return this.state.todos.filter(todo => todo.isDone === false);
            case "COMPLETED_TODOS":
                return this.state.todos.filter(todo => todo.isDone === true);
            default:
                return this.state.todos;
        }
    }

    render() {

        let visibleTodos = this.visibleTodos();

        return (
            <div>
                <h2> Minimal Todo App built with React </h2>
                <input
                    type="text"
                    placeholder="What do you want todo?"
                    ref={(c => this._todoInputField = c)}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <VisibleTodoList
                    visibleTodos={visibleTodos}
                    visibilityFilter = {this.state.visibilityFilter}
                    completeTodo={this.completeTodo}
                    removeTodo={this.removeTodo}
                />
                <div>
                    {
                        this.visibilityFilters.map(
                            visibilityFilter =>
                                <button
                                    key={visibilityFilter}
                                    onClick={() => this.changeVisibilityFilter(visibilityFilter)}>
                                        {visibilityFilter.replace("_", " ")}
                                </button>
                        )
                    }
                </div>

            </div>
        );
    }
}
