import React, { useContext } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import './rightBar.css'

import passportImage from '../images/passport.png'
import { makeRequest } from '../context/requests'
import { AuthContext } from '../context/authContext'

const RightBar = () => {
  const {isLoading, isError, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>makeRequest.get('users').then(res => res.data),
  })

  const folllow  = useMutation({
    mutationFn: (data) =>makeRequest.post('follow', data)
  })

  const currentUser = useContext(AuthContext).currentUser

  return (
    <div className='rightBar'>
      <div className='container'>

{/* Suggestion friends section */}

        <div className='item'>
          <span>Sugestions for you</span>
          {isLoading ?
           <p>Loading suggestions</p>
            : 
            isError
             ? 
             <p>Failed to fetch friends suggestions</p>
              : 
              data.length ?
                data.sort(() => (Math.random() > .5) ? 1 : -1).slice(-4).map(user=>(
                <div key={`${user.id}_${user.userName}_${Math.floor(Math.random()*10000)}`} className='user'>
                  <div className='user-info'>
                    <img src={user.profilePicture ? user.profilePicture : currentUser.profilePicture} alt='passport' />
                    <span>{user.userName}</span>
                  </div>
                  <div className='user-buttons'>
                    <button className='follow' onClick={()=>{folllow.mutate({followerId: currentUser.id, followedId: user.id})}}>Follow</button>
                    <button className='dismiss'>Dismiss</button>
                  </div>
                </div>)) 
              : 'No suggestions exist' 
          }
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
          {isLoading ?
           <p>Loading suggestions</p>
            : 
            isError
             ? 
             <p>Failed to fetch friends suggestions</p>
              : 
              data.length ?
              data.sort(() => (Math.random() > .5) ? 1 : -1).map(user=>(
          <div key={`${user.id}_${user.userName}_${Math.floor(Math.random()*1000)}`} className='user'>
            <div className='user-info online'>
              <img src={user.profilePicture ? user.profilePicture : passportImage} alt='passport' />
              <span>{user.userName}</span>
              <span className='online-status'></span>
            </div>
          </div>
              )) : 'No Friend is online'
              }

        </div>
      </div>
    </div>
  )
}

export default RightBar