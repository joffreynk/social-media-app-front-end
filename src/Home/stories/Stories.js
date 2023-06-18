import { useRef } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.css'

import { makeRequest } from '../../context/requests';

const Stories = () => {

    const {currentUser}  = useContext(AuthContext);
    const story = useRef(null)

    const createStory = useMutation({
      mutationKey: ['stories'],
      mutationFn: (data)=>makeRequest.post('stories', data)
    })

    const {isError: isStoriesError, isLoading: isStoriesLoading, data: allStories} = useQuery({
      queryKey: ['stories'],
      queryFn: ()=>makeRequest.get('stories').then((response)=>response.data).catch((error)=>error.message)
    })



    const handleFileUpload = e => {
      story.current.click()
    const file = story.current.files[0];
    if (file){
      const formData = new FormData();
      formData.set('story', file);
      createStory.mutate(formData)
    }
  };

  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePicture} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <input
          ref={story}
          accept='image/*'
          onChange={handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <button onClick={handleFileUpload}>+</button>
      </div>
      {
        isStoriesLoading ? 'Loading stories........':
        isStoriesError ? 'Failed to load stories':
        allStories.map(story=>(
          <div className='story' key={story.id}>
            <img src={story.storyPicture} alt={story.brand} />
            <span>{story.description}</span>
          </div>
        ))
      }
      
    </div>
  )
}

export default Stories