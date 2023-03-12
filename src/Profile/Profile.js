


import './profile.css'
import profilePict from '../images/passport.png';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img className='cover' src='https://imageio.forbes.com/specials-images/dam/imageserve/1034931427/960x0.jpg?format=jpg&width=960' alt='Profile' />
        <img className='profilePict' src={profilePict} alt='Profile' />
      </div>
      <div className='userContainer'>

      </div>
      
    </div>
  )
}

export default Profile