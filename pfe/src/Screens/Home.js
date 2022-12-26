import React, {useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
//import App from "../App";
//import { Express } from "express";
import { getImages } from "../Redux/Actions/imageActions";
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
//import { set } from "mongoose";
//import axios from "axios";


function Home(){
   const dispatch = useDispatch()
    useEffect(()=>{
        dispatch (getImages())
    }, [dispatch])
    const {loading, images} = useSelector (state => state.getImages)

    /*state = {file : null}
    handleImages(e)({

        let file = e.target.files[0]
        this.setState({files: files})
    })

    handleUpload(e)({

      let files = this.state.file
      let formdata = new formdata()
      formdata.append('file',file)

      axios({
        url: '/some/api',
        method:'POST',
      }).then((res)=>{

      },(error)=>{

      })
    })*/
return(
    <>
    <Header/>
    </>
)
}

export default Home