import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
    maidListReducer,
} from './reducers/maidReducers';

import {
    blogListReducer
} from './reducers/blogReducers';

import {
    userLoginReducer,
    userRegisterReducer
} from './reducers/userReducers';

const reducer = combineReducers({
    maidList: maidListReducer,
    blogList: blogListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;