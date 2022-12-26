import React, {useEffect } from "react";
import { getImages } from "../Redux/Actions/imageActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import FileUpload from "./FileUpload";
import { getUserDetales } from "../Redux/Actions/userActions";
import { useParams } from "react-router-dom";



function Profile (){
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch (getUserDetales(id))
    }, [dispatch])
    const {loading, userDetailes} = useSelector (state => state.getUserDetales)

    return(
        <>
        <Header/>
        <FileUpload/>
        {loading && "loading"} 
        <h1>profile detailes</h1>
            <span>email : {userDetailes && <p>{userDetailes.user.email}</p>} </span>
      
           
        </>
    )


}

export default Profile

/* {userDetailes && userDetailes.user.listOfFiles.map(el=><div>
                <h1>{el.name}</h1><h1>{el.description}</h1><h1>{el.files}</h1><h1>{el.userId}</h1>
            </div>)}*/