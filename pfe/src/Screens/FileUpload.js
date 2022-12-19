import React from 'react'
import axios from 'axios';
import { useState } from 'react';
 
function FileUpload() {
 
    const [file, setFile] = useState([]);
    //const [fileName, setFileName] = useState("");
 
    const saveFile = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0]);
        //setFileName(e.target.files[0].name);
    }; 
 
    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("files", file);
        //formData.append("fileName", fileName);
        const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
        try {
            const res = await axios.post(
                "http://localhost:8000/imageAPI/newImage",
            formData, config 
        );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
    };
 
    
        return (
            <div className="App">
                <input type="file" onChange={saveFile} />
                <button onClick={uploadFile}>Upload</button>
            </div>
        );
    }

 
export default FileUpload;