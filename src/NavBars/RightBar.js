import React, { useContext,  } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import './rightBar.css'

import passportImage from '../images/passport.png'
import { makeRequest } from '../context/requests'
import { AuthContext } from '../context/authContext'

const RightBar = () => {
  const clientQuery = useQueryClient();
  const {isLoading, isError, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>makeRequest.get('users').then(res => res.data),
  })

  const {isLoading: isloadingSuggestions,  isError: isSuggestionsError, data: suggestions } = useQuery({
    queryKey: ['follow'],
    queryFn: () =>makeRequest.get('follow/suggestions').then(res => res.data),
  })

  const folllow  = useMutation({
    mutationFn: (data) =>makeRequest.post('follow', data),
    onSuccess: () =>clientQuery.invalidateQueries({ queryKey: ['follow'] }),
  });

  const folllowBack  = useMutation({
    mutationFn: (data) =>makeRequest.put('follow', data),
     onSuccess: () =>clientQuery.invalidateQueries({ queryKey: ['follow'] }),
  })

  const currentUser = useContext(AuthContext).currentUser

  return (
    <div className='rightBar'>
      <div className='container'>

{/* Suggestion friends section */}

        <div className='item'>
          <span>Sugestions for you</span>
          {isloadingSuggestions ?
           <p>Loading suggestions</p>
            : 
            isSuggestionsError
             ? 
             <p>Failed to fetch friends suggestions</p>
              : 
              suggestions.length ?
              suggestions.map(user=>(
                <div key={`${user.id}_${user.userName}_${Math.floor(Math.random()*10000)}`} className='user'>
                  <div className='user-info'>
                    <img src={user.profilePicture ? user.profilePicture : currentUser.profilePicture} alt='passport' />
                    <span>{user.firstName} <span>{user.lastName}</span> </span>
                  </div>
                  <div className='user-buttons'>
                    {Number(currentUser.id) === Number(user.followed) ? <button className='follow-back' onClick={()=>{folllowBack.mutate({follower: user.id, followingId: user.followingId})}}>Follow Back</button>  : <button className='follow' onClick={()=>{folllow.mutate({followedId: user.id})}}>Follow</button>}
                    
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
          <span>Online users</span>
          {isLoading ?
           <p>Loading suggestions</p>
            : 
            isError
             ? 
             <p>Failed to fetch friends suggestions</p>
              : 
              data.length ?
              data.map(user=>(
          <div key={`${user.id}_${user.userName}_${Math.floor(Math.random()*1000)}`} className='user'>
            <div className='user-info online'>
            <img src={user.profilePicture ? user.profilePicture : currentUser.profilePicture} alt='passport' />
            <span>{user.firstName} <span>{user.lastName}</span> </span>
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