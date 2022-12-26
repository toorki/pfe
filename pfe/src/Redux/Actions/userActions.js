import axios from "axios"
import { ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST, ADD_NEW_USER_SUCCESS, 
    GET_USER_DETALES_FAIL, GET_USER_DETALES_REQUEST, GET_USER_DETALES_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constants/userConstants"



export const addNewUser=(newUser)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_NEW_USER_REQUEST})
        const {data} = await axios.post('http://localhost:8000/userAPI/newUser', newUser)
        dispatch({type:ADD_NEW_USER_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:ADD_NEW_USER_FAIL})
    }
}

export const login = (userCred) => async(dispatch)=>{
    try {
        dispatch ({type:LOGIN_REQUEST})
        const {data} = await axios.post('http://localhost:8000/userAPI/login', userCred)
        localStorage.setItem('cred', JSON.stringify(data))
        dispatch ({type:LOGIN_SUCCESS, payload:data})
    } catch (error) {
        dispatch ({type:LOGIN_FAIL})
    }
}

export const logout = () =>(dispatch)=>{
    dispatch ({type:LOGOUT})
    localStorage.removeItem('cred')
}


export const getUserDetales = (id) =>async(dispatch)=>{
    try {
        dispatch({type:GET_USER_DETALES_REQUEST})
        const {data} = await axios.get(`http://localhost:8000/userAPI/${id}`)
        dispatch({type:GET_USER_DETALES_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:GET_USER_DETALES_FAIL})
    }
}