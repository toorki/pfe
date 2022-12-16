import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { getImages } from "../Redux/Actions/imageActions";


function Home(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch (getImages())
    }, [dispatch])
    const {loading, images} = useSelector (state => state.getImages)
return(
    <>
    <Header/>
    {loading && "loading"}
    {images && images.allImages && images.allImages.map(el =><div><h1>{el.name}</h1> <h1>{el.files}</h1> <h1>{el.userId}</h1> <p>{el.description}</p></div>)}
    </>
)

}

export default Home