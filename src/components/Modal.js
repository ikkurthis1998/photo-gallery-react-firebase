import React from 'react';
import './Modal.css';

function Modal({selectedImage, setSelectedImage}) {

    const clickHandle = (event) => {
        if (event.target.classList.contains('modal-container')) {
            setSelectedImage(null);
        }
    }

    return (
        <div className="modal-container"  onClick={clickHandle}>
            <img src={selectedImage.data().url} className="modal-image" alt={selectedImage.id} />
        </div>
    )
}

export default Modal
