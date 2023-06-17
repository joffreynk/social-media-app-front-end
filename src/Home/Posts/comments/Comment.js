import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

const Comment = ({comment, currentUser}) => {

  return (
    <div className='comment'>
      <div className='cleft'>
        <img src={currentUser.profilePicture} alt="hello world " />
        <div className='cmiddle'>
        <p><Link to={`/profile/${currentUser.id}`} >{currentUser.name}</Link> </p>
          <p>{comment.description}</p>
        </div>
      </div>
      

      <div className='cright'>
        <span>
        <ReactTimeAgo date={new Date(comment.createdAt)} locale="en-US"/>
        </span>
      </div>
    </div>
  )
}

export default Comment