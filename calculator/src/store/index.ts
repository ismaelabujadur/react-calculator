import { createStore, combineReducers, compose } from "redux";
import calculateReducer from "./reducers/calculateReducer";

const rootReduceer = combineReducers({
    calculator: calculateReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReduceer,
    composeEnhancers()
);

export const getExpression = (state: { calculator: { expression: any; total: any; }; }) => {
    return state.calculator.expression;
}

export const getTotal = (state: { calculator: { expression: any; total: any; }; }) => {
    return state.calculator.total;
}