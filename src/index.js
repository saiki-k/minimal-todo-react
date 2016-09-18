import React from 'react';
import ReactDOM from 'react-dom';

import initializeStore from './store/initializeStore';
import TodoApp from './components/TodoApp/';

const store = initializeStore();
ReactDOM.render(<TodoApp store={store}/>, document.getElementById('app'));
