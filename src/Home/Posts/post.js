import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';
import Comments from './comments/Comments.js';

const Post = ({post}) => {

  const {currentUser}  = useContext(AuthContext);
  const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')) || false)

  useEffect(()=>{
    localStorage.setItem('liked', liked)
  }, [liked])

  return (
    <div className='post'>
      <div className='user'>
        <div className='left'>
          <img src={currentUser.profilePicture} alt="hello world " />
          <div className='post-status'>

            <span><Link to={`/profile/${post.userId}`} >{currentUser.name}</Link> </span>
            <span className='date'>1 minute ago</span>
          </div>
        </div>
        <div className='right'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='post-info'>
        <p>P{post.description}</p>
        <img src={post.img} alt={post.description} />
      </div>
      <div className='reactions'>
        <div className='icons'>
          {!liked ? <FavoriteBorderOutlinedIcon onClick={()=>setLiked(!liked)} /> : <FavoriteOutlinedIcon onClick={()=>setLiked(!liked)} /> }
          
          <span>15 Likes</span>
        </div>
        <div className='icons'>
          <TextsmsOutlinedIcon />
          <span>10 Comments</span>
        </div>
        <div className='icons'>
          <ShareOutlinedIcon />
          <span>7 Shares</span>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default Post