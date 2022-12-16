import {applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getImagesReducer } from './Reducers/imageReducers';


const reducer=combineReducers({
    getImages:getImagesReducer
})

const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null

const initState={loginDetales:{userInfo:fromLocalStorage}}

const store = createStore (reducer,initState,composeWithDevTools(applyMiddleware(thunk)))



export default store