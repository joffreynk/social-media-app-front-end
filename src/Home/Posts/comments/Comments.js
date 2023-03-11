import Comment from './Comment'

import comments from '../../data.js'

const Comments = () => {
  return (
    <div className='comments'>
      {
        comments.map((comment) =><Comment key={comment.id} comment={comment} />)
      }
    </div>
  )
}

export default Comments