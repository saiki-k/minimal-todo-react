import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

export default function initializeStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
