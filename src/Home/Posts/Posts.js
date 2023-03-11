import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import './posts.css'

import posts from '../data.js'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';

const Posts = () => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className='posts'>
     {
      posts.map(post => <div key={post.id} className='post'>
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
            <FavoriteBorderOutlinedIcon />
            <span>Likes</span>
          </div>
          <div className='icons'>
            <TextsmsOutlinedIcon />
            <span>Comments</span>
          </div>
          <div className='icons'>
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
      </div>)
     }
      
    </div>
  )
}

export default Posts