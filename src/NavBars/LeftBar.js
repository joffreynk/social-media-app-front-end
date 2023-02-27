import React from 'react'
import event from '../images/nav/event.png'
import game from '../images/nav/game.png'
import funds from '../images/nav/funds.png'
import courses from '../images/nav/courses.png'
import tutorial from '../images/nav/tutorial.png'
import video from '../images/nav/video.png'

import passportImage from '../images/passport.png'
import './leftBar.css'

const LeftBar = () => {
  return (
    <div className='left-bar'>
      <div className='menu'>
        <div className='user'>
        <img src={passportImage} alt='passport  picture' />
        <span>JOffreynk</span>
        </div>

      </div>
      
    </div>
  )
}

export default LeftBar