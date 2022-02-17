import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducer/AuthReducer';

const rootReducer = combineReducers({ AuthReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));