import {ADD_NEW_IMAGE_REQUEST, ADD_NEW_IMAGE_SUCESS, GET_IMAGES_FAIL, GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS} from '../constants/imageConstants'
import { ADD_NEW_USER_FAIL } from '../constants/userConstants'


export const getImagesReducer=(state={},action)=>{
    switch (action.type) {
        case GET_IMAGES_REQUEST:
            return {loading: true}
        case GET_IMAGES_SUCCESS:
            return {loading: false, images:action.payload}  
        case GET_IMAGES_FAIL:
            return {loading: false, error:"server is down! we're working on it.."}               
        default:
            return state
    }
}

export const addNewImageReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_NEW_IMAGE_REQUEST:
            return {loading: true}
        case ADD_NEW_IMAGE_SUCESS:
            return {loading: false, newImage:action.payload}  
        case ADD_NEW_USER_FAIL:
            return {loading: false, error:"server is down! we're working on it.."}               
        default:
            return state
    }
}