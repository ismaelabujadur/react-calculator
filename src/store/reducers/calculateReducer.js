import * as types from '../types';
import calculate from '../../utils/calculate';

let initialState = {
    expression: '',
    total: 0
}

const calculateReducer = (state = initialState, action) => {
    let expression;
    switch (action.type) {
        case types.SET_EXPRESSION:
            expression = state.expression + action.payload;
            return {
                ...state,
                expression,
                total: calculate(expression)
            }
        case types.DELETE_CHARACTER:
            expression = state.expression && (state.expression.length > 1) ? state.expression.slice(0, -1) : '';
            return {
                ...state,
                expression: expression,
                total: calculate(expression)
            }
        case types.RESET_EXPRESSION:
            return {
                ...state,
                expression: '',
                total: 0
            }
        default:
            return state;
    }
}

export default calculateReducer;