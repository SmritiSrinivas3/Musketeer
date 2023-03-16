import React from 'react'
import homeImg from './homeImg.png'
import fist from './FIST.png'
import friendsImg from './friends.png'
import manWithCam from './manWithCam.png'
import './Landing.css'



function Landing() {
  const email = "smritisrinivasneelamana@gmail.com"

  return (
    <div className='landingContainer'>
        <div className="heroText">
            Where Friendships Flourish
        </div>
      <img className='landingImg' src={homeImg}></img>
      <div className="buttonGroups">
        <button>LOGIN</button>
        <button onClick={() => window.location.assign('./signup')}>SIGN UP</button>
      </div>
      <div className="redBox">
        JOIN THE CONVERSATION
      </div>
      <div className="details">
        <div className="por1 por">
           <img className = 'detailsImg'src = {manWithCam}></img>
           <h2>SHARE YOUR STORIES</h2>
        </div>
        <div className="por2 por">
          <img className = 'detailsImg'src={friendsImg}></img>
          <h2>MEEET AND MAKE FRIENDS</h2>
        </div>
        <div className="por3 por">
        <img className = 'detailsImg' src = {fist}></img>
        <h2>STAY CONNECTED</h2>
        </div>
      </div>
      <div className="contactFooter">
        <button onClick={()=>window.location.href = `mailto:${email}`}>CONTACT US </button>
      </div>
    </div>
  )
}

export default Landing
