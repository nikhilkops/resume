import { createStore } from "redux";
import rootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
 
import {  applyMiddleware } from 'redux';
 
import thunk from 'redux-thunk';
// 1

const store = createStore(rootReducer, composeWithDevTools ());
 
export default store;