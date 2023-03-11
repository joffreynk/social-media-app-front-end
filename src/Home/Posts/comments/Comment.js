import { Link } from 'react-router-dom';

const Comment = ({comment, currentUser}) => {

  return (
    <div className='comment'>
      <div className='left'>
        <img src={currentUser.profilePicture} alt="hello world " />
      </div>
      
      <div className='user-comment'>
        <p>{currentUser.name}</p>
        <p>{comment.description}</p>
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