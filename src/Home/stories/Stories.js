import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.css'

import stories from '../data.js'

const Stories = () => {

  const {currentUser}  = useContext(AuthContext);


  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePicture} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {
        stories.map(story=>(
          <div className='story' key={story.id}>
            <img src={story.img} alt={story.brand} />
            <span>{story.name}</span>
          </div>
        ))
      }
      
    </div>
  )
}

export default Stories