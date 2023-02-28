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
      <div className='event'>
        <img src={event} alt='event picture' />
        <span>event</span>
      </div>
      <div className='game'>
        <img src={game} alt='game picture' />
        <span>game</span>
      </div>
      <div className='funds'>
        <img src={funds} alt='funds picture' />
        <span>funds</span>
      </div>
      <div className='courses'>
        <img src={courses} alt='courses picture' />
        <span>courses</span>
      </div>
      <div className='tutorial'>
        <img src={tutorial} alt='tutorial picture' />
        <span>tutorial</span>
      </div>
      <div className='video'>
        <img src={video} alt='video picture' />
        <span>video</span>
      </div>
    </div>
  )
}

export default LeftBar