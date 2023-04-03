import './posts.css'

import Post from './post'
import posts from '../data.js'
import CreatePost from './createPost'

const Posts = () => {
  

  return (
    <div className='posts'>
      <CreatePost />
     {
      posts.map(post => <Post post={post} key={post.id} /> )
     }

    </div>
  )
}

export default Posts