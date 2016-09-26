import * as actionTypes from '../constants/actionTypes'

export function addTodo(todo) {
    return {
        type: actionTypes.ADD_TODO,
        todo
    }
}

export function removeTodo(todoId) {
    return {
        type: actionTypes.REMOVE_TODO,
        todoId
    }
}

export function completeTodo(todoId) {
    return {
        type: actionTypes.COMPLETE_TODO,
        todoId
    }
}

export function changeVisibilityFilter(visibilityFilter) {
    return {
        type: actionTypes.CHANGE_VISIBILITY_FILTER,
        visibilityFilter
    }
}
