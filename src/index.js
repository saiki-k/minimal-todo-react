import React from 'react';
import ReactDOM from 'react-dom';

import initializeStore from './store/initializeStore';
import TodoApp from './components/TodoApp/';

const store = initializeStore({todos: [], visibilityFilter: "ALL_TODOS"});
ReactDOM.render(<TodoApp store={store}/>, document.getElementById('app'));
