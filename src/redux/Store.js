import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { globalDataReducer } from './GlobalReducer';

var store = createStore(
    combineReducers({ globalData: globalDataReducer }),
    applyMiddleware(thunk),
);

export default store;
