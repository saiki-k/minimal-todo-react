import React from 'react';
import VisibleTodoList from '../VisibleTodoList';
import visibilityFilters from '../../constants/visibilityFilters'

import Todo from '../../lib/Todo';

function visibleTodos(todos, visibilityFilter) {
    switch (visibilityFilter) {
        case "ALL_TODOS":
            return todos;
        case "ACTIVE_TODOS":
            return todos.filter(todo => todo.isDone === false);
        case "COMPLETED_TODOS":
            return todos.filter(todo => todo.isDone === true);
        default:
            return todos;
    }
}

export default class TodoApp extends React.Component {
    render() {

        const {
            todos,
            visibilityFilter,
            addTodo,
            removeTodo,
            completeTodo,
            changeVisibilityFilter
        } = this.props;

        let visibleTodosArray = visibleTodos(todos, visibilityFilter);

        return (
            <div>
                <h2> Down and Dirty TodoApp built with React and Redux </h2>
                <input
                    type="text"
                    placeholder="What do you want todo?"
                    ref={(c => this._todoInputField = c)}
                />
                <button
                    onClick={() => addTodo(new Todo(this._todoInputField.value))}>
                        Add Todo
                </button>
                <VisibleTodoList
                    visibleTodos={visibleTodosArray}
                    visibilityFilter = {visibilityFilter}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
                <div>
                    SHOW:
                    {
                        visibilityFilters.map(
                            visibilityFilter =>
                                <button
                                    key={visibilityFilter}
                                    onClick={() => changeVisibilityFilter(visibilityFilter)}>
                                        {visibilityFilter.replace("_", " ")}
                                </button>
                        )
                    }
                </div>

            </div>
        );
    }
}
