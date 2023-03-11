import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import posts from '../data.js'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';

const Post = ({post}) => {

  const {currentUser}  = useContext(AuthContext);
  const liked = false;

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
          {!liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon /> }
          
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
    </div>
  )
}

export default Post