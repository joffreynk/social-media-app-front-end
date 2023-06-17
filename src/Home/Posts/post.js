import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Delete } from '@mui/icons-material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import ReactTimeAgo from 'react-time-ago'

import { AuthContext } from '../../context/authContext'
import Comments from './comments/Comments.js';
import { makeRequest } from '../../context/requests';

const Post = ({post}) => {

  const {currentUser}  = useContext(AuthContext);
  // const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')) || false)
  const [toggleComments, setToggleComments] = useState(false)

  // useEffect(()=>{
  //   localStorage.setItem('liked', liked)
  // }, [liked])



  const deletePostMutation = useMutation({
    queryKey: ['posts'],
    mutationFn: (data)=>{
      return makeRequest.post('/posts/delete', data)
    },
    onSuccess: ()=>makeRequest.get('/posts').then((response)=>response.data),
  })

  const likePost = useMutation({
    queryKey: ['likes'],
    mutationFn: (data)=>{
      return makeRequest.post('/likes', data)
    },
  })

  const disLikePost = useMutation({
    queryKey: ['likes'],
    mutationFn: (data)=>{
      return makeRequest.put('/likes', data)
    },
  })

  const deletePost = (post) => {
    const {id, picture } = post;
    const pictureUrl = picture ? picture.split('/').slice(-2).join('/') : null;
    return deletePostMutation.mutate({id, pictureUrl})
  }

  const {isError: isLikesError, isLoading: isLikesLoading, data: likes} = useQuery({
    queryKey: [`likes${post.id}`],
    queryFn: () =>makeRequest.get(`likes/${post.id}`).then((response) => response.data).catch((error) =>error.message)
  })

  return (
    <div className='post'>
      <div className='user'>
        <div className='left'>
          <img src={currentUser.profilePicture} alt="hello world " />
          <div className='post-status'>

            <span><Link to={`/profile/${currentUser.id}`} >{currentUser.firstName}</Link> </span>
            <span className='date'><ReactTimeAgo date={new Date(post.createdAt)} locale="en-US"/></span>
          </div>
        </div>
        <div className='right'>
          {/* <MoreVertIcon /> */}
          {currentUser.id === post.userId && <Delete className='delete-post' onClick={()=>deletePost(post)} />}
        </div>
      </div>
      <div className='post-info'>
        {post.description && <p>{post.description}</p>}
        {post.picture && <img src={post.picture} alt={post.title} />}
      </div>
      <div className='reactions'>
        <div className='icons'>
          {
            isLikesLoading? 'Loading likes' : 
            isLikesError? 'Error loading' :
            <div>
              {likes && likes.length && likes.filter(like => like.userId === currentUser.id)[0] && likes.filter(like => like.userId === currentUser.id)[0].id ? <FavoriteOutlinedIcon onClick={()=>{disLikePost.mutate({postId: post.id})}} /> : < FavoriteBorderOutlinedIcon  onClick={()=>{likePost.mutate({postId: post.id})}} /> }
              <span>{likes.length} </span>
              <span className='icon-text'>Likes</span>
            </div>
          }

        </div>
        <div className='icons' onClick={()=>setToggleComments(!toggleComments)}>
          <TextsmsOutlinedIcon />
          <span>10</span>
          <span className='icon-text'>Comments</span>
        </div>
        <div className='icons'>
          <ShareOutlinedIcon />
          <span>7</span>
          <span className='icon-text'>Shares</span>
        </div>
      </div>
      {toggleComments && <Comments/>}
    </div>
  )
}

export default Post