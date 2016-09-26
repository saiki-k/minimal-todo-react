import * as actionTypes from '../constants/actionTypes';
import Todo from '../lib/Todo'

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.todo];
        case actionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.todoId);
        case actionTypes.COMPLETE_TODO:
            return state.map(todo => {
                if (todo.id === action.todoId) {
                    return Object.assign({}, todo, {isDone: !todo.isDone})
                }
                return todo
            });
        default:
            return state;
    }
}
