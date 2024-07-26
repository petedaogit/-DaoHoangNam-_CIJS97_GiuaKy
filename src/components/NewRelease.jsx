import React from 'react'
import './home.css'
import overlay from '../Assets/images/overlay.png'
function NewRelease({episode, name, imgURL}) {
  return (
<div className="newRelease-container">
    <div className="moviebanner">
        <div className="image-container">
        <img src={imgURL} alt="" className="movieIMG" />
        <img src={overlay} className='movieOverlay' />
        </div>
        <div className="episode"><p>{episode}</p></div>
    </div>
    <div className="movieName"><p>{name}</p></div>
</div>
  )
}

export default NewRelease