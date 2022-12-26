import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import {MDBBtn} from 'mdb-react-ui-kit'
 
function FileUpload() {
 
    const [file, setFile] = useState([]);
    
    //const [fileName, setFileName] = useState("");
 
    const saveFile = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0]);
        //setFileName(e.target.files[0].name);
    }; 
 
    const uploadFile = async (e) => { console.log("hello")
        const formData = new FormData();
        formData.append("files", file);
        //formData.append("fileName", fileName);
        console.log(file)
        
        const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
        try {
            const res = await axios.post(
                "http://localhost:8000/imageAPI/newImage",
            formData, config 
        );
        } catch (ex) {
        }
    };
    
        return (
            <div className="upld">
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>choose your file from here</Form.Label>
                    <Form.Control type="file" size="lg" onChange={saveFile} />  
                    <div>{file && `${file.name} - ${file.files} - ${file.description}`}</div>  
                </Form.Group>
                <button className='w-25 mb-4' size='md' onClick={uploadFile}>Upload</button>
                <img scr={file}/>
            </div>
        );
    }

 
export default FileUpload;