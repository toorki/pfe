import axios from 'axios'
import React from 'react'
import FileItem from './FileItem'

const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_name) => {
        axios.get(`http://localhost:8000/`)
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}
export default FileList