import './posts.css'

import Post from './post'
import posts from '../data.js'

const Posts = () => {
  

  return (
    <div className='posts'>
     {
      posts.map(post => <Post post={post} key={post.id} /> )
     }

    </div>
  )
}

export default Posts