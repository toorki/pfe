import { ADD_NEW_IMAGE_FAIL, ADD_NEW_IMAGE_REQUEST, ADD_NEW_IMAGE_SUCESS, GET_IMAGES_FAIL, 
    GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS } from "../constants/imageConstants"
import axios from "axios"



export const getImages=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_IMAGES_REQUEST})
        const {data} = await axios.get('http://localhost:8000/imageAPI/getImages')
        console.log(data)
        dispatch({type:GET_IMAGES_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:GET_IMAGES_FAIL})
    }
}

export const addNewImage=(newImage)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_NEW_IMAGE_REQUEST})
        const {data} = await axios.post('http://localhost:8000/imageAPI/newImage', newImage)
        dispatch({type:ADD_NEW_IMAGE_SUCESS, payload:data})
    } catch (error) {
        dispatch ({type:ADD_NEW_IMAGE_FAIL})
    }
}