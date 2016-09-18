import React from 'react';
import ReactDOM from 'react-dom';

import TodoDataInterface from './lib/TodoDataInterface';
import TodoApp from './components/TodoApp';

const todoDataInterface = new TodoDataInterface();
ReactDOM.render(
    <TodoApp dataInterface={todoDataInterface}/>,
    document.getElementById('app')
);
