import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function initializeStore(initialState) {
    return createStore(rootReducer, initialState);
}
