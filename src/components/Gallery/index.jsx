import React, { useState } from 'react'
import './Gallery.css'
import {data} from '../../data'
import { PhotoCard } from '../PhotoCard'
import { Modal } from '../Modal'

export const Gallery = () => {

    const [currentPhoto, setCurrentPhoto] = useState() //по умолчанию false, // если true(что-то появится), то в Dom монтируется(модал выйдет)
     
    return <>
    
        {currentPhoto && <Modal setCurrentPhoto={setCurrentPhoto} currentPhoto={currentPhoto}/>} 
        <div className="gallery">
            {
                data.map((photo, id) => {
                    return <PhotoCard setCurrentPhoto={setCurrentPhoto} photo={photo} key={id}/>
                })
            }
        </div>
    </>
}