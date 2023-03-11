import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const Comment = ({comment}) => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className='comment'>
      <div className='left'>
        <img src={currentUser.profilePicture} alt="hello world " />
      <div className='user'>
        <p>{currentUser.name}</p>
        <p>{comment.description}</p>
      </div>
      </div>
      <div className='right'>
        <span>
          1 minute ago
        </span>
      </div>
    </div>
  )
}

export default Comment