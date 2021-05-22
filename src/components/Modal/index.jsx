import React from 'react'
import './Modal.css'

export const Modal = ({currentPhoto, setCurrentPhoto}) => {
    return (
        <div onClick={() => {
            setCurrentPhoto()
        }} 
            className="modal">
            <h1>Modal</h1>
            <img src={currentPhoto.photo} alt="" />

        </div>
    )
}