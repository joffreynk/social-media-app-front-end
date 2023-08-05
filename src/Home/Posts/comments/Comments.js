import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext, useState } from 'react'


import Comment from './Comment'
import './comments.css'
import { AuthContext } from '../../../context/authContext';
import { makeRequest } from '../../../context/requests';


const Comments = ({comments, postId}) => {
  const {currentUser}  = useContext(AuthContext);
  const [createCommnet, setCreateComment] = useState('')
  const [CommnetError, setCommnetError] = useState(null)

  const clientQuery = useQueryClient();


  const addComment = useMutation({
    queryKey: [`comments/${postId}`],
    mutationFn: (data)=>{
      return makeRequest.post('/comments', data)
    },
    onSuccess: () => {
      clientQuery.invalidateQueries({  queryKey: [`comments/${postId}`], });
    },
  })

  return (
    <div className='comments'>
          {CommnetError && <span style={{color:'red', alignSelf:'center', marginBottom: '-15px'}}>{CommnetError}</span>}
      <div className='comment'>
        <div className='cleft'>
          <img src={currentUser.profilePicture} alt="hello world " />
          <div className='cinput'>
            <textarea value={createCommnet} placeholder='what do you think about this post?' onChange={(e)=>setCreateComment(e.target.value)} ></textarea>
          </div>
        </div>

        <div className='cright'>
          <button onClick={()=>{
            createCommnet.length<2? setCommnetError('please write you thought!!!!!') : addComment.mutate({comment: createCommnet, postId: postId})
          }} >Send</button>
        </div>
      </div>

      {
        comments.map((comment) =><Comment currentUser={currentUser} key={comment.id} comment={comment} />)
      }
    </div>
  )
}

export default Comments