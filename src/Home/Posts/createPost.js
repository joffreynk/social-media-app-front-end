import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

import './createPost.css'

const CreatePost = () => {
  const {currentUser} = useContext(AuthContext)
  const [postData, setPostData] = useState({description:null, postImage:null})
  const post = ()=>{
        
    }
  return (
    <form>
      <div className='upper'>
        <div className='img'>
        <img src={currentUser.profilePicture} alt='user profile' />
        </div>
        <textarea rows={4}  placeholder='what is in your mind' name='description' onChange={e=>setPostData({...postData, describe:e.target.value})}></textarea>
      </div>
      <div className='lower'>
        <input type='file' accept="image/x-png,image/gif,image/jpeg"  onChange={e=>setPostData({...postData, postImage:e.target.value})} name='postImage' alt='choose picture' />
        <button type='submit' onClick={post}>post</button>
      </div>
    </form>
  )
}

export default CreatePost