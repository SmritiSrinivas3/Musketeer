import React from 'react'
import navImg from './Musketeer.png'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navContent'>
      <div className="navImage">
        <img src={navImg}></img>
      </div>
      <div className="navWritings">
        <ul>
            <li>ABOUT</li>
            <li>HELP</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
