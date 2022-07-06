import React from 'react'
import Comments from '../singleblogpage/comment/Comments'

function ExampleComment() {
  return (
    <>
        <Comments  
        commentsUrl="http://localhost:3000/comment"
        currentUserId='1' />
    </>
  )
}

export default ExampleComment