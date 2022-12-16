import {GET_IMAGES_FAIL, GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS} from '../constants/imageConstants'


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