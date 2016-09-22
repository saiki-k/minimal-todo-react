import { observable, action } from 'mobx';
import Todo from './Todo';
import { findIndex } from 'lodash';

export default class TodoDataInterface {
    @observable todos = [];

    constructor() {
        this.loadFromLocalStorage();
        this.completeTodo = this.completeTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    @action
    saveToLocalStorage() {
        if (window.localStorage && this.todos) {
            let jsonTodos = this.todos.map(todo => todo.serialize());
            localStorage.setItem('minimalReactTodos', JSON.stringify(jsonTodos));
        }
    }

    @action
    loadFromLocalStorage() {
        if (window.localStorage) {
            let todos = localStorage.getItem('minimalReactTodos');
            if (todos) {
                todos = JSON.parse(todos);
                this.todos = todos.map(todo => Todo.deserialize(todo));
            }
        }
    }

    @action
    addTodo(descriptionText) {
        if (descriptionText) {
            const newTodo = new Todo(descriptionText);
            this.todos.push(newTodo);
            this.saveToLocalStorage();
            return newTodo;
        }
    }

    @action
    completeTodo(todoId) {
        const todoIndex = findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone
        }
        this.saveToLocalStorage();
    }

    @action
    removeTodo(todoId) {
        const todoIndex = findIndex(this.todos, (todo) => todo.id === todoId);
        if (todoIndex > -1) {
            this.todos.splice(todoIndex, 1);
        }
        this.saveToLocalStorage();
    }
}
