import {applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { addNewImageReducer, getImagesReducer } from './Reducers/imageReducers';
import { addNewUserReducer, loginReducer, getUserDetalesReducer } from './Reducers/userReducers';


const reducer=combineReducers({
    getImages:getImagesReducer,
    addNewUser:addNewUserReducer,
    loginDetales:loginReducer,
    getUserDetales:getUserDetalesReducer,
    addNewImage:addNewImageReducer,
})

const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null

const initState={loginDetales:{user:fromLocalStorage}}

const store = createStore (reducer,initState,composeWithDevTools(applyMiddleware(thunk)))



export default store