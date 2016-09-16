import Todo from './Todo';
import * as _ from 'lodash';

export default class TodoDataInterface {
    todos = [];

    addTodo(descriptionText) {
        const newTodo = new Todo(descriptionText);
        this.todos.push(newTodo);
        return newTodo;
    }

    archiveToggleTodo(todoId) {
        const todoIndex = _.findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone
        }
    }

    removeTodo(todoId) {
        const todoIndex = _.findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }
    }

    getAllTodos() {
        return this.todos.map(function(todo) {
            return todo;
        });
    }
}
