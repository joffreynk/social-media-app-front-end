import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.css'

import stories from '../data.js'
import { useRef } from 'react';

const Stories = () => {

  const {currentUser}  = useContext(AuthContext);
  const story = useRef(null)
  const handleFileUpload = e => {
    story.current.click()
  // console.log(e.target.files[0].name);
  const file = story.current.files[0];
  console.log('====================================');
  console.log(file);
  console.log('====================================');
};


  return (
    <div className='stories'>
      <div className='story' on>
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



// handleFileUpload = event => {
//   console.log(event.target.files[0].name);
// };

// render() {
//   return (
//     <React.Fragment>
//       <input
//         ref="fileInput"
//         onChange={this.handleFileUpload}
//         type="file"
//         style={{ display: "none" }}
//         // multiple={false}
//       />
//       <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
//     </React.Fragment>
//   );
// }

export default Stories