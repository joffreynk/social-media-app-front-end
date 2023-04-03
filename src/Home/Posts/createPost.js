import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

import './createPost.css'

const CreatePost = () => {
    const {currentUser} = useContext(AuthContext)
    const [file, setFile] = useState(null)
    const setImage = ()=>{
        document.getElementById('my-file').click()
        setFile(document.getElementById('my-file').value[0])

    }
  return (
    <form>
        <div className='upper'>
            <div className='img'>
            <img src={currentUser.profilePicture} alt='user profile' />
            </div>
            <textarea rows={4}  placeholder='what is in your mind'></textarea>
        </div>
        <div className='lower'>
            <input type='file' accept="image/x-png,image/gif,image/jpeg" name='choose image' alt='choose picture' />
            <button type='submit'>post</button>
        </div>
    </form>
  )
}

export default CreatePost