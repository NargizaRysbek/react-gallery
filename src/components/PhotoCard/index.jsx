import React from 'react'
import './PhotoCard.css'

export const PhotoCard = ({photo, setCurrentPhoto}) => {
    return (
        <div onClick={() => {
            setCurrentPhoto(photo)
        }} 
        className="photo-card" 
        style={{backgroundImage: `url(${photo.photo})`}}>
            PhotoCard
        </div>
    )
}