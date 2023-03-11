import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const Comment = ({comment}) => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className='comment'>
      <div className='left'>
        <img src={currentUser.profilePicture} alt="hello world " />
        <div className='post-status'>

          <span><Link to={`/profile/${comment.userId}`} >{currentUser.name}</Link> </span>
          <span className='date'>1 minute ago</span>
        </div>
      </div>
    </div>

  )
}

export default Comment