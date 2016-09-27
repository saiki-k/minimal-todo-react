import * as actionTypes from '../constants/actionTypes';

const initialState = "ACTIVE_TODOS";

export default function visibilityFilter(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_VISIBILITY_FILTER:
            return action.visibilityFilter;
        default:
            return state;
    }
}
