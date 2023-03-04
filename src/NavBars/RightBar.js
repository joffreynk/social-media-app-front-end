import React from 'react'

import './rightBar.css'

import passportImage from '../images/passport.png'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>

{/* Suggestion friends section */}

        <div className='item'>
          <span>Sugestions for you</span>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
            </div>
            <div className='user-buttons'>
            <button className='follow'>Follow</button>
              <button className='dismiss'>Dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
            </div>
            <div className='user-buttons'>
              <button className='follow'>Follow</button>
              <button className='dismiss'>Dismiss</button>
            </div>
          </div>
        </div>


{/* 
last activities section
 */}
        <div className='item'>
          <span>Last activities</span>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>

          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>

          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>

          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div> <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <p>liked your post</p>
            </div>
            <div className='user-buttons'>
              <p>1 min ago</p>
            </div>
          </div>
        </div>

{/* online friends section */}

        <div className='item'>
          <span>Last activities</span>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>

          <div className='user'>
            <div className='user-info online'>
              <img src={passportImage} alt='passport' />
              <span>Joffrey NK</span>
              <span className='online-status'></span>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default RightBar