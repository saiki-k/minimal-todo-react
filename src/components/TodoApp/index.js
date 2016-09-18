import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TodoApp from './presenter';

function mapStateToProps(state) {
    const { todos, visibilityFilter } = state;
    return {
        todos,
        visibilityFilter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: bindActionCreators(actions.addTodo, dispatch),
        removeTodo: bindActionCreators(actions.removeTodo, dispatch),
        archiveTodo: bindActionCreators(actions.archiveTodo, dispatch),
        changeVisibilityFilter: bindActionCreators(actions.changeVisibilityFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
