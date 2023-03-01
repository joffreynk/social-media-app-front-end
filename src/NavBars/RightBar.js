import React from 'react'

import passportImage from '../images/passport.png'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Sugestions for you</span>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
            </div>
            <div>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar