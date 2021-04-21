import React from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

function AddImage() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg']
  
    const inputHandler = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile && types.includes(selectedFile.type)) {
        setFile(selectedFile);
        } else {
        setFile(null);
        setError("Picture of png, jpeg, jpg format");
        }
    }

    return (
        <div>
            <label className="input-button">
                <i className="bi bi-cloud-plus add-icon"></i>
                <input style={{display: "none"}} type="file" onInput={(e) => inputHandler(e)} />
            </label>
            <div>
                { file && <p>{ file.name }</p>}
                { error && <p>{ error }</p>}
            </div>
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    )
}

export default AddImage
