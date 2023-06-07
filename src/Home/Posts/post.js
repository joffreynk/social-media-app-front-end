import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Delete } from '@mui/icons-material';

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';
import Comments from './comments/Comments.js';

const Post = ({post}) => {

  const {currentUser}  = useContext(AuthContext);
  const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')) || false)
  const [toggleComments, setToggleComments] = useState(false)

  useEffect(()=>{
    localStorage.setItem('liked', liked)
  }, [liked])

  const deletePost = (id, url) => {
    const pictureUrl = url.split('/').slice(-2).join('/')
    console.log(id, '  :  ', pictureUrl);
  }

  return (
    <div className='post'>
      <div className='user'>
        <div className='left'>
          <img src={currentUser.profilePicture} alt="hello world " />
          <div className='post-status'>

            <span><Link to={`/profile/${currentUser.id}`} >{currentUser.name}</Link> </span>
            <span className='date'>1 minute ago</span>
          </div>
        </div>
        <div className='right'>
          <MoreVertIcon />
          <Delete className='delete-post' onClick={()=>deletePost(post.id, post.picture)} />
        </div>
      </div>
      <div className='post-info'>
        <p>{post.description}</p>
        <img src={post.picture} alt={post.title} />
      </div>
      <div className='reactions'>
        <div className='icons'>
          {!liked ? <FavoriteBorderOutlinedIcon onClick={()=>setLiked(!liked)} /> : <FavoriteOutlinedIcon onClick={()=>setLiked(!liked)} /> }
          
          <span>15</span>
          <span className='icon-text'>Likes</span>
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