import React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import VisibleTodoList from './VisibleTodoList';

@observer
export default class TodoApp extends React.Component {

    @observable visibilityFilter = "LEFT_TODOS"
    visibilityFilters = ["ALL_TODOS", "LEFT_TODOS", "COMPLETED_TODOS"];

    changeVisibilityFilter = visibilityFilter => {
        this.visibilityFilter = visibilityFilter;
    }

    @computed get visibleTodos() {
        switch (this.visibilityFilter) {
            case "ALL_TODOS":
                return this.props.dataInterface.todos;
            case "LEFT_TODOS":
                return this.props.dataInterface.todos.filter(todo => todo.isDone === false);
            case "COMPLETED_TODOS":
                return this.props.dataInterface.todos.filter(todo => todo.isDone === true);
            default:
                return this.props.dataInterface.todos;
        }
    }

    render() {
        return (
            <div>
                <h2> Down and Dirty TodoApp built with React </h2>
                <input
                    type="text"
                    placeholder="What do you want todo?"
                    ref={(c => this._todoInputField = c)}
                />
                <button
                    onClick={() => {
                        this.props.dataInterface.addTodo(this._todoInputField.value);
                        this._todoInputField.value = "";
                    }}>
                        Add Todo
                </button>
                <VisibleTodoList
                    visibleTodos={this.visibleTodos}
                    visibilityFilter = {this.visibilityFilter}
                    archiveToggleTodo={this.props.dataInterface.archiveToggleTodo}
                    removeTodo={this.props.dataInterface.removeTodo}
                />
                <div>
                    SHOW:
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
