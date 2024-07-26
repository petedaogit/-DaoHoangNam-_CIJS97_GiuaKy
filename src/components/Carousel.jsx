import React from 'react'
import spycarousel from '../Assets/images/spy_carousel 1.png'
import overlay from '../Assets/images/overlay.png'
function carousel() {
  return (
    <div className='carousel-container'>
        <img src={spycarousel} className='mainimage' />
        <img src={overlay} className='overlay' />
        <div className="carousel-text">
            <h4>Weather with you</h4>
            <p> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
        </div>
    </div>
  )
}

export default carousel