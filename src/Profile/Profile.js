import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './profile.css'
import { Link } from 'react-router-dom';
import Posts from '../Home/Posts/Posts';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Profile = ({}) => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='profile'>
      <div className='images'>
        <img className='cover' src='https://imageio.forbes.com/specials-images/dam/imageserve/1034931427/960x0.jpg?format=jpg&width=960' alt='Profile' />
        <img className='profilePict' src={currentUser.profilePicture} alt='Profile' />
      </div>
      <div className='userContainer'>
        <div className='user'>
          <div className='left'>
            <Link to=''><FacebookOutlinedIcon /> </Link>
            <Link to=''><InstagramIcon /> </Link>
            <Link to=''><TwitterIcon /> </Link>
            <Link to=''><LinkedInIcon /> </Link>
            <Link to=''><GitHubIcon /> </Link>
            <Link to=''><PinterestIcon /> </Link>
          </div>
         <div className='center'>
          <p>{currentUser.firstName} {" "} {currentUser.lastName}</p>
          <div className='location'>
          <Link to=''><LocationOnIcon fontSize='small' /> <span>Bujumbura</span> </Link>
          <Link to=''><LanguageIcon fontSize='small' /><span>website</span> </Link>
          </div>
          <button>Follow</button>
         </div>
         <div className='right'>
          <MailOutlineIcon />
          <MoreVertIcon />
         </div>
        </div>

      </div>

      <div className='user-posts' >
        <Posts />
      </div>
      
    </div>
  )
}

export default Profile