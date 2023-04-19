import { useQuery } from '@tanstack/react-query'

import './posts.css'

import Post from './post'
import CreatePost from './createPost'
import { makeRequest } from '../../context/requests'

const Posts = () => {
  
  const { isLoading, error, posts } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
    makeRequest.get('/posts').then((res) => res.json()),
  })

  if (isLoading) return 'Loading POSTS';

  if (error) return 'Failed to fetch posts, please try again';

  return (

    <div className='posts'>
      <CreatePost />
     {
      posts.length? posts.map(post => <Post post={post} key={post.id} /> ): "OOops you don't have a post"
     }

    </div>
  )
}

export default Posts