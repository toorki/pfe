import { GET_IMAGES_FAIL, GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS } from "../constants/imageConstants"
import axios from "axios"



export const getImages=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_IMAGES_REQUEST})
        const {data} = await axios.get('http://localhost:6000/imageAPI/getImages')
        console.log(data)
        dispatch({type:GET_IMAGES_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:GET_IMAGES_FAIL})
    }

}