import React from 'react'
import './home.css'
function NavBar() {
  
  return (
    <div>
        <div className='Nav'>
        <h2>Anonime</h2>
        <p>Home</p>
        <p>List anime</p>
        <input type="Text" placeholder='Search anime or movie'/>
        </div>
    </div>
  )
}

export default NavBar