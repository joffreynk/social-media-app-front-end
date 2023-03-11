import { useContext } from 'react'
import Comment from './Comment'

import comments from '../../data.js'

import './comments.css'
import { AuthContext } from '../../../context/authContext';


const Comments = () => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className='comments'>
      <div className='comment'>

        <div className='cleft'>
          <img src={currentUser.profilePicture} alt="hello world " />
          <div className='cmiddle c-input'>
          <input type="text" placeholder='Search' />
          </div>
        </div>


        <div className='cright'>
          <button>Send</button>
        </div>
      </div>

      {
        comments.map((comment) =><Comment currentUser={currentUser} key={comment.id} comment={comment} />)
      }
    </div>
  )
}

export default Comments