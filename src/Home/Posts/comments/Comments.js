import Comment from './Comment'

import comments from '../../data.js'

import './comments.css'

const Comments = () => {
  return (
    <div className='comments'>
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
      {
        comments.map((comment) =><Comment key={comment.id} comment={comment} />)
      }
    </div>
  )
}

export default Comments