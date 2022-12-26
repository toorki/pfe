import { ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST, ADD_NEW_USER_SUCCESS, GET_USER_DETALES_FAIL, GET_USER_DETALES_REQUEST,
     GET_USER_DETALES_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constants/userConstants";




export const addNewUserReducer=(state={}, action)=>{
    switch (action.type) {
        case ADD_NEW_USER_REQUEST:
            return{loading:true}
        case ADD_NEW_USER_SUCCESS: 
            return{loading: false, message: action.payload}
        case ADD_NEW_USER_FAIL:
            return {loading: false, error:"server is down! we're working on it.."} 
        default:
            return state
    }
}

export const loginReducer=(state={}, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{loading:true}
        case LOGIN_SUCCESS: 
            return{loading: false, user: action.payload}
        case LOGIN_FAIL:
            return {loading: false, error:"server is down! we're working on it.."} 
        case LOGOUT:
            return {}
        default:
            return state
    }
}

export const getUserDetalesReducer=(state={}, action)=>{
    switch (action.type) {
        case GET_USER_DETALES_REQUEST:
            return{loading:true}
        case GET_USER_DETALES_SUCCESS: 
            return{loading: false, userDetailes: action.payload}
        case GET_USER_DETALES_FAIL:
            return {loading: false, error:"server is down! we're working on it.."} 
        default:
            return state
    }
}