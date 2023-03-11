import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import './posts.css'

import posts from '../data.js'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';

const Posts = () => {
  

  return (
    <div className='posts'>
     {
      posts.map(post => <Po)
     }
      
    </div>
  )
}

export default Posts