import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const Comment = ({comment}) => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className='comment'>
      <div className='left'>
        <img src={currentUser.profilePicture} alt="hello world " />
      </div>
      <div className='middle'></div>
      <div className='right'>

      </div>
    </div>

  )
}

export default Comment