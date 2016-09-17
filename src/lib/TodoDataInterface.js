import Todo from './Todo';
import * as _ from 'lodash';

export default class TodoDataInterface {
    constructor() {
        this.todos = [];
        this.loadFromLocalStorage();
    }

    saveToLocalStorage() {
        if (window.localStorage && this.todos) {
            let jsonTodos = this.todos.map(todo => todo.serialize());
            localStorage.setItem('minimalReactTodos', JSON.stringify(jsonTodos));
        }
    }

    loadFromLocalStorage() {
        if (window.localStorage) {
            let todos = localStorage.getItem('minimalReactTodos');
            if (todos) {
                todos = JSON.parse(todos);
                this.todos = todos.map(todo => Todo.deserialize(todo));
            }
        }
    }

    addTodo(descriptionText) {
        const newTodo = new Todo(descriptionText);
        this.todos.push(newTodo);
        this.saveToLocalStorage();
        return newTodo;
    }

    archiveToggleTodo(todoId) {
        const todoIndex = _.findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone
        }
        this.saveToLocalStorage();
    }

    removeTodo(todoId) {
        const todoIndex = _.findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }
        this.saveToLocalStorage();
    }

    getAllTodos() {
        return this.todos.map(todo => todo);
    }
}
