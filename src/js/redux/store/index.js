import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { data, grid, keypad } from '../reducers';

const rootReducer = combineReducers({
    data,
    grid,
    keypad,
});

export function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
    return store;
}
